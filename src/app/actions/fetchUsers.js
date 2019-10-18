import axios  from "axios";

export function fetchUsers() {

  return function(dispatch) {
    dispatch({type: 'FETCH_USERS'});

    axios.get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
       
        dispatch({type: 'FETCH_USERS', payload: response.data})
      });

  };


}
