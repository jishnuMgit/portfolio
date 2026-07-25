export { SOCIAL_MEDIA } from "./socialMedia";
export type { SocialLink } from "./socialMedia";

export { SKILLS_LIST } from "./skillsList";
export type { Skill, SkillGroup } from "./skillsList";

export { EXPERIENCES } from "./experience";
export type { Experience, Position } from "./experience";

export { EDUCATION_LIST } from "./education";
export type { Education } from "./education";

export { PROJECTS } from "./projects";
export type { Project, TechIcon } from "./projects";

export { OPEN_SOURCE_CONTRIBUTIONS, getOrgSummaries } from "./openSource";
export type { Contribution, OrgSummary } from "./openSource";

export const RESUME_LINK =
  "https://drive.google.com/file/d/1J55gCsF0jij8suYpixL6pfCe0ZoWL1x1/view?usp=sharing";
export const REPO_LINK = "https://github.com/jishnuMgit/new_portfolio";

export const ABOUT_ME = {
  name: "Jishnu M",
  firstName: "Jishnu",
  lastName: "M",
  tagLine: "MERN Developer · NextJS Developer · React Native developer",
  intro: "Software Development Engineer based in India.",
  email: "mjishnu990@gmail.com",
};

export const NAV_LINKS = [
  { link: "#experience", title: "Experience" },
  { link: "#skills", title: "Skills" },
  { link: "#education", title: "Education" },
  { link: "#projects", title: "Projects" },
  { link: "#opensource", title: "Open Source" },
  { link: "#contact", title: "Contact" },
];
