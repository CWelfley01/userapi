import React, { Component } from "react";
import Users from "./users";

import styles from "../style/users.scss";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>User Profile</h1>
        <h2>Created</h2>
        <div className="user-wrapper">
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
          <Users />
        </div>
      </div>
    );
  }
}
