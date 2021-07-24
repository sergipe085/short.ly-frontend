import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { Home } from "../pages/Home";
import { Link } from "../pages/Link";
import api from "../services/api";

interface IResponse {
    target_url: string;
}

export function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/:code+" component={Link}/>
        </Switch>
    );
}