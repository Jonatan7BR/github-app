import { createSlice } from "@reduxjs/toolkit";
import { getPullRequests, getRepo } from "../../api/github-repo";
import { GitHubRepo, RepoPR } from "../../models/github-repo.model";
import { restoreRepos, storeNewRepo } from "../../utils/persist-repos.utils";

interface GitHubRepoState {
    loading: boolean;
    thisRepo: GitHubRepo[];
    pullRequests: RepoPR[];
}

const initialState: GitHubRepoState = {
    loading: false,
    thisRepo: [],
    pullRequests: []
};

const gitHubRepoSlice = createSlice({
    name: 'gitHubRepo',
    initialState,
    reducers: {
        loadRepos: (state) => {
            state.thisRepo = restoreRepos();
        }
    },
    extraReducers(builder) {
        builder
            .addCase(getRepo.pending, state => {
                state.loading = true;
            })
            .addCase(getRepo.fulfilled, (state, action) => {
                state.loading = false;
                const { payload } = action;
                let repo: GitHubRepo = {
                    url: payload.html_url,
                    user: payload.owner.login,
                    repo: payload.name,
                    avatar: payload.owner.avatar_url,
                }
                state.thisRepo = [repo];
                storeNewRepo(repo);
            })
            .addCase(getRepo.rejected, state => {
                state.loading = false;
            })

            .addCase(getPullRequests.pending, state => {
                state.loading = true;
            })
            .addCase(getPullRequests.fulfilled, (state, action) => {
                state.loading = false;
                const { payload } = action;
                state.pullRequests = payload.map(pr => ({
                    url: pr.html_url,
                    author: pr.user.login,
                    authorAvatar: pr.user.avatar_url,
                    title: pr.title,
                    description: pr.body,
                    lastUpdate: pr.updated_at
                }));
            })
            .addCase(getPullRequests.rejected, state => {
                state.loading = false;
                state.pullRequests = [];
            });
    }
});

export const { loadRepos } = gitHubRepoSlice.actions;

export default gitHubRepoSlice.reducer;
