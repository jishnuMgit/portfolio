import nitk from "@/assets/images/Education/nitk.png";

export interface Education {
  id: string;
  icon: string;
  title: string;
  degree: string;
  duration: string;
  content1: string;
  content2: string;
}

export const EDUCATION_LIST: Education[] = [
  {
    id: "education-1",
    icon: nitk,
    title: "MES College, Erumely (affiliated with Mahatma Gandhi University, Kottayam)",
    degree: "Bachelor of Computer Applications (BCA)",
    duration: "December 2020 — April 2024",
    content1: "Major: Computer Applications / Computer Science",
    content2: "Minor: Mathematics and Statistics",
  },
];
