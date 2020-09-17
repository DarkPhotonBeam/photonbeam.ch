import React from "react";
import './Main.scss';
import { Switch, Route } from 'react-router-dom';
import Home from "./routes/Home/Home";


export default function Main() {
    return(
        <main className="Main">
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
        </main>
    );
}