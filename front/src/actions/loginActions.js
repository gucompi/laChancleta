 const loginUser =(payload)=>{


      return dispatch => {
        fetch('http://localhost:8080/user/login',
          {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: { 'Content-Type': 'application/json'}
          }
        ).then((res) => {return res.json()}).then((data)=>{
          dispatch( {
            type: 'LOGIN_USER',
            payload:data
          })
        })
      

    } 
   
  }


  export   {
    loginUser
  }