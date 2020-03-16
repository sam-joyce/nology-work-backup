import React, { Component } from "react";
import styles from "../PostList/PostList.module.scss";
import data from "../../Container/App/static/data/data";
import Post from "../Post/Post";

class PostList extends Component {
    render() {
        return (
            <section>
                {data.map((twit, index) => (
                   <Post postData={twit} key={index} /> 
                ))}
            </section>
        )
    }
}

export default PostList;