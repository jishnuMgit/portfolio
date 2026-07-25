import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import userimg from '../assets/images/OIP.png'
import {
  GitMerge,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { getOrgSummaries, OPEN_SOURCE_CONTRIBUTIONS } from "@/constants";

const getPagination = (
  current: number,
  total: number
): (number | "...")[] => {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i);
  }

  const pages: (number | "...")[] = [];

  const start = Math.max(0, current - 2);
  const end = Math.min(total - 1, current + 2);

  // First page
  if (start > 0) {
    pages.push(0);
    if (start > 1) pages.push("...");
  }

  // Middle pages
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Last page
  if (end < total - 1) {
    if (end < total - 2) pages.push("...");
    pages.push(total - 1);
  }

  return pages;
};
const orgSummaries = getOrgSummaries();
const totalPRs = OPEN_SOURCE_CONTRIBUTIONS.length;
const PER_PAGE = 8;

export default function OpenSource() {
  const [activeOrg, setActiveOrg] = useState<string | null>(null);
  const [page, setPage] = useState(0);

  const filtered = useMemo(() => {
    if (!activeOrg) return OPEN_SOURCE_CONTRIBUTIONS;
    return OPEN_SOURCE_CONTRIBUTIONS.filter(
      (c) => c.organisation === activeOrg
    );
  }, [activeOrg]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  const handleOrgFilter = (orgName: string) => {
    if (activeOrg === orgName) {
      setActiveOrg(null);
    } else {
      setActiveOrg(orgName);
    }
    setPage(0);
  };

  return (
    <section id="opensource" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">Project Commit's</h2>
        <p className="section-subtitle">
          A showcase of my recent project contributions, pull requests, commits, and merged changes.Total {totalPRs}
        </p>
      </motion.div>

      {/* Org summary cards */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {orgSummaries.map((org, idx) => (
          <motion.button
            key={org.name}
            onClick={() => handleOrgFilter(org.name)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className={`glass-card group p-4 text-left transition-all ${
              activeOrg === org.name
                ? "border-accent/50 bg-accent/5"
                : "hover:border-border"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white/90 p-1 dark:bg-white/10">
                <img
                  src={org.logo || userimg}//
                  alt={org.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold">{org.name}</h3>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <GitMerge className="h-3 w-3 text-green-500" />
                  <span className="font-medium text-foreground">
                    {org.prCount}
                  </span>{" "}
                  PRs
                </div>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-1">
              {org.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted/70 px-2 py-0.5 text-[10px] text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.button>
        ))}
      </div>

      {/* Filter indicator */}
      {activeOrg && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 flex items-center gap-2"
        >
          <Filter className="h-3.5 w-3.5 text-accent" />
          <span className="text-sm text-muted-foreground">
            Showing <span className="font-medium text-foreground">{filtered.length}</span> contributions from{" "}
            <span className="font-medium text-accent">{activeOrg}</span>
          </span>
          <button
            onClick={() => {
              setActiveOrg(null);
              setPage(0);
            }}
            className="ml-1 text-xs text-muted-foreground underline hover:text-foreground"
          >
            Clear
          </button>
        </motion.div>
      )}

      {/* Contributions list */}
      <div className="mt-6 space-y-2">
        <AnimatePresence mode="popLayout">
          {paginated.map((contribution) => (
            <motion.a
              key={contribution.id}
              href={contribution.link}
              target="_blank"
              rel="noopener noreferrer"
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="group flex items-start gap-3 rounded-xl border border-transparent
                         p-3 transition-all hover:border-border hover:bg-card/50"
            >
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white/90 p-0.5 dark:bg-white/10">
                <img
                  src={contribution.logo}
                  alt={contribution.organisation}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium transition-colors group-hover:text-accent">
                  {contribution.title}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span>
                    {contribution.organisation}/{contribution.repo}
                  </span>
                  <span className="font-mono">{contribution.number}</span>
                  <span>{contribution.date}</span>
                  <span className="inline-flex items-center gap-1">
                    <span className="text-green-500">
                      +{contribution.linesAdded}
                    </span>
                    <span className="text-red-400">
                      -{contribution.linesDeleted}
                    </span>
                  </span>
                </div>
              </div>
              <GitMerge className="mt-1 h-4 w-4 shrink-0 text-green-500" />
            </motion.a>
          ))}
        </AnimatePresence>
      </div>

      {/* Pagination */}
<div className="mt-8 flex w-full items-center justify-center gap-2">
  {getPagination(page, totalPages).map((item, index) =>
    item === "..." ? (
      <span
        key={`ellipsis-${index}`}
        className="px-2 text-muted-foreground"
      >
        ...
      </span>
    ) : (
      <button
        key={item}
        onClick={() => setPage(item)}
        className={`flex h-10 min-w-[40px] items-center justify-center rounded-lg transition-all ${
          page === item
            ? "bg-accent text-accent-foreground"
            : "border border-border hover:border-accent hover:text-accent"
        }`}
      >
        {item + 1}
      </button>
    )
  )}
</div>
    </section>
  );
}
