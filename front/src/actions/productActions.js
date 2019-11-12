 const addProduct = payload => ({
    type: 'ADD_PROD',
    payload:payload
  })


   const deleteProduct = payload=>({
    type:'DELETE_PROD',
    payload:payload
  })



  export   {
addProduct,deleteProduct
  }