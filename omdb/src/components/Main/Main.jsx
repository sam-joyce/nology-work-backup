import React, { Component } from "react";
import MovieList from "./MovieList";
import styles from "./Main.module.scss";

class Main extends Component {
    render() {
        return(
            <section className={styles.MovieList}>
                <MovieList />
            </section>
        )
    }
}

export default Main;