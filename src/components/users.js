import React, { Component } from "react";
import axios from "axios";

import styles from "../style/users.scss";


export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
    };

    
  }

  getUserInfo() {
    axios
      .get(`https://randomuser.me/api/`)
      .then((request) => {
        this.setState({
          user: request.data.results[0],
        });
        console.log(request.data.results[0]);
      })
      .catch((error) => {
        console.log("get user error", error);
      });
  }

  componentDidMount() {
    this.getUserInfo();
  }

  render() {
    return (
      <div className="user-info">
      {this.state.user.picture ? <img src={this.state.user.picture.large}/>: null}
      {this.state.user.name ? <h1>{this.state.user.name.first}</h1>: null}
      {this.state.user.name ? <h1>{this.state.user.name.last}</h1>: null}
    </div>
    );
  }
}
