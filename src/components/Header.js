import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FlashMessagesList from './flash/FlashMessagesList';

// import {
//     HashRouter as Router,
//         Route, Link
// } from 'react-router-dom';

import LoginPage from "./Login"
import RegisterPage from "./registration/Register"

function HomePage() {
    return (
        <div>
            <h2>Home</h2>
            {/*<div> smt</div>*/}
        </div>
    )
}


function AppRouter() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-default">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/login/">Login</Link>
                        </li>
                        <li>
                            <Link to="/registration/">Registration</Link>
                        </li>
                    </ul>
                </nav>

                <div className="container">
                    <FlashMessagesList />
                </div>

                <Route exact path="/" component={HomePage} />
                <Route path="/login/" component={LoginPage} />
                <Route path="/registration/" component={RegisterPage} />
            </div>

        </Router>
    );
}

export default AppRouter;