import React, { Component } from "react";
import styles from "./MovieList.module.scss";
import MovieCard from "./MovieCard";


export default class MovieList extends Component {
    render() {
        return (
            <section className={styles.MovieList}>
                {this.props.movies.map((movie, index) => {
                    return (
                        <MovieCard movie={movie} key={index}/>
                    )
                })}
            </section>
        )
    }
}