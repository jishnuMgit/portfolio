import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";

export interface SocialLink {
  id: string;
  icon: IconType;
  link: string;
  label: string;
}

export const SOCIAL_MEDIA: SocialLink[] = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/jishnu-m-11760b2b0/",
    label: "LinkedIn",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/jishnuMgit",
    label: "GitHub",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:mjishnu990@gmail.com",
    label: "Email",
  },
  {
    id: "social-media-4",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/j_i_s_h_n_u__m",
    label: "Instagram",
  },
  {
    id: "social-media-5",
    icon: FaXTwitter,
    link: "https://x.com/bigilbro123",
    label: "X (Twitter)",
  },
];
