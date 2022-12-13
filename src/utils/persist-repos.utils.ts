import { GitHubRepo } from "../models/github-repo.model";

export const restoreRepos = (): GitHubRepo[] => {
    let repos = localStorage.getItem('repos');
    if (repos) {
        return JSON.parse(repos);
    }
    return [];
};

export const storeNewRepo = (repo: GitHubRepo): void => {
    const savedRepos = restoreRepos();
    if (!savedRepos.find(r => r.user === repo.user && r.repo === repo.repo)) {
        if (savedRepos.length === 20) {
            savedRepos.pop();
        }
        savedRepos.unshift(repo);
    }
    localStorage.setItem('repos', JSON.stringify(savedRepos));
};
