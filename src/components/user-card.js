import React, { Component } from 'react';



import Users from './users';




export default class UserCard extends Component {
  constructor(props) {
    super(props);

    this.state={
     users:{},
    }
  }
  
  
  
  
  
  render() {
    return (
      <Users />
    )
  }
}







