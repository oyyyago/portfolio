import { Code2Icon, GitForkIcon, StarIcon } from "lucide-react";
import { Repo } from "../../types/custom";

interface ProjectCardProps extends Repo {}

export function ProjectCard({
  name,
  html_url,
  stargazers_count,
  forks_count,
  language,
  homepage,
}: ProjectCardProps) {
  return (
    <div className="hover:scale-105 hover:duration-100 hover:shadow-md hover:shadow-primary">
      <div>
        <div
          className="whitespace-nowrap overflow-hidden text-ellipsis"
          title={name}
        >
          {name}
        </div>
      </div>
      <div>
        <ul className="w-full flex items-center gap-4">
          <li className="flex items-center gap-1">
            <GitForkIcon />
            {forks_count}
          </li>
          <li className="flex items-center gap-1">
            <StarIcon />
            {stargazers_count}
          </li>
          <li className="flex items-center gap-1">
            <Code2Icon />
            {language}
          </li>
        </ul>

        <div className="mt-4 flex items-center gap-2">
          <a
            href={html_url}
            target="_blank"
          >
            Repositório
          </a>
          {homepage && (
            <a
              href={homepage}
              target="_blank"
            >
              Deploy
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
