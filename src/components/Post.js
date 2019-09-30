import React, {Component} from 'react';

export class Post extends Component {

  render() {

    return (
      <div className="post">
        <h3>{ this.props.post.title }</h3> <p>{ this.props.post.postBody }</p>
      </div>
    );
  }
}

