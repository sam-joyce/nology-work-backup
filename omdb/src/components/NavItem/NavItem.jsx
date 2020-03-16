import React, { Component } from "react";
import { Link } from "@reach/router";

export default class NavItem extends Component {
    render() {
        return(
            <p>
                <Link to={this.props.route}>{this.props.name}</Link>
            </p>
        )
    }
}