import React, { Component } from 'react'
import Navbar from './Navbar';
import '../style/home1.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/useSlice';
import Footer from './footer';
function Home1() {
    const navigate=useNavigate('');
    const user=useSelector(selectUser); 
    const hello=()=>{
        navigate('/login')
    }
    return ( 
        <>
        {/* <Navbar /> */}
        
                    {/* <h1 style={{width:'10px',height:'2px',marginLeft:'70%',fontFamily:'courier',fontSize:'30px'}}> Welcome <span>{user.email} </span></h1> */}
        <div className='Main'>
        {/* <div className='welcome-container'> */}
                {/* </div> */}

             <div className='sub1'>
                <h1 style={{fontFamily:'courier'}}><b>Online Resume Builder.</b></h1>
                <h1 style={{fontFamily:'courier'}}><b>Make a Professional</b></h1>
                <h1 style={{fontFamily:'courier'}}><b>Resume for Free.</b></h1>
                <br></br>
                <h5 style={{fontFamily:'Avenir'}}>Resume writing can be stressful, confusing, and time-</h5>
                <h5 style={{fontFamily:'Avenir'}}>consuming if you do it all on your own. With our Resume</h5>
                <h5 style={{fontFamily:'Avenir'}}>range of amazing functions. Custom-tailor resumes for</h5>
                <h5 style={{fontFamily:'Helvetica'}}>Maker, it’s quick, pain-free, and effective.</h5>
                {/* <h5 style={{fontFamily:'courier'}}>and rise above the competition.</h5> */}
                <button type='submit' className='btn btn-primary w-25 ' onClick={hello} style={{fontFamily:'courier',marginTop:  '80px',width:'1px',justifyContent:'center',marginLeft:'90px'}}>GET STARTED</button>
             </div>
             <div className='sub9'>
                    
                </div>
        </div>
                <Footer />
        </>
     );
}

export default Home1;