import { buttonVariants } from "@/components/ui/button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12">
      <Link
        href={`/docs${page_routes[0].href}`}
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        开源项目加入 R2CN <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-3xl font-bold mb-4 sm:text-6xl">
        RISC-V Rust for Cloud Native 开源实习计划
      </h1>
      <p className="mb-8 sm:text-lg max-w-[800px] text-muted-foreground">
        R2CN（RISC-V Rust for Cloud
        Native）开源实习计划由中国科学院软件研究所主办，目标是培养熟悉 RISC-V
        架构和 Rust 编程语言的高校开发者，构建 RISC-V 架构下的云原生技术栈。
      </p>
      <div className="flex flex-row items-center gap-5">
        <Link
          href="/docs/student/pre-task"
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          1. 完成测试任务
        </Link>
        <Link
          href={`${process.env.PORTAL_LOGIN}`}
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          2. 注册实习计划
        </Link>
        <Link
          href="/docs/r2cn"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          3. 查看帮助文档
        </Link>
      </div>
    </div>
  );
}
