const buscadorReducer = (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        console.log("FDAJKLFJSAKL")
        console.log(action.payload)
        return {token:action.payload.token}
      default:
        return state
    }
  }
  
  export default buscadorReducer