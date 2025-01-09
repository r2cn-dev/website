import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <Link
        href="https://github.com/r2cn-dev"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        在GitHub上参与{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        RISC-V Rust for Cloud Native 开源实习计划
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        R2CN（RISC-V Rust for Cloud Native）开源实习计划由中科院软件所、华为等机构联合主办，目标是培养RISC-V、Rust技术领域人才、构建RISC-V云原生技术栈创新生态。
        R2CN开源实习计划通过培养精通Rust编程语言、熟悉RISC-V架构的开源开发者，为开源生态发展培养人才。
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>
    </div>
  );
}
