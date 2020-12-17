import React from 'react'
import {  Route,Redirect,Switch } from "react-router-dom";

import HomeView from '../views/FrontPages/Home/HomeView';
import AboutView from '../views/FrontPages/About/AboutView';
import NotFoundPages from '../pages/NotFoundPages';

function FrontPages() {
    return (
        <>
            ini front pages
            <Switch>
                <Route path="/" exact component={HomeView} />
                <Route path="/about" exact component={AboutView} />
                <Route path="*" component={NotFoundPages}/>
            </Switch>
 

           
        </>
    )
}

export default FrontPages
