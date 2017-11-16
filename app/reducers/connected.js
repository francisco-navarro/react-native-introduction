const myReducer = (state = {}, action) => {
  switch (action.type) {
    case 'WARP': 
      return { ...state, local: action.cookie }
    default: 
      return state
  }
}