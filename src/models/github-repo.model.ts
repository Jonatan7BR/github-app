// Local
export interface GitHubRepo {
    url: string;
    user: string;
    repo: string;
    avatar: string;
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
