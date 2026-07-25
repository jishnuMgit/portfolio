import type { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import {
  SiAmazon,
  SiBootstrap,
  SiCloudinary,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNpm,
  SiPosthog,
  SiPostman,
  SiPrisma,
  SiReact,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
  SiZoho,
} from "react-icons/si";
import { VscCode, VscJson, VscMap, VscShield } from "react-icons/vsc";

export interface Skill {
  id: string;
  icon: IconType;
  name: string;
}

export interface SkillGroup {
  title: string;
  items: Skill[];
}

export const SKILLS_LIST: SkillGroup[] = [
 
  {
    title: "Frontend & Mobile",
    items: [
      { id: "fm-1", icon: SiReact, name: "React.js" },
      { id: "fm-2", icon: SiNextdotjs, name: "Next.js" },
      { id: "fm-3", icon: SiReact, name: "React Native" },
      { id: "fm-4", icon: SiTailwindcss, name: "Tailwind CSS" },
      { id: "fm-5", icon: SiBootstrap, name: "Bootstrap" },
      { id: "fm-6", icon: VscMap, name: "Responsive Web Design" },
      { id: "fm-7", icon: VscMap, name: "Cross-Browser Compatibility" },
    ],
  },


  {
    title: "Backend & Architecture",
    items: [
      { id: "ba-1", icon: SiNodedotjs, name: "Node.js" },
      { id: "ba-2", icon: SiExpress, name: "Express.js" },
      { id: "ba-3", icon: SiNestjs, name: "NestJS" },
      { id: "ba-4", icon: VscJson, name: "REST APIs" },
      { id: "ba-5", icon: VscShield, name: "JWT & Session Auth" },
      { id: "ba-6", icon: SiWhatsapp, name: "WhatsApp API" },
      { id: "ba-7", icon: SiZoho, name: "Zoho API" },
      { id: "ba-8", icon: VscCode, name: "MVC Architecture" },
    ],
  },
   {
    title: "Programming Languages",
    items: [
      { id: "pl-1", icon: SiJavascript, name: "JavaScript (ES6+)" },
      { id: "pl-2", icon: SiTypescript, name: "TypeScript" },
      { id: "pl-3", icon: SiHtml5, name: "HTML5" },
      { id: "pl-4", icon: SiCss3, name: "CSS3" },
    ],
  },
  {
    title: "Databases & Cloud",
    items: [
      { id: "dc-1", icon: SiMongodb, name: "MongoDB" },
      { id: "dc-2", icon: SiMysql, name: "MySQL" },
      { id: "dc-3", icon: SiFirebase, name: "Firebase Realtime DB" },
      { id: "dc-4", icon: SiPrisma, name: "Prisma ORM" },
      { id: "dc-5", icon: SiAmazon, name: "AWS" },
      { id: "dc-6", icon: SiVercel, name: "Vercel" },
      { id: "dc-7", icon: SiRender, name: "Render" },
      { id: "dc-8", icon: VscCode, name: "cPanel" },
      { id: "dc-9", icon: SiCloudinary, name: "Cloudinary" },
    ],
  },
  {
    title: "Tools, Practices & Soft Skills",
    items: [
      { id: "tps-1", icon: SiGit, name: "Git" },
      { id: "tps-2", icon: AiFillGithub, name: "GitHub" },
      { id: "tps-3", icon: SiPostman, name: "Postman" },
      { id: "tps-4", icon: VscCode, name: "VS Code" },
      { id: "tps-5", icon: SiNpm, name: "npm" },
      { id: "tps-6", icon: SiPosthog, name: "PostHog Analytics" },
      { id: "tps-7", icon: VscMap, name: "Agile Development" },
      { id: "tps-8", icon: VscMap, name: "Performance Optimization" },
      { id: "tps-9", icon: VscMap, name: "Soft Skills (Collab, Creative, Comm)" },
    ],
  },
];