import React, { Component } from 'react'
import Navbar from './Navbar';
import '../style/home.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/useSlice';
import Footer from './footer';
function Home() {
    const navigate=useNavigate('');
    const user=useSelector(selectUser); 
    const hello=()=>{
        navigate('/create')
    }
    return ( 
        <>
        <Navbar />
        
                    {/* <h1 style={{width:'10px',height:'2px',marginLeft:'70%',fontFamily:'courier',fontSize:'30px'}}> Welcome <span>{user.email} </span></h1> */}
                    <h1 style={{marginLeft:'1020px',fontFamily:'courier',fontSize:'30px'}}> Welcome {user.email}</h1>
        <div className='Main'>
        {/* <div className='welcome-container'> */}
                {/* </div> */}

             <div className='sub1'>
                <h1 style={{fontFamily:'courier'}}><b>The Ultimate</b></h1>
                <h1 style={{fontFamily:'courier'}}><b>Resume Builder</b></h1>
                <br></br>
                <h5 style={{fontFamily:'courier'}}>Build beautiful, recruiter-tested resumes in a few clicks!</h5>
                <h5 style={{fontFamily:'courier'}}>Our resume builder is powerful and easy to use, with a</h5>
                <h5 style={{fontFamily:'courier'}}>range of amazing functions. Custom-tailor resumes for</h5>
                <h5 style={{fontFamily:'courier'}}>any job within minutes. Increase your interview chances</h5>
                <h5 style={{fontFamily:'courier'}}>and rise above the competition.</h5>
                <button type='submit' className='btn btn-primary w-25 ' onClick={hello} style={{fontFamily:'courier',marginTop:  '80px',width:'1px',justifyContent:'center',marginLeft:'90px'}}>TRY FOR FREE</button>
             </div>
             <div className='sub2'>
                    
                </div>
        </div>
                <Footer />
        </>
     );
}

export default Home;