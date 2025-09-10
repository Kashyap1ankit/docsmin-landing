import type { Metadata } from "next";
import { Lenis } from "lenis/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docsmin",
  description: "Generate docs for your product in minutes",
  icons: "/docsmin.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Lenis root>
        <body className="bg-black overflow-x-hidden w-full max-w-[103rem] mx-auto antialiased">
          {children}
        </body>
      </Lenis>
    </html>
  );
}
