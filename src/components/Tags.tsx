import type { ReactNode } from "react";

const colors = {
  SLATE: "bg-slate-400 text-slate-950",
  GRAY: "bg-gray-400 text-gray-950",
  ZINC: "bg-zinc-400 text-zinc-950",
  NEUTRAL: "bg-neutral-400 text-neutral-950",
  STONE: "bg-stone-400 text-stone-950",
  RED: "bg-red-400 text-red-950",
  ORANGE: "bg-orange-400 text-orange-950",
  AMBER: "bg-amber-400 text-amber-950",
  YELLOW: "bg-yellow-400 text-yellow-950",
  LIME: "bg-lime-400 text-lime-950",
  GREEN: "bg-green-400 text-green-950",
  EMERALD: "bg-emerald-400 text-emerald-950",
  TEAL: "bg-teal-400 text-teal-950",
  CYAN: "bg-cyan-400 text-cyan-950",
  SKY: "bg-sky-400 text-sky-950",
  BLUE: "bg-blue-400 text-blue-950",
  INDIGO: "bg-indigo-400 text-indigo-950",
  VIOLET: "bg-violet-400 text-violet-950",
  PURPLE: "bg-purple-400 text-purple-950",
  FUCHSIA: "bg-fuchsia-400 text-fuchsia-950",
  PINK: "bg-pink-400 text-pink-950",
  ROSE: "bg-rose-400 text-rose-950",
} as const;

export function Tags(props: {
  color: keyof typeof colors;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-md px-2 py-1 text-xs font-semibold ${colors[props.color]
        }`}
    >
      {props.children}
    </div>
  );
}
