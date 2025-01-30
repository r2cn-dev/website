// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "开源项目加入流程",
    href: "/project",
    noLink: true,
    items: [
      { title: "项目注册", href: "/signup" },
      { title: "项目审核", href: "/review" },
      {
        title: "R2CN-Bot",
        href: "/bot",
        noLink: true,
        items: [
          { title: "安装Bot", href: "/installation" },
          { title: "命令", href: "/usage" },
        ],
      },
      {
        title: "添加导师/发布任务",
        href: "/mentor-and-tasks",
        noLink: true,
        items: [
          { title: "维护导师信息", href: "/mentor" },
          { title: "发布任务的要求", href: "/requirement" },
          { title: "任务分级", href: "/task-level" },
          { title: "任务Issue模板", href: "/template" },
          { title: "任务Issue/PR标签管理与分值统计", href: "/labels" },
        ],
      },
      {
        title: "任务完成情况定期评审",
        href: "/task-periodic-review",
      },
    ],
  },
  {
    title: "学生实习流程",
    href: "/student",
    noLink: true,
    items: [
      {
        title: "测试任务",
        href: "/pre-task",
      },
      {
        title: "学生注册与审核",
        href: "/signup",
      },
      {
        title: "任务领取与确认",
        href: "/assign",
      },
      {
        title: "导师辅导学生",
        href: "/guidance",
      },
      {
        title: "提交成果",
        href: "/commit",
      },
      {
        title: "积分统计与奖金发放",
        href: "/statistic",
      },
      {
        title: "实习证明申请",
        href: "/certificate",
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
