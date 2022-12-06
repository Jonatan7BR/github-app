import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
import { BASE_URL } from "../utils/github-repo.utils"

interface ReposResponse {
    name: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    subscribers_count: number;
}

export const getRepo = createAsyncThunk(
    'gitHubRepo/getRepo', 
    async (path: string): Promise<ReposResponse> => {
        const response = await axios.get<ReposResponse>(`${BASE_URL}${path}`);
        return response.data;
    }
);

