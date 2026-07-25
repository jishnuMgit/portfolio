import { Contribution } from "./openSource";


const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function updateCommitStats(
  contributions: Contribution[]
): Promise<Contribution[]> {

console.log('start')

  return Promise.all(
    contributions.map(async (item) => {
      // Skip pull requests
      if (item.type !== "commit") {
        return item;
      }

      // Extract owner, repo and sha from commit link
      const match = item.link.match(
        /github\.com\/([^/]+)\/([^/]+)\/commit\/([a-f0-9]+)/
      );

      if (!match) {
        return item;
      }

      const [, owner, repo, sha] = match;

      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/commits/${sha}`,
          {
            headers: {
              Authorization: `Bearer ${GITHUB_TOKEN}`,
              Accept: "application/vnd.github+json",
            },
          }
        );

        if (!response.ok) {
          return item;
        }

        const commit = await response.json();

        return {
          ...item,
          linesAdded: commit.stats?.additions?.toString() ?? "-",
          linesDeleted: commit.stats?.deletions?.toString() ?? "-",
        };
      } catch (error) {
        console.error(error);

        return item;
      }
    })
  );
}