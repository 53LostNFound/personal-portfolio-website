export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "电商平台",
    description: "一个功能完善的在线购物平台，支持商品浏览、购物车、订单管理等功能。采用现代化设计，提供流畅的购物体验。",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "任务管理系统",
    description: "高效的任务管理工具，支持团队协作、进度追踪、文件共享等功能。帮助团队更好地组织和管理工作。",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "数据可视化仪表盘",
    description: "实时数据监控仪表盘，提供丰富的图表展示和数据交互功能。帮助企业快速了解业务状况。",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "D3.js", "TypeScript", "ECharts"],
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "社交媒体应用",
    description: "支持实时聊天、动态发布、好友互动等功能的社交平台。采用响应式设计，适配各种设备。",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React Native", "Socket.io", "MongoDB"],
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "博客系统",
    description: "简洁优雅的个人博客系统，支持 Markdown 编辑、代码高亮、评论系统等功能。",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "天气预报应用",
    description: "精美的天气应用，提供实时天气信息、未来预报、空气质量等功能。支持全球城市查询。",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["React", "OpenWeather API", "PWA"],
    link: "#",
    github: "#"
  }
];
