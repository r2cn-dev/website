import Link from "next/link";
import { CommandIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t w-full h-16">
      <div className="container flex items-center sm:justify-between justify-center sm:gap-0 gap-4 h-full text-muted-foreground text-sm flex-wrap sm:py-0 py-3 max-sm:px-4">
        <div className="flex items-center gap-3">
          <CommandIcon className="sm:block hidden w-5 h-5 text-muted-foreground" />
          <p className="text-center">
            Build by{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/r2cn-dev"
            >
              R2CN
            </Link>
            . The source code is available on{" "}
            <Link
              className="px-1 underline underline-offset-2"
              href="https://github.com/r2cn-dev/website"
            >
              GitHub
            </Link>
            ，讨论请在
            <Link
              className="px-1 underline underline-offset-2"
              href="https://discord.gg/WRp4TKv6rh"
            >
              Discord 频道
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
