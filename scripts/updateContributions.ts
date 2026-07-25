// scripts/updateCommitStats.ts

import { promises as fs } from "fs";
import dotenv from "dotenv";

dotenv.config();

const TOKEN = process.env.VITE_GITHUB_TOKEN;

if (!TOKEN) {
  throw new Error("VITE_GITHUB_TOKEN is missing in .env");
}

const FILE_PATH = "./src/constants/openSource.ts";

async function updateCommitStats() {
  let content = await fs.readFile(FILE_PATH, "utf8");

  const commitRegex =
    /link:\s*"https:\/\/github\.com\/([^/]+)\/([^/]+)\/commit\/([a-f0-9]+)"/g;

  const matches = [...content.matchAll(commitRegex)];

  console.log(`Found ${matches.length} commit(s)`);

  for (const match of matches) {
    const owner = match[1];
    const repo = match[2];
    const sha = match[3];

    console.log(`Fetching ${repo} ${sha.substring(0, 7)}`);

    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits/${sha}`,
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
          Accept: "application/vnd.github+json",
        },
      }
    );

    if (!response.ok) {
      console.log(`Failed: ${sha} (${response.status})`);
      continue;
    }

    const commit = await response.json();

    const additions = commit.stats?.additions ?? "-";
    const deletions = commit.stats?.deletions ?? "-";

    const blockRegex = new RegExp(
      `(link:\\s*"https:\\/\\/github\\.com\\/${owner}\\/${repo}\\/commit\\/${sha}"[\\s\\S]*?linesAdded:\\s*")([^"]*)(",\\s*\\n\\s*linesDeleted:\\s*")([^"]*)(")`,
      "m"
    );

    content = content.replace(
      blockRegex,
      `$1${additions}$3${deletions}$5`
    );

    console.log(`✓ ${sha.substring(0, 7)}  +${additions} -${deletions}`);
  }

  await fs.writeFile(FILE_PATH, content, "utf8");

  console.log("\n✅ Finished updating commit stats.");
}

updateCommitStats().catch(console.error);