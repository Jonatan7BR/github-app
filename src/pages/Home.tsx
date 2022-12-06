import { useEffect } from "react";
import { getRepo } from "../api/github-repo";
import Card from "../components/Card"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { thisRepoName } from "../utils/github-repo.utils";

import './Home.scss';

const Home = (): JSX.Element => {
    const loading = useAppSelector(state => state.gitHubRepo.loading);
    const thisRepo = useAppSelector(state => state.gitHubRepo.thisRepo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRepo(thisRepoName));
    }, [dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }
    
    if (!thisRepo) {
        return <p>Failed to fetch default repo</p>;
    }

    return (
        <div className="this-repo">
            <Card 
                url={thisRepo.url} 
                avatar={thisRepo.avatar} 
                user={thisRepo.user}
                repo={thisRepo.repo}
                subs={thisRepo.subs}
            />
        </div>
    );
};

export default Home;
