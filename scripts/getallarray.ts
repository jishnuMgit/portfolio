import fs from "node:fs";
import path from "node:path";

const ORGANISATION = "jishnuMgit";
const REPO = "LMS";
const LOGO = "openFoodFacts";
const TECHNOLOGY = "sssss";

// Paste your GitHub commits array here
const commits: any[] =[]

function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
    timeZone: "UTC",
  }).replace(",", "");
}

const output = commits
  .map((commit) => {
    const isMerge = commit.parents.length > 1;

    return `{
  id: "${commit.sha}",
  organisation: "${ORGANISATION}",
  logo: ${LOGO},
  repo: "${REPO}",
  type: "${isMerge ? "merge" : "commit"}",
  status: "${isMerge ? "merged" : "pushed"}",
  title: ${JSON.stringify(commit.commit.message.trim())},
  link: "${commit.html_url}",
  number: "${commit.sha.substring(0, 7)}",
  date: "${formatDate(commit.commit.author.date)}",
  linesAdded: "-",
  linesDeleted: "-",
  technology: ${TECHNOLOGY},
}`;
  })
  .join(",\n");

// Output file in project root
const outputFile = path.resolve(process.cwd(), "output.ts");

fs.writeFileSync(outputFile, output);

console.log(`✅ ${commits.length} commits converted.`);
console.log(`📄 Output: ${outputFile}`);