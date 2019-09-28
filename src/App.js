import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Menu } from './Menu';
import { Login } from './Login';

class App extends Component {

  render() {
    const menuItems = [
      {href: "/", title: "Главная"},
      {href: "/about", title: "О нас"},
      {href: "/contacts", title: "Контакты"}
    ];

    return (
      <div>
        <Menu items = { menuItems }/>
        <Login />

      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));