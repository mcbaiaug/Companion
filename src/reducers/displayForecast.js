const displayForecast = (state = false, action) => {
  switch (action.type) {
    case 'FORECAST':
      return !state
    default:
      return state
  }
}

export default displayForecast
