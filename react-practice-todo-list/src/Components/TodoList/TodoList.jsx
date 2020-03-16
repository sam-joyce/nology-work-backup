import React, { Component } from "react";
import styles from "./TodoList.module.scss";

class TodoList extends Component {
    render() {
        return (
            <article>
                <h1>Todo List</h1>
                <input type="text" name="" id=""/>
                <button>Add</button>
                <button>Clear</button>
                <div>0 Tasks Left</div>
            </article>
        )
    };
}

export default TodoList;