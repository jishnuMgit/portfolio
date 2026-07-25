import type { IconType } from "react-icons";
import {
  SiAmazon,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRender,
  SiVercel,
} from "react-icons/si";

import cords from '../assets/images/logo.png'
import rootm from '../assets/images/OIP (1).jpg'
import zoople from '../assets/images/zoople.jpg'
import bytedart from '../assets/images/bytedart.jpg'
// Placeholder SVG for dummy company logos
const DUMMY_LOGO =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22100%22%20height%3D%22100%22%20viewBox%3D%220%200%20100%20100%22%3E%3Crect%20fill%3D%22%23334155%22%20width%3D%22100%22%20height%3D%22100%22%20rx%3D%2220%22%2F%3E%3Ctext%20fill%3D%22%2394a3b8%22%20font-family%3D%22sans-serif%22%20font-size%3D%2212%22%20font-weight%3D%22bold%22%20x%3D%2250%25%22%20y%3D%2250%25%22%20text-anchor%3D%22middle%22%20dy%3D%22.3em%22%3ELOGO%3C%2Ftext%3E%3C%2Fsvg%3E";

export interface TechIcon {
  id: string;
  icon: IconType;
  name: string;
}

export interface ExperienceContent {
  text: string;
  link?: string;
  tech?: TechIcon[];
}

export interface Position {
  title: string;
  duration: string;
  location?: string;
  content: ExperienceContent[];
}

export interface Experience {
  organisation: string;
  logo: string;
  link: string;
  positions: Position[];
}

export const EXPERIENCES: Experience[] = [
  {
    organisation: "Cords Innovations",
    logo: cords,
    link: "https://cordsinnovations.com/",
    positions: [
      {
        title: "Full Stack Developer",
        duration: "May 2025 — Mar 2026",
        location: "Kottayam",
        content: [
          {
            text: "Developed and maintained full stack features across multiple client-facing web applications using React.js, Node.js, Express.js, and MySQL.",
            tech: [
              { id: "ci-1", icon: SiReact, name: "React.js" },
              { id: "ci-2", icon: SiNodedotjs, name: "Node.js" },
              { id: "ci-3", icon: SiExpress, name: "Express.js" },
              { id: "ci-4", icon: SiMysql, name: "MySQL" },
              { id: "ci-5", icon: SiAmazon, name: "AWS" },
              { id: "ci-6", icon: SiVercel, name: "Vercel" },
              { id: "ci-7", icon: SiRender, name: "Render" },
            ],
          },
          {
            text: "Designed and implemented RESTful APIs to connect frontend interfaces with backend services and databases.",
          },
          {
            text: "Collaborated with designers and backend engineers in an Agile workflow to translate design requirements into functional, responsive UI components.",
          },
          {
            text: "Optimized application performance by refactoring inefficient queries and reducing unnecessary re-renders in React components.",
          },
          {
            text: "Debugged and resolved production issues, improving application stability and cross-browser compatibility.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Rootments Enterprises LLP",
    logo: rootm,
    link: "https://www.linkedin.com/company/rootments-enterprises-llp/?originalSubdomain=in",
    positions: [
      {
        title: "Full Stack Developer Intern",
        duration: "Nov 2024 — May 2025",
        location: "Ernakulam Edappally",
        content: [
          {
            text: "Developed and maintained full stack features across multiple client-facing web applications using React.js, Node.js, Express.js, and MySQL.",
            tech: [
              { id: "re-1", icon: SiReact, name: "React.js" },
              { id: "re-2", icon: SiNodedotjs, name: "Node.js" },
              { id: "re-3", icon: SiExpress, name: "Express.js" },
              { id: "re-4", icon: SiMongodb, name: "MongoDB" },
              { id: "re-5", icon: SiAmazon, name: "AWS" },
              { id: "re-6", icon: SiVercel, name: "Vercel" },
              { id: "re-7", icon: SiRender, name: "Render" },
            ],
          },
          {
            text: "Designed and implemented RESTful APIs to connect frontend interfaces with backend services and databases.",
          },
          {
            text: "Collaborated with designers and backend engineers in an Agile workflow to translate design requirements into functional, responsive UI components.",
          },
          {
            text: "Optimized application performance by refactoring inefficient queries and reducing unnecessary re-renders in React components.",
          },
          {
            text: "Debugged and resolved production issues, improving application stability and cross-browser compatibility.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Zoople Technologies",
    logo: zoople,
    link: "https://zoople.in/",
    positions: [
      {
        title: "MERN Stack Developer Training",
        duration: "4 Months",
        location: "Ernakulam",
        content: [
          {
            text: "Completed an intensive, project-based training program covering the full MERN stack: MongoDB, Express.js, React.js, and Node.js.",
            tech: [
              { id: "zt-1", icon: SiMongodb, name: "MongoDB" },
              { id: "zt-2", icon: SiExpress, name: "Express.js" },
              { id: "zt-3", icon: SiReact, name: "React.js" },
              { id: "zt-4", icon: SiNodedotjs, name: "Node.js" },
            ],
          },
          {
            text: "Collaborated on real-world projects, developing responsive user interfaces, implementing REST APIs, and integrating MongoDB databases in a team environment.",
          },
          {
            text: "Gained working knowledge of authentication flows, state management, and deployment fundamentals.",
          },
        ],
      },
    ],
  },
  {
    organisation: "bytedart technologies pvt ltd",
    logo: bytedart,
    link: "https://bytedart.com/",
    positions: [
      {
        title: "Part-Time Web Developer",
        duration: "2 Months",
        location: "Remote",
        content: [
          {
            text: "Built responsive frontend interfaces with HTML and CSS, ensuring consistent UI/UX across devices and browsers.",
            tech: [
              { id: "bd-1", icon: SiHtml5, name: "HTML" },
              { id: "bd-2", icon: SiCss3, name: "CSS" },
              { id: "bd-3", icon: SiJavascript, name: "JavaScript" },
            ],
          },
          {
            text: "Optimized application performance such as loading time, project size, etc.",
          },
        ],
      },
    ],
  },
];