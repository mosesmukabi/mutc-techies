import "./header.css";



function HeaderNavigation () {
    return(
        <div className="header-navigation"> 
            <h1 className="logo">mutc-techies</h1>
            <nav>
                <ol className="navigation-list">
                    <li className="navigation-item"><a className="navigation-link" href="#">Home</a></li>
                    <li className="navigation-item"><a className="navigation-link" href="#">Leadership</a></li>
                    <li className="navigation-item"><a className="navigation-link" href="#">Tracks</a></li>
                    <li className="navigation-item"><a className="navigation-link" href="#">Events</a></li>
                </ol>
            </nav>
        </div>
    )
}
function Header() {
    return(
        <header>
            <HeaderNavigation/>
        </header>
    )
}

export default Header;