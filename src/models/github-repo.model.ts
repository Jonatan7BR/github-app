// Local
export interface GitHubRepo {
    url: string;
    user: string;
    repo: string;
    avatar: string;
    subs: number;
}

export interface RepoPR {
    url: string;
    author: string;
    authorAvatar: string;
    title: string;
    description: string;
    lastUpdate: Date;
}

// API
export interface ReposResponse {
    name: string;
    html_url: string;
    owner: {
        login: string;
        avatar_url: string;
    };
    subscribers_count: number;
}

export interface ReposPullsResponse {
    html_url: string;
    title: string;
    user: {
        login: string;
        avatar_url: string;
    };
    body: string;
    updated_at: Date;
}
