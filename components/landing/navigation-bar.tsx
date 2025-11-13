import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { inter } from "@/lib/font";
import { LuCircleArrowRight } from "react-icons/lu";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavigationBar() {
  return (
    <div className="bg-primary-bg/30 flex flex-row justify-between items-center rounded-[20px] px-4 mx-auto py-2">
      {/* Logo */}
      <div className="flex flex-row justify-between items-center">
        <Image
          src={"/docsmin.png"}
          width={5000}
          height={5000}
          alt="logo"
          className="w-12 object-cover invert-100"
        />

        <p
          className={`${inter.className} font-bold text-lg text-primary-foreground`}
        >
          Vidstash
        </p>
      </div>

      {/* Navigation Menu */}
      <NavigationMenu>
        <NavigationMenuList className="gap-x-6">
          {/* Documentation */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent hover:bg-balck/20 active:bg-balck/20 cursor-pointer transition-colors duration-200">
              <p
                className={`${inter.className} font-medium text-md text-primary-foreground`}
              >
                Documentation
              </p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-black/30 backdrop-blur-2xl p-4 rounded-lg">
              <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] h-full ">
                {/* <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mt-4 mb-2 text-lg font-medium">
                        Getting Started
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li> */}

                <ListItem
                  href="/docs"
                  title="Getting Started"
                  className={`${inter.className}`}
                >
                  Deploy in minutes
                </ListItem>

                <ListItem
                  href="/docs"
                  title="Components"
                  className={`${inter.className}`}
                >
                  Add interactive experience of docs
                </ListItem>
                <ListItem
                  href="/docs/installation"
                  title="MarkDown"
                  className={`${inter.className}`}
                >
                  Learn the format and syntax of markdown
                </ListItem>
                <ListItem
                  href="/docs/primitives/typography"
                  title="Manual Installtion"
                  className={`${inter.className}`}
                >
                  Setup docsmin for your own project
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Resources */}
          {/* <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent cursor-pointer hover:bg-balck/20 active:bg-balck/20 transition-colors duration-200">
              <p
                className={`${inter.className} font-medium text-md text-primary-foreground`}
              >
                Resources
              </p>
            </NavigationMenuTrigger>
            <NavigationMenuContent className="bg-transparent backdrop-blur-md p-4 rounded-lg">
              <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className={`${inter.className}`}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem> */}

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent hover:bg-primary/10 active:bg-primary/20 transition-colors duration-200"
            >
              <Link href="/blog">
                <p
                  className={`${inter.className} font-medium text-md text-primary-foreground`}
                >
                  Blog
                </p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Pricing */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent hover:bg-primary/10 active:bg-primary/20 transition-colors duration-200"
            >
              <Link href="/pricing">
                <p
                  className={`${inter.className} font-medium text-md text-primary-foreground`}
                >
                  Pricing
                </p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Testimonials */}
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className="bg-transparent hover:bg-primary/10 active:bg-primary/20 transition-colors duration-200"
            >
              <Link href="/testimonials">
                <p
                  className={`${inter.className} font-medium text-md text-primary-foreground`}
                >
                  Testimonials
                </p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      {/* CTA Button */}
      <div>
        <Button className="p-6 rounded-[15px] border-4 border-[#2F2F30] bg-[#232324] cursor-pointer group duration-500 inset-shadow-sm inset-shadow-white/20">
          <p
            className={`${inter.className} font-bold text-lg text-primary-foreground`}
          >
            Get Started for Free
          </p>
          <LuCircleArrowRight
            className="size-6 group-hover:translate-x-2 transition-transform"
            color="white"
          />
        </Button>
      </div>
    </div>
  );
}

/* List Item Component */
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block rounded-md p-3 hover:bg-primary/10 transition-colors duration-200"
        >
          <div className="text-sm font-medium text-primary-foreground">
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
