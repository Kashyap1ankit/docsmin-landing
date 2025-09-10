import { instrumental, inter } from "@/lib/font";
import Balancer from "react-wrap-balancer";
import { WordRotate } from "@/components/magicui/word-rotate";
import Image from "next/image";
import { Button } from "../ui/button";
import { LuCircleArrowRight } from "react-icons/lu";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-x-3 border border-white md:min-h-screen">
      {/* left side  */}
      <div className="w-1/3 flex flex-col gap-y-12 px-4">
        <div className="flex flex-col gap-y-4">
          <span
            className={`${inter.className} text-white/80 text-6xl font-bold`}
          >
            Documentation , Done{" "}
            <span className={` text-primary-btn  ${instrumental.className}`}>
              <WordRotate
                words={["Right", "Fast", "Clear", "Collaborative"]}
                duration={3000}
              />
            </span>
          </span>

          <p
            className={`${inter.className} text-muted-foreground font-normal w-3/4`}
          >
            Boost your productivity with docsmin. Create professional looking
            documentation website in minutes. Create and manage all through one
            platform
          </p>
        </div>

        <div>
          <Button className="p-6 rounded-[15px] border-4 border-[#2F2F30] bg-secondary-btn cursor-pointer group duration-500">
            <p className={`${inter.className} font-bold text-lg text-white`}>
              Get Started for Free
            </p>
            <LuCircleArrowRight
              className="size-6 group-hover:translate-x-2 transition-transform"
              color="white"
            />
          </Button>
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
