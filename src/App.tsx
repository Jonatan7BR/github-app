import { useEffect } from 'react';
import './App.scss';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { changeTheme } from './redux/reducers/themeSlice';

const App = (): JSX.Element => {
    const darkModeOn = useAppSelector(state => state.theme.darkModeOn);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let userPrefersDarkMode = false;
        const themePreference = localStorage.getItem('darkMode');
        if (themePreference !== null) {
            userPrefersDarkMode = themePreference === '1';
        } else {
            userPrefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
        dispatch(changeTheme(userPrefersDarkMode));
    }, [dispatch]);

    useEffect(() => {
        if (darkModeOn) {
            document.body.classList.remove('lightmode');
            document.body.classList.add('darkmode');
            document.documentElement.style.setProperty('color-scheme', 'dark');
            localStorage.setItem('darkMode', '1');
        } else {
            document.body.classList.remove('darkmode');
            document.body.classList.add('lightmode');
            document.documentElement.style.setProperty('color-scheme', 'light');
            localStorage.setItem('darkMode', '0');
        }
    }, [darkModeOn])

    return (
        <p>App works!</p>
    );
};

export default App;
