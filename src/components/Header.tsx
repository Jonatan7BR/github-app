import ThemeToggle from "./ThemeToggle";
import './Header.scss';

const Header = (): JSX.Element => {
    return (
        <header className="page-header">
            <h1 className="title _nomargin">
                GitHub Repo Viewer
            </h1>
            <div className="themetoggler">
                <ThemeToggle />
            </div>
        </header>
    );
};

export default Header;
