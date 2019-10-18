import React, { Component } from 'react'
import { axios } from 'axios';

import User from '../components/User';

import { connect } from "react-redux";
import { fetchUsers } from "../actions/fetchUsers";

class UsersList extends Component {


  render() {
    if (!this.props.users.users || !this.props.users.users.length) {
      return null;
    }

    const users = this.props.users.users.map(user => {
      return <User key={user.id} {...user} />
    });


    return (
      <div>
        <h1>Пользователи</h1>
        { users }
      </div>
    )
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }
}


function mapStateToProps(state) {

  return {
    users: state.users,
  }
}

export default connect(mapStateToProps)(UsersList);
