import React, { Component,useState } from 'react'
import Navbar from './Navbar';
import '../style/create.css';
import { useNavigate } from 'react-router-dom';
function Create() {
    const navigate=useNavigate('');
    const hello=(value)=>{
              navigate(`/side/${value}`)
    }
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const handleMouseOver1 = () => {
    setIsHovered1(true);
  };

  const handleMouseOut1 = () => {
    setIsHovered1(false);
  };
  const handleMouseOver2 = () => {
    setIsHovered2(true);
  };

  const handleMouseOut2 = () => {
    setIsHovered2(false);
  };
  const handleMouseOver3 = () => {
    setIsHovered3(true);
  };

  const handleMouseOut3 = () => {
    setIsHovered3(false);
  };
    return ( 
        <>
        {/* <div> */}
        <Navbar />
            <h3 style={{marginLeft:'550px',marginTop:'45px',fontFamily:'courier'}}>Build an job winning resume</h3>
           <div className='main1'>
           {/* <img src='https://img.freepik.com/free-psd/clean-modern-resume-cv-template_237398-297.jpg?size=626&ext=jpg&ga=GA1.2.2104703623.1688961485&semt=ais'></img> */}
            <div className='subs1'
            
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
    >
      {isHovered &&( <button className='btn btn-primary w-20 h-6' onClick={()=>hello('1')}style={{marginTop:'250px',marginLeft:'130px'}}>Use Template</button>) }
   
            </div>
            <div className='subs2' onMouseOver={handleMouseOver1}
      onMouseOut={handleMouseOut1}
      style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
    >
      {isHovered1 &&( <button className='btn btn-primary w-20 h-6'  onClick={()=>hello('2')}style={{marginTop:'250px',marginLeft:'130px'}}>Use Template</button>) }
   
            
            </div>  
            <div className='subs3'
            onMouseOver={handleMouseOver2}
            onMouseOut={handleMouseOut2}
            style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
          >
            {isHovered2 &&( <button className='btn btn-primary w-20 h-6'  onClick={()=>hello('3')}style={{marginTop:'250px',marginLeft:'130px'}}>Use Template</button>) }
         

            </div>
            <div className='subs4'
            onMouseOver={handleMouseOver3}
            onMouseOut={handleMouseOut3}
            style={{ backgroundColor: isHovered ? 'blue' : 'red' }}
          >
            {isHovered3 &&( <button className='btn btn-primary w-20 h-6' onClick={()=>hello('4')}style={{marginTop:'250px',marginLeft:'130px'}}>Use Template</button>) }
         
            </div>
           
           </div>
 
   
        </>
     );
}

export default Create;