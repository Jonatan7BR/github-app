import moment from "moment";
import { RepoPR } from "../models/github-repo.model"

import './PRCard.scss';

type Props = RepoPR;

const PRCard = (props: Props): JSX.Element => {
    let { url, author, authorAvatar, title, description, lastUpdate } = props;

    return (
        <div className="pr-card">
            <h3 className="title"><a href={url} target="_blank" className="link" rel="noreferrer">{title}</a></h3>
            <p className="author">By <img src={authorAvatar} alt="Author avatar" className="avatar" /> {author}</p>
            <p className="description">{description}</p>
            <p>Last updated: {moment(lastUpdate).format('DD/MM/YYYY')}</p>
        </div>
    );
};

export default PRCard;
