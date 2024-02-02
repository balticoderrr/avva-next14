import { Turtle } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const headingFont = localFont({ src: "../public/font.woff2" });
export const Logo = () => {
  return (
    <Link href="/">
      <div className="hover:opacity-75 transition items-center gap-x-2 hidden md:flex">
        <Turtle className="text-neutral-700 h-12 ml-2 pb-1" />
        <p className={cn("text-lg text-neutral-700 ", headingFont.className)}>
          Turtle
        </p>
      </div>
    </Link>
  );
};
