"use server";


export interface RepoData {
  name: string;
  id: number;
  description: string;
  homepage:string;
}
const transformRepoName = (repoName: string) => {
  const reformedName = repoName.replace("-", " ").replace("_", " ").trim()
  return reformedName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

// This function fetches portfolio repos from github API and returns them.
export const getPortfolioRepos = async () => {
  try {
    const portfolioRepos = [
      "game-hub",
      "Mo-cranes-website",
      "techsirl_pay",
      "PRH",
      "TradeIt",
    ];
    // Fetching data from github API and storing it in a variable.
    const repos: RepoData[] = [];
    for (const repo of portfolioRepos) {
      const res = await fetch(
        `https://api.github.com/repos/KASolomon/${repo}`,
        {
          next: { revalidate: 7776000 },
          headers: {
            Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
          },
        }
      );
      const repoData: RepoData = await res.json();
      repoData.name = transformRepoName(repo);
      repos.push(repoData);
    }
    console.log(repos);
    return repos;
  } catch (e) {
    console.log("Error while fetching portfolio repos : ", e);
  }
};
