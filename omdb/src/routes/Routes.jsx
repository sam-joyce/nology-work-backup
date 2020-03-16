import React, { Component } from "react";
import { Router, Redirect } from "@reach/router";
import Login from "../components/Login/Login";
import MovieList from "../components/Main/MovieList/MovieList";

const NotFound = () => (<h2>Not Found</h2>);


export default class Routes extends Component {
    render() {
        return(
            <Router>
                <Redirect noThrow from="/" to="main" ></Redirect>
                <Login path="login" />
                <MovieList path="main" movies={this.props.movies}/>
                <NotFound default />  
            </Router>
        );
    }
}