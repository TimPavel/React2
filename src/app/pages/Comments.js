import React, { Component } from 'react';
import { CommentsList } from "../components/CommentsList";

export class Comments extends Component {

  render() {

    return (
      <div>
        {
          (!this.props.children) ? (<CommentsList />) : (this.props.children)
        }
      </div>
    );
  }

}

