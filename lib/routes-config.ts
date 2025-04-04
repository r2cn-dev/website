// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "R2CN 计划",
    href: "/r2cn",
    items: [
      { title: "1. 关于 R2CN 开源实习计划", href: "/about" },
      { title: "2. 关于 R2CN 技术委员会", href: "/tc" },
      { title: "3. 参与 R2CN 的开源项目", href: "/projects" },
    ],
  },
  {
    title: "学生参与 R2CN 实习计划",
    href: "/student",
    noLink: true,
    items: [
      {
        title: "1. 注册前完成测试任务",
        href: "/pre-task",
      },
      {
        title: "2. 学生注册与审核",
        href: "/signup",
      },
      {
        title: "3. 任务领取与确认",
        href: "/assign",
      },
      {
        title: "4. 导师辅导学生",
        href: "/guidance",
      },
      {
        title: "5. 提交代码和申请任务完成",
        href: "/commit",
      },
      {
        title: "6. 积分统计与奖金发放",
        href: "/statistic",
      },
      {
        title: "7. 实习证明申请",
        href: "/certificate",
      },
    ],
  },
  {
    title: "开源项目参与 R2CN 计划",
    href: "/project",
    items: [
      { title: "1. 开源项目注册", href: "/signup" },
      { title: "2. 开源项目审核", href: "/review" },
      {
        title: "3. R2CN-Bot",
        href: "/bot",
        items: [
          { title: "Bot 安装说明", href: "/installation" },
          { title: "命令手册", href: "/usage" },
        ],
      },
      {
        title: "4. 导师发布任务",
        href: "/mentor-and-tasks",
        items: [
          { title: "1. 维护导师信息", href: "/mentor" },
          { title: "2. 发布任务要求", href: "/requirement" },
          { title: "3. 任务分值规则", href: "/task-level" },
          { title: "4. 任务 Issue 模板", href: "/template" },
          { title: "5. 任务 Issue 标签", href: "/labels" },
        ],
      },
      {
        title: "5. 任务评审",
        href: "/task-periodic-review",
      },
    ],
  },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
