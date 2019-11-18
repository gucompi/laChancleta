const buscadorReducer = (state = "", action) => {
    switch (action.type) {
      case 'UPDATE_BUSCADOR':
        console.log("action22222222222")
        console.log(action)
        return action.payload
      default:
        return state
    }
  }
  
  export default buscadorReducer