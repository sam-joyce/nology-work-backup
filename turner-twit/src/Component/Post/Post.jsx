import React, { Component } from "react";
import styles from "./Post.module.scss";
import data from "../../Container/App/static/data/data";

class PostComponent extends Component {
    render() {
        const postData = this.props.postData;
        return (
            <article className={styles.post}>
                <h3>{this.props.postData.username}</h3>
                <img src={this.props.postData.image} alt=""/>
                <p>{this.props.postData.text}</p>
            </article>
        )
    }
}

export default PostComponent;