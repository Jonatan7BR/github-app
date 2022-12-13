import { GitHubRepo } from "../models/github-repo.model";

export const restoreRepos = (): GitHubRepo[] => {
    let repos = localStorage.getItem('repos');
    if (repos) {
        return JSON.parse(repos);
    }
    return [];
};

export const storeNewRepo = (newRepo: GitHubRepo): void => {
    const savedRepos = restoreRepos();
    if (savedRepos.find(r => r.user === newRepo.user && r.repo === newRepo.repo)) {
        return;
    }
    if (savedRepos.length === 20) {
        savedRepos.pop();
    }
    savedRepos.unshift(newRepo);
    localStorage.setItem('repos', JSON.stringify(savedRepos));
};
