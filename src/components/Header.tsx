import ThemeToggle from "./ThemeToggle";
import './Header.scss';
import { Link } from "react-router-dom";

const Header = (): JSX.Element => {
    return (
        <>
            <header className="page-header">
                <h1 className="title _nomargin">
                    GitHub Repo Viewer
                </h1>
                <div className="themetoggler">
                    <ThemeToggle />
                </div>
            </header>
            <nav className="nav-links">
                <Link to="/" className="page">Home</Link>
                <Link to="/search" className="page">Search</Link>
            </nav>
        </>
    );
};

export default Header;
