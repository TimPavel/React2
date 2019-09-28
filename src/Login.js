import React, { Component } from 'react';

export class Login extends Component {

  render() {

    return (
      <div>
        <h3>Логин:</h3>
        <form>
          <input type="text" name="name" placeholder="name"/>
          <input type="text" name="password" placeholder="password"/>
          <button type="submit">Отправить</button>
        </form>
      </div>
    );
  }
}