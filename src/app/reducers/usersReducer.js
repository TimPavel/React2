export default function reducer(state={
  users: [],
  fetching: false,
  error: null,
}, action) {

  switch (action.type) {
    case 'FETCH_USERS': {
      return {
        ...state,
        users: action.payload,
      }
    }
    case 'FETCH_USER_REJECTED': {
      return {...state, fetching: false}
    }

  }

  return state;
};