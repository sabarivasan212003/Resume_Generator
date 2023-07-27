import React from 'react'
import '../style/temp3.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux'
import { selectUser } from '../redux/useSlice';
function Temp3() {
  const navigate=useNavigate('');
    const user=useSelector(selectUser); 
    const hey=()=>{
      //  navigate('/')
     window.history.back();
  }
  const hey1=()=>{
        navigate('/create')
     
  }
    return ( 
        <div>
    <link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css' />

<div class="containe">
  <div class="header">
    <div class="full-name">
     
    </div>
  </div>
   <div class="details">
    <div class="section">
      <div class="section__title">Personal Details</div>
      <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Firstname:{user.firstname}</div>
            <div class="addr">Age:{user.age}</div>
            <div class="duration">city:{user.city}</div>
          </div>
          <div class="right">
            <div class="name">lastname:<h9>{user.lastname}</h9></div>
            <div class="desc">DOB:{user.dob}</div>
            <div class="desc">Pincode:{user.pincode}</div>
          </div>
        </div>
                {/* <div class="section__list-item">
          <div class="left">
            <div class="name">Akount</div>
            <div class="addr">San Monica, CA</div>
            <div class="duration">Jan 2011 - Feb 2015</div>
          </div>
          <div class="right">
            <div class="name">Fr developer</div>
            <div class="desc">did This and that</div>
          </div>
        </div> */}

      </div>
    </div>
    <div class="section">
      <div class="section__title">Professional Details</div>
      <div class="section__list">
      <div class="left">
            <div class="name">Position-title:{user.positiontitle}</div>
            <div class="addr">start-date:{user.startdate1}</div>
            <div class="duration">Descripton:{user.description1}</div>
          </div>
          <div class="right">
            <div class="name">Experience:<h9>{user.experience}</h9></div>
            <div class="desc">End-date:{user.enddate1}</div>
            {/* <div class="desc">Pincode:{user.pincode}</div> */}
          </div>

      </div>
      
  </div>
     <div class="section">
      <div class="section__title">SKILLS</div> 
       <div class="section__list">
         <div class="section__list-item">
         <div class="left">
            <div class="name">Skill-1:{user.skill1}</div>
            <div class="addr">Skill-2:{user.skill2}</div>
            {/* <div class="duration">Descripton:{user.description1}</div> */}
          </div>
          <div class="right">
          <div class="name">Skill-3:{user.skill3}</div>
            <div class="addr">Skill-4:{user.skill4}</div>
            {/* <div class="desc">Pincode:{user.pincode}</div> */}
          </div>
           {/* <div class="name">DSP</div> */}
           {/* <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow.</div> */}
         </div>
         
         {/* <div class="section__list-item">
                    <div class="name">DSP</div>
           <div class="text">I am a front-end developer with more than 3 years of experience writing html, css, and js. I'm motivated, result-focused and seeking a successful team-oriented company with opportunity to grow. <a href="/login">link</a>
           </div>
         </div> */}
       </div>
    </div>
      <div class="section">
       {/* <div class="section__title">Skills</div> */}
       <div class="skills">
         <div class="skills__item">
           {/* <div class="left"><div class="name">
             Javascript
             </div></div> */}
           {/* <div class="right"> */}
                          {/* <input  id="ck1" type="checkbox" checked/> */}
{/* 
             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label> */}

           {/* </div> */}
         </div>
         
       </div>
       <div class="skills__item">
           {/* <div class="left"><div class="name">
             CSS</div></div>
           <div class="right"> */}
                          {/* <input  id="ck1" type="checkbox" checked/>

             <label for="ck1"></label>
                          <input id="ck2" type="checkbox" checked/>

              <label for="ck2"></label>
                         <input id="ck3" type="checkbox" />

              <label for="ck3"></label>
                           <input id="ck4" type="checkbox" />
            <label for="ck4"></label>
                          <input id="ck5" type="checkbox" />
              <label for="ck5"></label> */}

           {/* </div> */}
         </div>
         
       </div>
     <div class="section">
     <div class="section__title">
       {/* Interests */}
                  Educational Details
       </div>
       <div class="section__list">
         <div class="section__list-item">
         <div class="left">
            <div class="name">school:{user.school}</div>
            <div class="addr">start-date:{user.startdate}</div>
            <div class="duration">Description:{user.Description}</div>
          </div>
          <div class="right">
            <div class="name">Degree:<h9>{user.degree}</h9></div>
            <div class="desc">End-date:{user.enddate}</div>
            {/* <div class="desc">:{user.pincode}</div> */}
          </div>
          </div>
       </div>
     </div>
     </div>
  </div>
 
</div>

  
     );
}

export default Temp3;