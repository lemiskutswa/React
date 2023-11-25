

function Header() {
    return (
        <nav className="nav-bar">
            <img src="./react-logo.png" className="nav-logo"/>
            <ul className="nav-items">
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

function MainContent () {
    return (
        <div>
        <h1 className="h1">Fun Facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>

    )
}

function FooterSection () {
    <div>
        <footer>2023 Lemis Development. All rights reserved</footer>;
    </div>
    
}

function Page () {
    return (
    <div>
        <Header />
        <MainContent />
        <footer className="footer"> &#169; 2023 Lemis Development. All rights reserved</footer>
    </div>
    );
}


//ReactDOM.createRoot(document.getElementById("root")).render(page);
ReactDOM.render(<Page />, document.getElementById("root"));
