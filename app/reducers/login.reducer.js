export default (state = false, action) => {
  switch (action.type) {
  case 'LOGIN':
    return state = true;
  case 'LOGOUT':
    return state = false;
  case 'RESET':
    return 0;
  default:
    return state;
  }
}