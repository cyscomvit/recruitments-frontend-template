import React from "react";
import { useId } from "react";

export function Departments() {
  return (
    <div className="py-20 lg:py-40">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-white">
          Our Departments
        </h4>

        <p className="text-sm lg:text-base  max-w-2xl  my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          See what we have and what can be your future
        </p>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-700 dark:to-neutral-950 to-neutral-450 p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-white dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-400 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const grid = [
  {
    title: "Development (Web-Dev and Open Source Projects)",
    description:
      "We are the backbone of the chapter for tech. From full stack website, python bots, utility tools, and open-source projects, we do it all. We are the ones who make the chapter look good and work well.",
  },
  {
    title: "Technical (CTF and Projects)",
    description:
      "Our skilled team engages in Capture The Flag (CTF) competitions and security projects, solving puzzles and overcoming digital challenges. We\’re dedicated to creating innovative solutions that enhance system security, ensuring a well-guarded digital environment.",
  },
  {
    title: "Design",
    description:
      "Responsibilities encompass the management of the primary chapter website, subsidiary event websites, and any additional web platforms integral to projects.This role involves the creation of web development projects and applications for utilization within the chapter or by external parties.",
  },
  {
    title: "Event Management",
    description:
      "Plan and organize social media content with an intuitive calendar view, ensuring that posts are timely and relevant. This role involves coordinating various aspects of event management to enhance our chapter’s visibility and engagement.",
  },
  {
    title: "Content",
    description:
      "The Content Department shapes cybersecurity discussions by crafting blogs, news updates, and infographics. We focus on trends, developments, and best practices, educating our audience and spreading awareness about cybersecurity through creative and insightful content.",
  },
  {
    title: "Social Media",
    description:
      "Maintain a vibrant online presence by regularly posting updates on cybersecurity trends and developments. Craft engaging captions, use relevant hashtags, and ensure our chapter’s activities are effectively communicated to our external audience, bridging internal efforts with the world.",
  },
];

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: any) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
