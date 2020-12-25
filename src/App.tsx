import React from 'react';
import './App.css';
import Header from "./layout/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./core/login";
import {useCookies} from "react-cookie";

interface ConstructorParams {
    props: any;
}

class App extends React.Component
{
    // @ts-ignore
    constructor(props)
    {
        super(props);
        this.state={
            cookies:[]
        }
    }

    componentDidMount()
    {

    }

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
