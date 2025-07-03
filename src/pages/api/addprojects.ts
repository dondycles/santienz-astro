// With `output: 'static'` configured:
// export const prerender = false;
import { supabase } from "@/db/supabase";
import { PROJECT_INFO } from "@/lib/projects-info";
import type { APIRoute } from "astro";
import { UTApi, UTFile } from "uploadthing/server";
import fs from "fs/promises";
import path from "path";

export const POST: APIRoute = async ({ cookies, redirect }) => {
  // const utapi = new UTApi({
  //   token:
  //     "eyJhcGlLZXkiOiJza19saXZlX2MxOTk4YjQ0ODViYWQ2YTQ2ZmZjYWUxMjdiN2RkMmVmOTQ3YjZlNWYxOTJkNjdmOWYzNTQ0ODA0NjZlZjgzMjEiLCJhcHBJZCI6ImNtdnVlbmxjaHQiLCJyZWdpb25zIjpbInNlYTEiXX0=",
  // });
  const PROJECTS = await Promise.all(
    PROJECT_INFO.map(async (project) => {
      if (!project.imgs) return { ...project, imgs: null };

      // const files = await Promise.all(
      //   project.imgs.map(async (img, i) => {
      //     const localPath = path.resolve(
      //       "public",
      //       img.src.replace("/@fs/", "").split("?")[0],
      //     );
      //     const fileBuffer = await fs.readFile(localPath);
      //     const uint8Array = new Uint8Array(fileBuffer);
      //     return new UTFile([uint8Array], `${i}-${project.slug}.${img.format}`);
      //   }),
      // );

      // const response = await utapi.uploadFiles(files);
      const sbFiles = await Promise.all(
        project.imgs.map(async (img, i) => {
          const localPath = path.resolve(
            "public",
            img.src.replace("/@fs/", "").split("?")[0],
          );
          const fileBuffer = await fs.readFile(localPath);
          const uint8Array = new Uint8Array(fileBuffer);
          const { data, error } = await supabase.storage
            .from("projects")
            .upload(`${project.slug}-${i}`, fileBuffer, {
              contentType: "image/jpeg",
            });
          if (error) throw new Error(error.message);
          if (!data) throw new Error("No Data");
          return data.path;
        }),
      );

      return {
        ...project,
        imgs: sbFiles,
      };
    }),
  );
  const { error } = await supabase.from("projects").insert(PROJECTS);
  if (error) {
    return new Response(error.message, { status: 500 });
  }
  return redirect("/projects");
};
