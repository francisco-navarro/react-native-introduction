const DEFAULT_STATE = {logged: false};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
  case 'LOGIN':
    return {...state, logged: true};
  case 'LOGOUT':
    return {...state, logged: false};
  case 'RESET':
    return {...state, logged: false};
  default:
    return state;
  }
}