import moment from "moment";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPullRequests } from "../api/github-repo";
import PRCard from "../components/PRCard";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import './PullRequests.scss';

const PullRequests = (): JSX.Element => {
    const { user, repo } = useParams();
    const pullRequests = useAppSelector(state => state.gitHubRepo.pullRequests);
    const loading = useAppSelector(state => state.gitHubRepo.loading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getPullRequests(`${user}/${repo}`));
    }, [dispatch, user, repo]);

    return (
        <div className="repo-prs">
            <p>Pull requests for {user}/{repo}:</p>
            {
                loading ? 
                <p>Loading...</p> :
                pullRequests.length === 0 ?
                <p>There are no pull requests for this repository</p> :
                pullRequests
                    .slice()
                    .sort((a, b) => moment(a.lastUpdate).diff(moment(b.lastUpdate)))
                    .map((pr, index) => (
                        <PRCard
                            key={`pr-${index}`}
                            url={pr.url}
                            author={pr.author}
                            authorAvatar={pr.authorAvatar}
                            title={pr.title}
                            description={pr.description}
                            lastUpdate={pr.lastUpdate}
                        />
                    ))
            }
        </div>
    );
};

export default PullRequests;
