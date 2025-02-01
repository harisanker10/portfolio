import type { ReactNode } from "react";

const GithubIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 496 512"
    className={className}
  >
    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
  </svg>
);

const LiveLinkIcon = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className={className}
  >
    <path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" />
  </svg>
);

type IProjectProps = {
  img?: {
    src: string;
    alt: string;
  };
  name: string;
  description: string;
  link?: string;
  category: ReactNode;
  githubUrl?: string;
  liveUrl?: string;
};

export function ProjectCard(props: IProjectProps) {
  return (
    <div className="flex flex-col items-center py-6  gap-x-8 relative rounded-md bg-slate-800 p-3 md:flex-row md:items-center hover:bg-slate-700 transition-colors">
      <div className="shrink-0">
        <a href={props.link}>
          {props.img && (
            <img
              className="h-36 w-36"
              src={props.img.src}
              alt={props.img.alt}
              loading="lazy"
            />
          )}
        </a>
      </div>

      <div>
        <div className="flex flex-col items-center md:items-center gap-y-2 md:flex-row">
          <a className="hover:text-cyan-400" href={props.link} target="_blank" aria-label="Link to the project details.">
            <div className="text-xl font-semibold">{props.name}</div>
          </a>

          <div className="ml-3 flex flex-wrap gap-2">{props.category}</div>
        </div>

        <p className="mt-5 md:mt-0 text-gray-400 text-[14px]">
          {props.description}
        </p>
        {(props.githubUrl || props.liveUrl) && (
          <div className="w-10 flex absolute top-0 right-0 items-center p-3 justify-end gap-3">
            {props.githubUrl && (
              <a
                href={props.githubUrl}
                target="_blank"
                className="flex gap-1 items-center justify-center"
                aria-label="View source code on GitHub"
              >
                <GithubIcon className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              </a>
            )}
            {props.liveUrl && (
              <a
                href={props.liveUrl}
                target="_blank"
                className="flex gap-1 items-center justify-center"
                aria-label="View live project"
              >
                <LiveLinkIcon className="w-5 h-5 md:w-6 md:h-6 fill-white" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
