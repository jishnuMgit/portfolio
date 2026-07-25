import type { IconType } from "react-icons";
import {
  SiCss3,
  SiDart,
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPrisma,
  SiEjs,
} from "react-icons/si";

// Inline SVG Data URI used as default placeholder image
const DUMMY_IMAGE =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Crect%20fill%3D%22%231e293b%22%20width%3D%22600%22%20height%3D%22400%22%2F%3E%3Ctext%20fill%3D%22%2364748b%22%20font-family%3D%22sans-serif%22%20font-size%3D%2224%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3EProject%20Preview%3C%2Ftext%3E%3C%2Fsvg%3E";


  import LMS from '../assets/images/OIP (1).jpg'
  import cords from '../assets/images/logo.png'


export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  github: string;
  image: string;
  content: string;
  stack: TechIcon[];
}

export const PROJECTS: Project[] = [
  // ==================== FEATURED PRIORITY PROJECTS ====================
  {
    id: "project-lms",
    title: "LMS — Learning Management System",
    github: "https://github.com/jishnuMgit/LMS",
    image: LMS,
    content:
      "Training platform for managing courses and learner progress. Built course modules, assessment features, and progress-tracking APIs with MongoDB integration.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-suitorguy",
    title: "Suitor Guy — Brand Website",
    github: "https://github.com/jishnuMgit/suitorguy",
    image: LMS,
    content:
      "E-commerce website for a men's fashion brand featuring product catalogs, cart, order management, and admin controls.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
      { id: "icon-5", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "project-rootfin",
    title: "Rootfin — Financial Management Application",
    github: "https://github.com/jishnuMgit/rootfin",
    image: LMS,
    content:
      "Personal finance application for expense tracking, budgeting, and financial dashboards. Built CRUD workflows and responsive components.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-unicode",
    title: "Unicode Generator",
    github: "https://github.com/jishnuMgit/UniCode",
    image: LMS,
    content:
      "Utility application for generating and exporting standardized Unicode characters with custom character mapping.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: SiReact, name: "React.js" },
    ],
  },
  {
    id: "project-sales-module",
    title: "Sales Module — Enterprise Sales Management",
    github: "https://github.com/jishnuMgit/Metacrop_react",
    image: cords,
    content:
      "Enterprise sales management app for MetaCrop featuring sales tracking, customer management, invoicing, and reporting.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-3", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "project-kot",
    title: "KOT — Restaurant Management System",
    github: "https://github.com/jishnuMgit/KOT-meta",
    image: cords,
    content:
      "Restaurant management system for order processing, Kitchen Order Tickets (KOT), billing, and role-based authentication.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-3", icon: SiNodedotjs, name: "Node.js" },
    ],
  },

  // ==================== ACTUAL GITHUB REPOSITORIES ====================
  {
    id: "repo-subscription-react-native",
    title: "Subscription React Native",
    github: "https://github.com/jishnuMgit/Subscription_ReactNative",
    image: DUMMY_IMAGE,
    content: "Mobile application interface for subscription management built with React Native.",
    stack: [
      { id: "icon-1", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-2", icon: SiReact, name: "React Native" },
      { id: "icon-3", icon: SiCss3, name: "NativeWind" },
    ],
  },
  {
    id: "repo-dev-events",
    title: "DevEvents",
    github: "https://github.com/jishnuMgit/DevEvents",
    image: DUMMY_IMAGE,
    content: "Event management platform for developer meetups and tech conferences.",
    stack: [
      { id: "icon-1", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-2", icon: SiNextdotjs, name: "Next.js" },
      { id: "icon-3", icon: SiMongodb, name: "MongoDB" },
      { id: "icon-4", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "repo-hoardlinks-backend",
    title: "Hoardlinks Backend",
    github: "https://github.com/jishnuMgit/hoardlinks_backend",
    image: cords,
    content: "Backend REST API service supporting hoarding management operations.",
    stack: [
      { id: "icon-1", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-2", icon: SiExpress, name: "Express.js" },
      { id: "icon-3", icon: SiMysql, name: "MySQL" },
      { id: "icon-4", icon: SiPrisma, name: "Prisma ORM" },
    ],
  },
  {
    id: "repo-metacorp-api",
    title: "MetaCrop API",
    github: "https://github.com/jishnuMgit/metacorp_Api",
    image: cords,
    content: "Backend API microservice built with Express and MySQL database integration.",
    stack: [
      { id: "icon-1", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMysql, name: "MySQL" },
    ],
  },
  {
    id: "repo-ai-ads-nextjs",
    title: "AI Ads Next.js",
    github: "https://github.com/jishnuMgit/AI-Ads-NEXT.js",
    image: DUMMY_IMAGE,
    content: "AI-driven advertisement creation and campaign management web app.",
    stack: [
      { id: "icon-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "icon-2", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-3", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "repo-news",
    title: "News Website",
    github: "https://github.com/jishnuMgit/news",
    image: DUMMY_IMAGE,
    content: "Modern news aggregation website with live external API fetching.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: SiCss3, name: "CSS3" },
    ],
  },
  {
    id: "repo-ecommerce",
    title: "Ecommerce Web App",
    github: "https://github.com/jishnuMgit/ecommerce",
    image: DUMMY_IMAGE,
    content: "Full-stack e-commerce application with product listing, cart, and Mongoose integration.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: SiReact, name: "React.js" },
      { id: "icon-3", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "repo-react-native-first-project",
    title: "React Native First Project",
    github: "https://github.com/jishnuMgit/ReactNativeFirstProject",
    image: DUMMY_IMAGE,
    content: "Cross-platform mobile UI application developed using Expo and React Native.",
    stack: [
      { id: "icon-1", icon: SiTypescript, name: "TypeScript" },
      { id: "icon-2", icon: SiReact, name: "React Native" },
      { id: "icon-3", icon: SiTailwindcss, name: "Tailwind CSS" },
    ],
  },
  {
    id: "repo-rootments-whatsapp",
    title: "Rootments Whatsapp",
    github: "https://github.com/jishnuMgit/RootmentsWhatsapp",
    image: DUMMY_IMAGE,
    content: "WhatsApp automated messaging tool and integration dashboard.",
    stack: [
      { id: "icon-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-2", icon: SiExpress, name: "Express.js" },
      { id: "icon-3", icon: SiMongodb, name: "MongoDB" },
      ],
  },
  {
    id: "repo-itemcode",
    title: "Item Code Generator",
    github: "https://github.com/jishnuMgit/itemcode",
    image: DUMMY_IMAGE,
    content: "Inventory SKU and item code generator service.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "repo-notesuser",
    title: "Notes User",
    github: "https://github.com/jishnuMgit/notesuser",
    image: DUMMY_IMAGE,
    content: "User note management web application.",
    stack: [
      { id: "icon-1", icon: SiEjs, name: "Ejs" },
    
      { id: "icon-2", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "repo-next-js-todo",
    title: "NEXT JS TODO",
    github: "https://github.com/jishnuMgit/NEXT_JS__TODO",
    image: DUMMY_IMAGE,
    content: "Todo and task management web application built with Next.js.",
    stack: [
      { id: "icon-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "icon-2", icon: SiTypescript, name: "TypeScript" },
    ],
  },
  {
    id: "repo-recipe-finder",
    title: "Recipe Finder",
    github: "https://github.com/jishnuMgit/RECIPE_FINDER",
    image: DUMMY_IMAGE,
    content: "Recipe search application connecting to external culinary APIs.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "repo-mern-ecommerce",
    title: "MERN Ecommerce",
    github: "https://github.com/jishnuMgit/mern-ecommerce",
    image: DUMMY_IMAGE,
    content: "MERN stack shopping platform with authentication and order management.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: SiReact, name: "React.js" },
      { id: "icon-3", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "repo-chat-app",
    title: "Chat App",
    github: "https://github.com/jishnuMgit/chat_app",
    image: DUMMY_IMAGE,
    content: "Real-time chat application with web messaging support.",
    stack: [
      { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
      {id:"icon-5",icon:SiTailwindcss,name:"TailwindCss"}
    ],
  },
  {
    id: "repo-shop-repository-backend",
    title: "Shop Repository Backend",
    github: "https://github.com/jishnuMgit/shop_Repository_backend",
    image: DUMMY_IMAGE,
    content: "Backend service API for shop inventory management.",
    stack: [
      { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
    ],
  },
  {
    id: "repo-shop-repository",
    title: "Shop Repository",
    github: "https://github.com/jishnuMgit/shop_Repository",
    image: DUMMY_IMAGE,
    content: "Frontend web store repository and user portal interface.",
    stack: [
     { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
      {id:"icon-5",icon:SiTailwindcss,name:"TailwindCss"}
    ],
  },
  {
    id: "repo-twitter-front",
    title: "Twitter Front",
    github: "https://github.com/jishnuMgit/twitter_front",
    image: DUMMY_IMAGE,
    content: "Frontend user interface for Twitter clone client.",
    stack: [
     { id: "icon-1", icon: SiJavascript, name: "JavaScript" },
      { id: "icon-2", icon: SiReact, name: "React.js" },
      { id: "icon-3", icon: SiTailwindcss, name: "Tailwindcss" },
    ],
  },
  {
    id: "repo-twitter-clone",
    title: "Twitter Clone",
    github: "https://github.com/jishnuMgit/twitter-clone",
    image: DUMMY_IMAGE,
    content: "Social media clone supporting post creation and user feeds.",
    stack: [
       { id: "icon-1", icon: SiReact, name: "React.js" },
      { id: "icon-2", icon: SiNodedotjs, name: "Node.js" },
      { id: "icon-3", icon: SiExpress, name: "Express.js" },
      { id: "icon-4", icon: SiMongodb, name: "MongoDB" },
      {id:"icon-5",icon:SiTailwindcss,name:"TailwindCss"}
    ],
  },
];