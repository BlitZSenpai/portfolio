import { projects } from "@/config/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Projects = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Projects</h2>
      <div>
        <ul className="flex flex-col gap-y-4 mt-5">
          {projects.map((project) => (
            <li key={project.url} className="w-fit">
              <Link target="_blank" href={project.url} className="hover:underline no-underline">
                <h3 className="font-semibold">{project.name}</h3>
              </Link>
              <p className="text-zinc-270 font-normal">{project.description}</p>
            </li>
          ))}
        </ul>
        <Link
          target="_blank"
          className="flex flex-row items-center pt-3 underline w-fit"
          href="https://github.com/BlitZSenpai?tab=repositories">
          <p>All projects</p> <ArrowRight className="w-4 h-4 ml-0.5" />
        </Link>
      </div>
    </div>
  );
};
