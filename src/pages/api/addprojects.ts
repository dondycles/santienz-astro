export const prerender = false;

import type { APIRoute } from "astro";
import fs from "fs/promises";
import path from "path";
import { supabase } from "@/db/supabase";
import { PROJECT_INFO } from "@/lib/projects-info";

export const POST: APIRoute = async ({ cookies, redirect }) => {
	const PROJECTS = await Promise.all(
		PROJECT_INFO.map(async (project) => {
			if (!project.imgs) return { ...project, imgs: null };

			const sbFiles = await Promise.all(
				project.imgs.map(async (img, i) => {
					const localPath = path.resolve(
						"public",
						img.src.replace("/@fs/", "").split("?")[0],
					);
					const fileBuffer = await fs.readFile(localPath);
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
