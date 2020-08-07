const displayMessage = (state=false, action) => {
  switch(action.type){
    case 'MESSAGE' :
      return !state
    default:
      return state
  }
}

export default displayMessage