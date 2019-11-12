const productsReducer = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PROD':
        console.log("addProd", action)
        return [
          ...state,
          {
            nombre: action.payload.nombre,
            categoria: action.payload.categoria
          }
        ]
        case 'DELETE_PROD':
          let state2=state.slice();
          return state2.filter((prod)=>{return prod._id!==action.payload});
      default:
        return state
    }
  }
  
  export default productsReducer