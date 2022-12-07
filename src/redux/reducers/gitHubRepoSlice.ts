import { createSlice } from "@reduxjs/toolkit";
import { getRepo } from "../../api/github-repo";
import { GitHubRepo } from "../../models/repo.model";

interface GitHubRepoState {
    loading: boolean;
    thisRepo?: GitHubRepo;
    searchedRepos: GitHubRepo[];
}

const initialState: GitHubRepoState = {
    loading: false,
    searchedRepos: []
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
    }
});

export default gitHubRepoSlice.reducer;
