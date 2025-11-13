"use client";

import { anonymouse, instrumental, inter } from "@/lib/font";
import { motion } from "motion/react";
import Image from "next/image";
import { Button } from "../ui/button";
import { LuCircleArrowRight } from "react-icons/lu";
import RotatingText from "../RotatingText";
import ShinyText from "../ShinyText";
import { AvatarCircles } from "../magicui/avatar-circles";

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export default function HeroSection() {
  return (
    <motion.div className="flex flex-col md:flex-row justify-between items-center gap-x-3  md:min-h-screen">
      {/* left side  */}
      <div className="w-1/3 flex flex-col gap-y-12 px-4">
        <motion.div
          className="flex flex-col gap-y-4"
          initial={{ y: 50, opacity: 0, filter: "blur(5px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 85,
          }}
        >
          <span
            className={`${inter.className} text-white/80 text-6xl font-bold leading-20`}
          >
            Video Sharing&nbsp;
            <span className="inline-flex items-start gap-2">
              Becomes
              <span className={`${instrumental.className} text-primary-btn`}>
                {/* <WordRotate
                  words={["Right", "Fast", "Clear", "Collaborative"]}
                  duration={3000}
                /> */}

                <RotatingText
                  texts={["Easy", "Secure", "Simple", "Reliable"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-primary-btn text-white overflow-hidden py-0.5  justify-center rounded-lg "
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </span>
            </span>
          </span>

          <p
            className={`${inter.className} text-muted-foreground/80 font-normal w-3/4`}
          >
            VidStash lets you upload, preview, and share videos securely — with
            real-time status, link controls, and effortless access.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 85,
            delay: 0.25,
          }}
        >
          <Button className="p-6 rounded-[15px] border-4 border-[#2F2F30] bg-secondary-btn hover:bg-secondary-btn cursor-pointer group duration-500 inset-shadow-sm inset-shadow-white/50">
            <p className={`${inter.className} font-bold text-lg text-white`}>
              Upload your first reel
            </p>

            <LuCircleArrowRight
              className="size-6 group-hover:translate-x-2 transition-transform"
              color="white"
            />
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-row gap-x-2 items-center"
          initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 10,
            stiffness: 85,
            delay: 0.25,
          }}
        >
          <AvatarCircles numPeople={50} avatarUrls={avatars} />
          <ShinyText
            text="Used & Loved By 50+ companies"
            disabled={false}
            speed={3}
            className={`${anonymouse.className} text-sm`}
          />
        </motion.div>
      </div>

      {/* right side  */}
      <motion.div
        className="w-2/3 mask-b-from-80% "
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{
          duration: 0.5,
          delay: 0.65,
          type: "keyframes",
        }}
      >
        <Image
          src={"/dashboard-2.png"}
          className="object-cover w-full rounded-t-[30px] p-2  border-4 border-[#2F2F30] bg-[#232324] "
          width={1000}
          height={1000}
          alt="dashboard"
        />
      </motion.div>
    </motion.div>
  );
}
