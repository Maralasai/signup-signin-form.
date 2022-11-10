import React,{useState} from 'react'

const App=() =>{
  const [data,setData]=useState({
  //username:'',
  //email:'',
  //password:'',
  //confirmPassword:'',
  })
  const{username,email,password,confirmPassword}=data
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  const submitHandler=e=>{
    e.preventDefault();
    if(password === confirmPassword){
      console.log(data);
    }
    else{
      console.log("password doesnot matched");
    }
  }
  return (
    <div>
      <center>
      <h1>Signup form</h1>
        <form onSubmit={submitHandler}>
         <p>
          <label>Username or email address</label>
          <input type="text" name="first_name" required /> 
         </p>     
          <input type="email" name="email" value={email} onChange={changeHandler}/> <br/> <br/>
          <input type ="password" name="password" value={password} onChange={changeHandler}/> <br/> <br/>
          <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} /> <br/> <br/>
          
          <button id="sub_btn" type="submit">submit</button>
        </form>
     
      </center>
      
    </div>
  )
}

export default App

