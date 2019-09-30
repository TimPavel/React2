import React, { Component } from 'react';
import { Post } from './Post';


export class Blog extends Component {

  render() {
    const posts = this.props.posts.map((post) => {
      return <Post post = { post } />
    });

    return (
      <div>
        { posts }
      </div>
    );
  }
}

