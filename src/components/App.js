import React, { Component } from "react";

import '../styles/App.css';
import AppRouter from './Header'

class App extends Component {
    render() {
        return (
            <div className="jumbotron">
                <AppRouter/>
            </div>

    );
    }
}

export default App;