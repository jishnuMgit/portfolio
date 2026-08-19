import { motion } from "framer-motion";
import { SKILLS_LIST } from "@/constants";
import type { Skill } from "@/constants/skillsList";
const COMBINATION_SKILLS = [
  "MERN",
  "React + Django",
  "React + FastAPI",
  "React Native + Node.js",
  "React Native + Django",
  "React Native + FastAPI",
  "Next.js",
];
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="skill-card group"
    >
      <skill.icon className="h-7 w-7 text-accent transition-transform duration-300 group-hover:scale-110" />
      <span className="text-[11px] font-medium text-muted-foreground transition-colors group-hover:text-foreground">
        {skill.name}
      </span>
    </motion.div>
  );
}

function CategoryCard({
  title,
  skills,
  index,
}: {
  title: string;
  skills: Skill[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.12 }}
      className="glass-card overflow-hidden"
    >
      <div className="border-b border-border/40 px-5 py-3">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/80">
          {title}
        </h3>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="grid grid-cols-3 gap-3 p-4 sm:grid-cols-4"
      >
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}
function CombinationSkills() {
  return (
    <section className="mt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Technology Stacks</h2>

        <p className="section-subtitle">
          Full-stack combinations I can work with
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
      >
        {COMBINATION_SKILLS.map((stack) => (
          <motion.div
            key={stack}
            variants={cardVariants}
            whileHover={{
              y: -4,
              transition: { duration: 0.2 },
            }}
            className="glass-card group border  flex min-h-[80px] items-center justify-center px-4 text-center"
          >
            <span className="text-sm font-semibold text-muted-foreground transition-colors group-hover:text-foreground  hover:border-blue-500 text-slate-100">
              {stack}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
export default function Skills() {
  return (
    <section id="skills" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I work with
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {SKILLS_LIST.map((group, index) => (
          <CategoryCard
            key={group.title}
            title={group.title}
            skills={group.items}
            index={index}
          />
        ))}
      </div>
            <CombinationSkills />

    </section>
  );
}
