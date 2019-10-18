import axios  from "axios";

export function fetchUsers() {

  return function(dispatch) {
    dispatch({type: 'FETCH_USERS'});

    axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // console.log(response.data);

        // let users = response.data.map((user) => {
        //   return user;
        // });
        //
        // // console.log(users);
        dispatch({type: 'FETCH_USERS', payload: response.data})
      });

  };


}