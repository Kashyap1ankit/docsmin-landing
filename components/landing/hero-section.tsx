import { anonymouse, instrumental, inter } from "@/lib/font";
import Balancer from "react-wrap-balancer";
import { WordRotate } from "@/components/magicui/word-rotate";
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
    <div className="flex flex-col md:flex-row justify-between items-center gap-x-3  md:min-h-screen">
      {/* left side  */}
      <div className="w-1/3 flex flex-col gap-y-12 px-4">
        <div className="flex flex-col gap-y-4">
          <span
            className={`${inter.className} text-white/80 text-6xl font-bold`}
          >
            Documentation&nbsp;
            <span className="inline-flex items-center gap-2">
              Done
              <span className={`${instrumental.className} text-primary-btn`}>
                {/* <WordRotate
                  words={["Right", "Fast", "Clear", "Collaborative"]}
                  duration={3000}
                /> */}

                <RotatingText
                  texts={["Fast", "Clear", "Right", "Collaborative"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-primary-btn text-white overflow-hidden py-0.5  justify-center rounded-lg"
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
            Boost your productivity with docsmin. Create professional looking
            documentation website in minutes. Create and manage all through one
            platform
          </p>
        </div>

        <div>
          <Button className="p-6 rounded-[15px] border-4 border-[#2F2F30] bg-secondary-btn hover:bg-secondary-btn cursor-pointer group duration-500 inset-shadow-sm inset-shadow-white/50">
            <p className={`${inter.className} font-bold text-lg text-white`}>
              Get Started for Free
            </p>

            <LuCircleArrowRight
              className="size-6 group-hover:translate-x-2 transition-transform"
              color="white"
            />
          </Button>
        </div>

        <div className="flex flex-row gap-x-2 items-center">
          <AvatarCircles numPeople={50} avatarUrls={avatars} />
          <ShinyText
            text="Used & Loved By 50+ companies"
            disabled={false}
            speed={3}
            className={`${anonymouse.className} text-sm`}
          />
        </div>
      </div>

      {/* right side  */}
      <div className="w-2/3 mask-b-from-80% ">
        <Image
          src={"/dashboard-2.png"}
          className="object-cover w-full rounded-t-[30px] p-2  border-4 border-[#2F2F30] bg-[#232324] "
          width={1000}
          height={1000}
          alt="dashboard"
        />
      </div>
    </div>
  );
}
