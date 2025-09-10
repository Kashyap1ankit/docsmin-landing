import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { bricolag, inter } from "@/lib/font";

import { BsShieldFillCheck } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { SiGoogleanalytics } from "react-icons/si";
import { MdEditSquare } from "react-icons/md";

const features = [
  {
    Icon: AiFillThunderbolt,
    name: "Blazing-Fast Setup",
    description:
      "Spin up beautiful, production-ready documentation in minutes — no complex config required.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute right-0 top-20 opacity-100" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: BsShieldFillCheck,
    name: "Secure & Reliable",
    description:
      "Enterprise-grade security, SSL, and 99.9% uptime — so your docs are always available when users need them.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-4 opacity-100" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: MdEditSquare,
    name: "Customizable & Flexible",
    description:
      "Easily match your brands look and feel with themes, custom components, and flexible layouts.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-0 opacity-20" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: MdOutlineScreenSearchDesktop,
    name: "SEO & Performance Optimized",
    description:
      "Automatic sitemap generation, meta tags, and lightning-fast load times to help your docs rank higher.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-4 opacity-20" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: SiGoogleanalytics,
    name: "Built-In Analytics",
    description:
      "Understand what your users are searching for and where they drop off with built-in analytics.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -top-4 opacity-100" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

export default function WhyUs() {
  return (
    <div className="max-w-5xl mx-auto flex flex-col gap-y-16">
      <div className="flex flex-col gap-y-4">
        <p
          className={`${bricolag.className} text-4xl text-muted-foreground font-bold  text-center`}
        >
          Why to Go With{" "}
          <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-secondary-btn">
            <span className="relative text-white dark:text-gray-950">
              Docsmin
            </span>
          </span>
          .
        </p>

        <p
          className={`${inter.className} text-2xl text-white/40 text-center text-sm`}
        >
          How We Are Empowering the Teams That Build the Future
        </p>
      </div>

      <BentoGrid className="lg:grid-rows-3 cursor-pointer">
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}
