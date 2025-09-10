"use client";

import { bricolag, inter } from "@/lib/font";
import { motion } from "motion/react";

const logoArray = ["mongodb", "chime", "clay", "docusign", "zapier", "ramp"];

export default function TrustedBy() {
  return (
    <motion.div
      className="max-w-5xl mx-auto flex flex-col gap-y-16"
      initial={{
        y: 100,
        filter: "blur(5px)",
      }}
      whileInView={{
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,

        type: "spring",
        damping: 10,
        stiffness: 85,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="flex flex-col gap-y-4">
        <p
          className={`${bricolag.className} text-4xl text-muted-foreground font-bold  text-center`}
        >
          Loved by users. Built for{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-secondary-btn">
            <span className="relative text-white dark:text-gray-950">
              Startups
            </span>
          </span>
          .
        </p>

        <p
          className={`${inter.className} text-2xl text-white/40 text-center text-sm`}
        >
          Powering the Teams Behind Innovation
        </p>
      </div>
      <div className="grid grid-cols-3 justify-items-center items-center  mx-auto mb-12  gap-1 ">
        {logoArray.map((e, i) => {
          return (
            <div
              key={i}
              className="w-full h-full border-2 border-white/15  border-dashed px-4 py-12 rounded-[5px]"
            >
              <svg
                className="w-[140px] md:h-8 mx-auto md:w-max text-white"
                aria-label={`${e} Logo`}
              >
                <title>{`${e} Logo`}</title>
                <use href={`/spritesheet.svg#${e}-logo`} />
              </svg>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
