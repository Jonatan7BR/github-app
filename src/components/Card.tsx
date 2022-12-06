import { GitHubRepo } from "../models/repo.model";

import './Card.scss';

type Props = GitHubRepo;

const Card = (props: Props): JSX.Element => {
    const { url, avatar, user, repo, subs } = props;

    const subsFormat = new Intl.NumberFormat().format(subs);

    return (
        <div className="details-card">
            <img className="poster" alt="User avatar" src={avatar} />
            <div className="details">
                <h3 className="title">{user}/{repo}</h3>
                <p><a className="url" href={url} target="_blank" rel="noreferrer">{url}</a></p>
                <p className="subs">
                    <span className="material-symbols-outlined">star</span> {subsFormat}
                </p>
            </div>
        </div>
    );
};

export default Card;
