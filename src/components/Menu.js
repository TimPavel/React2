import React, { Component } from 'react';

export class Menu extends Component {

  render() {
    const items = this.props.items.map((item, index) => {
      return <li key={ index } ><a href={ item.href } > { item.title } </a></li>
    });
    return (
      <div>
        <h3>Menu:</h3>
        <ul>
          { items }
        </ul>
      </div>
    );
  }
}



