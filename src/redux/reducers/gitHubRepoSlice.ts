import { createSlice } from "@reduxjs/toolkit";
import { getPullRequests, getRepo } from "../../api/github-repo";
import { GitHubRepo, RepoPR } from "../../models/github-repo.model";

interface GitHubRepoState {
    loading: boolean;
    thisRepo?: GitHubRepo;
    pullRequests: RepoPR[];
}

const initialState: GitHubRepoState = {
    loading: false,
    pullRequests: []
};

const gitHubRepoSlice = createSlice({
    name: 'gitHubRepo',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(getRepo.pending, state => {
                state.loading = true;
            })
            .addCase(getRepo.fulfilled, (state, action) => {
                state.loading = false;
                const { payload } = action;
                state.thisRepo = {
                    url: payload.html_url,
                    user: payload.owner.login,
                    repo: payload.name,
                    avatar: payload.owner.avatar_url,
                    subs: payload.subscribers_count
                };
            })
            .addCase(getRepo.rejected, state => {
                state.loading = false;
                state.thisRepo = undefined;
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

export default gitHubRepoSlice.reducer;
