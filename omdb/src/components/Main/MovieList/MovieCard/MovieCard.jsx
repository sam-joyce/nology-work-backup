import React, { Component } from "react";
import MoviePoster from "./MoviePoster/MoviePoster";

import Card from 'react-bootstrap/Card';

export default class MovieCard extends Component {
    render() {
        // console.log(this.props.movie);
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Img variant="top" src={this.props.movie.Poster} />
                    <Card.Title>{this.props.movie.Title}</Card.Title>
                    <Card.Text>{this.props.movie.Year}</Card.Text>
                </Card.Body>
            </Card>
        )
    }
}