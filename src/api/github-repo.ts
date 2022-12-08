import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { ReposPullsResponse, ReposResponse } from "../models/github-repo.model";
import { BASE_URL } from "../utils/github-repo.utils"

export const getRepo = createAsyncThunk(
    'gitHubRepo/getRepo', 
    async (path: string): Promise<ReposResponse> => {
        const response = await axios.get<ReposResponse>(`${BASE_URL}${path}`);
        return response.data;
    }
);

export const getPullRequests = createAsyncThunk(
    'gitHubRepo/getPRs',
    async (path: string): Promise<ReposPullsResponse[]> => {
        const response = await axios.get<ReposPullsResponse[]>(`${BASE_URL}${path}/pulls`);
        return response.data;
    }
);
