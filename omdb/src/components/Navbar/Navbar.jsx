import React, { Component } from "react";
import styles from "./Navbar.module.scss";
import NavItem from "../NavItem/NavItem";


export default class Navbar extends Component {
    render() {
        // console.log(this.props);
        return(
            <article className={styles.navbar}>
                <h1>OMDB</h1>
                <NavItem route="/login" name="login" />
                {this.props.movies.map((movie, index) => {
                    return (
                    <p movie={movie} key={index} onClick={this.props.filterMovies}>{movie.Title}</p>
                    )
                })}
            </article>
        )
    }
}
