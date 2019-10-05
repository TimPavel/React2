import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Comment extends Component {

  render() {
    const { id, name, email, body } = this.props;

    return (
      <div className="card border-secondary mb-3">
        <div className="card-header">Name:&nbsp;
          <Link to={ `/comments/${ id }` }>
            { name }
          </Link>
        </div>
        <div className="card-body text-secondary">
          <p>Email: { email }</p>
          <p>{ body }</p>
        </div>
      </div>
    );
  }
}
