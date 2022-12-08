import moment from "moment";
import { RepoPR } from "../models/github-repo.model"

type Props = RepoPR;

const PRCard = (props: Props): JSX.Element => {
    let { url, author, authorAvatar, title, description, lastUpdate } = props;

    return (
        <div className="pr-card">
            <h3><a href={url} target="_blank noreferrer" className="title">{title}</a></h3>
            <p>By <img src={authorAvatar} alt="Author avatar" /> {author}</p>
            <p>{description}</p>
            <p>Last updated: {moment(lastUpdate).format('DD/MM/YYYY')}</p>
        </div>
    );
};

export default PRCard;