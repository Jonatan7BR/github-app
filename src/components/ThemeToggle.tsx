import { useAppDispatch, useAppSelector } from "../redux/hooks"
import { changeTheme } from "../redux/reducers/themeSlice";
import './ThemeToggle.scss';

const ThemeToggle = (): JSX.Element => {
    const darkModeOn = useAppSelector(state => state.theme.darkModeOn);
    const dispatch = useAppDispatch();

    const handleClick = (): void => {
        dispatch(changeTheme(!darkModeOn));
    };

    return (
        <button 
            type="button" 
            className="toggle-theme material-symbols-outlined" 
            title={darkModeOn ? 'Change to light mode' : 'Change to dark mode'} 
            onClick={handleClick}
        >
            { darkModeOn ? 'dark_mode' : 'light_mode' }
        </button>
    );
};

export default ThemeToggle;
