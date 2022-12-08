import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getRepo } from "../api/github-repo";
import Card from "../components/Card"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { thisRepoName } from "../utils/github-repo.utils";

import './Home.scss';

const Home = (): JSX.Element => {
    let [search, setSearch] = useState('');

    const loading = useAppSelector(state => state.gitHubRepo.loading);
    const thisRepo = useAppSelector(state => state.gitHubRepo.thisRepo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getRepo(thisRepoName));
    }, [dispatch]);

    const changeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    const submitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        dispatch(getRepo(search));
    };

    return (
        <div className="this-repo">
            <form className="reposearch" onSubmit={submitForm}>
                <input 
                    className="textfield" 
                    type="text" 
                    value={search} 
                    placeholder="username/reponame"
                    onChange={changeSearch} 
                    required
                />
                <button className="button material-symbols-outlined" type="submit">search</button>
            </form>
            {
                loading ?
                <p>Loading...</p> :
                !thisRepo ?
                <p>No repository found</p> :
                <Card 
                    url={thisRepo.url} 
                    avatar={thisRepo.avatar} 
                    user={thisRepo.user}
                    repo={thisRepo.repo}
                    subs={thisRepo.subs}
                />
            }
        </div>
    );
};

export default Home;
