import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { getRepo } from "../api/github-repo";
import RepoCard from "../components/RepoCard"
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { loadRepos } from "../redux/reducers/gitHubRepoSlice";

import './Home.scss';

const Home = (): JSX.Element => {
    let [search, setSearch] = useState('');
    let [showingLocalRepos, setShowingLocalRepos] = useState(true);

    const loading = useAppSelector(state => state.gitHubRepo.loading);
    const thisRepo = useAppSelector(state => state.gitHubRepo.thisRepo);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadRepos());
    }, [dispatch]);

    const changeSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setSearch(event.target.value);
    };

    const submitForm = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setShowingLocalRepos(false);
        dispatch(getRepo(search));
    };

    const resetForm = (): void => {
        setSearch('');
        setShowingLocalRepos(true);
        dispatch(loadRepos());
    };

    return (
        <div className="this-repo">
            <form className="reposearch" onSubmit={submitForm} onReset={resetForm}>
                <input 
                    className="textfield" 
                    type="text" 
                    value={search} 
                    placeholder="username/reponame"
                    onChange={changeSearch} 
                    required
                />
                <button className="button material-symbols-outlined" type="submit">search</button>
                <button className="button material-symbols-outlined" type="reset">close</button>
            </form>
            <p>{showingLocalRepos ? 'Last viewed:' : 'Search results:'}</p>
            {
                loading ?
                <p>Loading...</p> :
                thisRepo.length === 0 ?
                <p>No repositories</p> :
                <div className="repolist">
                    {
                        thisRepo.map((repo, index) => (
                            <RepoCard 
                                key={`repo-${index}`}
                                url={repo.url} 
                                avatar={repo.avatar} 
                                user={repo.user}
                                repo={repo.repo}
                            />
                        ))
                    }
                </div>
            }
        </div>
    );
};

export default Home;
