import React, { Component } from 'react'
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux'
import { selectUser } from '../redux/useSlice';
import '../style/temp4.css'
function Temp4() {
    const user=useSelector(selectUser); 
    return ( 
        <div className='hello'> 
                {/* <script src="https://kit.fontawesome.com/b99e675b6e.js"></script> */}

<div class="resume">
   <div class="resume_left">
     {/* <div class="resume_profile">
       <img src="https://i.imgur.com/eCijVBe.png" alt="profile_pic" />
     </div> */}
     <div class="resume_content">
       <div class="resume_item resume_info">
         <div class="title">
           <p class="bold">{user.firstname}{user.lastname}</p>
           <p class="regular">{user.age}</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fas fa-map-signs"></i>
             </div>
             <div class="data">
              {user.city}
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-mobile-alt"></i>
             </div>
             <div class="data">
            {user.pincode}
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fas fa-envelope"></i>
             </div>
             <div class="data">
               {user.firstname}@gmail.com
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-weebly"></i>
             </div>
             <div class="data">
               www.{user.firstname}.com
             </div>
           </li>
         </ul>
       </div>
       <div class="resume_item resume_skills">
         <div class="title">
           <p class="bold">skill's</p>
         </div>
         <ul>
           <li>
             <div class="skill_name">
               {user.skill1}
             </div>
             <div class="skill_progress">
               <span style={{width:'80%'}}></span>
             </div>
             <div class="skill_per">80%</div>
           </li>
           <li>
             <div class="skill_name">
               {user.skill2}
             </div>
             <div class="skill_progress">
               <span style={{width:'70%'}}></span>
             </div>
             <div class="skill_per">70%</div>
           </li>
           <li>
             <div class="skill_name">
               {user.skill3}
             </div>
             <div class="skill_progress">
               <span style={{width:'90%'}}></span>
             </div>
             <div class="skill_per">90%</div>
           </li>
           <li>
             <div class="skill_name">
               {user.skill4}
             </div>
             <div class="skill_progress">
               <span style={{width:'60%'}}></span>
             </div>
             <div class="skill_per">60%</div>
           </li>
           <li>
             {/* <div class="skill_name">
               JQUERY
             </div> */}
             <div class="skill_progress">
               <span style={{width:'88%'}}></span>
             </div>
             <div class="skill_per">88%</div>
           </li>
         </ul>
       </div>
       {/* <div class="resume_item resume_social">
         <div class="title">
           <p class="bold">Social</p>
         </div>
         <ul>
           <li>
             <div class="icon">
               <i class="fab fa-facebook-square"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Facebook</p>
               <p>{user.firstname}@facebook</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-twitter-square"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Twitter</p>
               <p>{user.firstname}@twitter</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-youtube"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Youtube</p>
               <p>{user.firstname}@youtube</p>
             </div>
           </li>
           <li>
             <div class="icon">
               <i class="fab fa-linkedin"></i>
             </div>
             <div class="data">
               <p class="semi-bold">Linkedin</p>
               <p>{user.firstname}@linkedin</p>
             </div>
           </li>
         </ul>
       </div> */}
     </div>
  </div>
  <div class="resume_right">
    <div class="resume_item resume_about">
        <div class="title">
           {/* <p class="bold">About us</p>
         </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis illo fugit officiis distinctio culpa officia totam atque exercitationem inventore repudiandae?</p>
    </div> */}
    <div class="resume_item resume_work">
        <div class="title">
           <p class="bold">Professional details</p>
         </div>
        <ul>
            {/* <li>
                <div class="date"></div> 
                <div class="info">
                     <p class="semi-bold">{user.startdate1}</p> 
                     <p class="semi-bold">{user.enddate1}</p> 
                     <p class="semi-bold">{user.positiontitle}</p> 
                     <p class="semi-bold">{user.experience}</p> 
                   <p>{user.experience}</p> 
                   <p>{user.description1}</p> 

                </div>
            </li> */}
            <li>
              <div class="date"></div>
              <div class="info">
                     <p class="semi-bold">{user.positiontitle}</p> 
                     <p class="semi-bold">{user.experience}</p> 
                     <p class="semi-bold">{user.startdate}</p> 
                     <p class="semi-bold">{user.enddate}</p> 
                     <p class="semi-bold">{user.enddate}</p> 
                  
                </div>
            </li>
            {/* <li>
              <div class="date">2017 - Present</div>
              <div class="info">
                     <p class="semi-bold">Lorem ipsum dolor sit amet.</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li> */}
        </ul>
    </div>
    <div class="resume_item resume_education">
      <div class="title">
           <p class="bold">Education</p>
         </div>
      <ul>
            <li>
                <div class="date"></div> 
                <div class="info">
                     <p class="semi-bold">{user.school}</p> 
                     <p class="semi-bold">{user.startdate}</p> 
                     <p class="semi-bold">{user.enddate}</p> 
                     <p class="semi-bold">{user.degree}</p> 
                     <p class="semi-bold">{user.description}</p> 
                  {/* <p>{user.degree}</p>
                  <p>{user.description}</p> */}
                </div>
            </li>
            {/* <li>
              <div class="date">2000 - 2010</div>
              <div class="info">
                     <p class="semi-bold">Texas International School</p> 
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, voluptatibus!</p>
                </div>
            </li> */}
        </ul>
    </div>
    {/* <div class="resume_item resume_hobby">
      <div class="title">
           <p class="bold">Hobby</p>
         </div>
       <ul>
         <li><i class="fas fa-book" style={{fontSize:'15px'}}>Study </i></li>
         <li><i class="fas fa-gamepad" style={{fontSize:'15px'}}>Games</i></li>
         <li><i class="fas fa-music" style={{fontSize:'15px'}}>Music</i></li>
         <li><i class="fab fa-pagelines" style={{fontSize:' 15px'}}>Workout</i></li>
      </ul>
    </div> */}
  </div>
</div>
        </div>
        </div>
        </div>
     );
}

export default Temp4;