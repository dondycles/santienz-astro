import { PROJECT_INFO } from "@/lib/projects-info";
import { Frown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProjectsMapper() {
  const [query, setQuery] = useState("");
  const filteredProjects = PROJECT_INFO.filter((project) =>
    project.title.toLowerCase().includes(query.toLowerCase()),
  ).sort((a, b) => a.title.localeCompare(b.title));

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const queryData = searchParams.get("query");
    if (queryData) setQuery(queryData);
  }, [query, setQuery]);

  return filteredProjects.length ? (
    filteredProjects.map((project) => (
      <a
        href={`/projects/${project.slug}`}
        className="w-full mb-0 mt-auto "
        key={project.slug}
      >
        <section
          className="bg-primary/10 rounded-xl flex flex-col h-fit overflow-hidden relative"
          id={project.title}
        >
          <img
            src={project.imgs[0].src}
            alt={project.title}
            className="w-full object-cover shrink-0"
          />
          <h2 className="text-primary-foreground text-2xl lg:text-4xl font-semibold p-3 xmd:p-4 absolute bottom-0 left-0 right-0 drop-shadow-sm bg-gradient-to-t from-foreground to-transparent">
            {project.title}
          </h2>
        </section>
      </a>
    ))
  ) : (
    <p className="text-muted-foreground text-center col-span-full mb-2 px-4">
      No results for {query}{" "}
      <span>
        <Frown className="inline ml-1" />
      </span>
    </p>
  );
}
