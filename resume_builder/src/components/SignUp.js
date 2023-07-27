import React,{useState} from 'react'
import '../style/signup.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import { border } from '@mui/system';
import { Link,useNavigate } from 'react-router-dom';
import '../style/login.css'
import axios from 'axios';
function Signup() {
  const submitHandler = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    // const userid = formData.get('userid');
    const name = formData.get('username');
    const email = formData.get('emailid');
    const password = formData.get('password');
    
    const data = {  name, email, password };
    // console.log(data);
  
    axios.post("http://localhost:8080/api/v1/auth/register", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  
  const navigate=useNavigate('');
  const hello=()=>{
    // alert('hi');
    navigate('/login')
  }
  return (
    <div className='log'>
    <div className='wrapper'>
{/* export default Signup */}
    <div className='login'>
        <h2 className='mb-3'>SIGN UP</h2>
      
      <form onSubmit={submitHandler}>
      
      <div className='form-group mb-2'>
              <label for='userid'>USER ID</label>  
             
            <input type="integer" style={{width:'400px',borderRadius:'5px',height:'45px',border:'none',borderBlockColor:'blue', marginTop:  '10px'}} name="userid"required></input>
        </div>
        
      <div className='form-group mb-2'>
              <label htmlFor='userid'>USER NAME</label>
          
              
              <input type="integer" style={{width:'400px',borderRadius:'5px',height:'45px',border:'none',borderBlockColor:'blue', marginTop:  '10px'}} name="username" required />
        </div>
        <div className='form-group mb-2'>
              <label htmlFor='email' className='form-label'>Email Address</label>
             
            <input style={{width:'400px',borderRadius:'5px',height:'45px',border:'none',borderBlockColor:'blue',marginTop:  '10px'}} name="emailid"required></input>
        </div>
        <div className='form-group mb-2'>
            <label htmlFor='password ' className='form-label'>Password</label>
            
            <input type="password" style={{width:'400px',borderRadius:'5px',height:'45px',border:'none',borderBlockColor:'blue',marginTop:  '10px'}} name="password"required></input>
        </div>
        {/* <div className='form-group mb-2'>
            <input type="checkbox" className='form-check-input'></input>
            <label htmlFor='check' >Remember me </label>
          </div> */}
        <button type='submit' className='btn btn-primary w-100 ' style={{marginTop:  '10px'}}>SIGNIN</button>
        <a href='#' style={{marginTop:  '10px'}} onClick={hello}>Already have an account</a>
         {/* <button type='submit' className='btn btn-primary w-100 mt-2' onClick={hello}>Already have an account</button>   */}
    {/* <Link to="/login"></Link> */}
        </form>
    </div>
    </div>
    </div>
  )
} 
export default Signup;
