import { Link } from "react-router-dom";
import { GitHubRepo } from "../models/github-repo.model";

import './RepoCard.scss';

type Props = GitHubRepo;

const RepoCard = (props: Props): JSX.Element => {
    const { url, avatar, user, repo } = props;

    return (
        <div className="details-card">
            <img className="poster" alt="User avatar" src={avatar} />
            <div className="details">
                <h3 className="title">{user}/<span className="repo">{repo}</span></h3>
                <p className="repourl">
                    <a className="url" href={url} target="_blank" rel="noreferrer">{url}</a>
                </p>
                <p className="subs">
                    <Link className="prslink" to={`/pr/${user}/${repo}`}>See pull requests</Link>
                </p>
            </div>
        </div>
    );
};

export default RepoCard;
