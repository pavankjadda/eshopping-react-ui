import React from 'react';
import './App.css';
import Header from "./layout/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./core/login";

class App extends React.Component
{
    render()
    {
        return (
            <Router>
                <div className="App">
                    <Header/>
                </div>

                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
