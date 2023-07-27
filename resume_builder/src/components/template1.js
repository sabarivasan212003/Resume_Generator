import React,{useState} from 'react'
// import { useSelector } from 'react-redux'
// const shortid = require('shortid')
// import { MyContext } from "./context.js";
// import MyComponent from "./personal.js";
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux'
import { useNavigate,useHistory } from 'react-router-dom';
import { selectUser } from '../redux/useSlice';
import '../style/temp1.css'
function Template1() {
    const [text, setText] = useState("");
    const user=useSelector(selectUser); 
    // const hobbies=useSelector(state => state.personal);
   
  return (
    <div>
    <div className="mb-5 p-4 w-100" style={{border:"5px solid #00adb5",marginTop:'10px',marginRight:'30px'}}>
        <div >
            {/* <div className="row  m-0 d-flex align-items-center" style={{height:"160px"}}> */}
                {/* <div className="col-2 text-center media" > */}
                    {/* <img className="rounded align-self-center mx-auto " alt='profile-pic'
                         style={{maxHeight:'50px',minHeight:"10px", width:'100px', background:'grey',padding:0}}/>
                  */}
                {/* </div> */}
                {/* <div className="col-6    text-left font-weight-bold " style={{fontFamily:"Serif"}}>
                    <div className=' d-flex justify-content-center' style={{color:"#00adb5",fontSize:"55px"}}></div>      
                    <h5 className=' d-flex justify-content-center'>       
                          {/* {hobbies.lname} */}
                    {/* </h5> */}
                {/* </div> */} 
                {/* <div className="col-4  ">
                    <div className=' p-3' style={{fontSize:"18px",float:"left",display:"inline-block"}}>
                        {/* <div ></div> */}
                        {/* <div></div> */}
                        {/* <div>
                        </div> */}
                    </div>
                {/* </div> * */}
            {/* </div> */}
        {/* </div> */}
        {/* <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
        <div className="text-justify mx-4"></div>
        <hr style={{height:"5px",backgroundColor:"#00adb5"}}/> */}

        <div className="container" style={{fontFamily:"Serif",}}>
            <div className="row">
                <div className="col-3 text-left" style={{color:"#00adb5"}}> <h4> Personal Experience</h4></div>
                <div class="section__list">
        <div class="section__list-item">
          <div class="left">
            <div class="name">Firstname:{user.firstname}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastname:{user.lastname}</div>
            <div class="addr">Age:{user.age}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;DOB:{user.dob}</div>
            {/* <div class="desc">DOB:{user.dob}</div> */}
            <div class="desc">Email:{user.pincode}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phoneno:{user.phone}</div>
            {/* <div class="duration">city:{user.city}</div> */}
          </div>
          <div class="right">
            {/* <div class="name">lastname:<h9>{user.lastname}</h9></div> */}
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
                <div className="col-9  text-left " style={{fontSize:"18px"}}>
                   
               
                </div>
                <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left" style={{color:"#00adb5"}}><h4>professional details</h4></div>
                <div class="left">
            <div class="name">Positiontitle:{user.positiontitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lastname:{user.experience}</div>
          <div class="addr">Startdate:{user.startdate1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Enddate:{user.enddate1}</div>
            {/* <div class="desc">DOB:{user.dob}</div> */}
            <div class="desc">Description:{user.description1}</div>
            {/* <div class="duration">city:{user.city}</div> */}
          </div>
          {/* <div class="right">
            <div class="name">Experience:<h9>{user.experience}</h9></div>
            <div class="desc">End-date:{user.enddate1}</div>
            {/* <div class="desc">Pincode:{user.pincode}</div> */}
          {/* </div>  */}

      
                
                <div className="col-9 text-left" >
                    <div style={{fontSize:"18px"}}>
                        
                        
                    </div>
                </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left" style={{color:"#00adb5"}}><h4>Skills</h4></div>
                <div class="left">
            <div class="name">Skill-1:{user.skill1}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skill-2:{user.skill2}</div>
          <div class="addr">Skill-3:{user.skill3}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skill-4:{user.skill4}</div>
            {/* <div class="desc">DOB:{user.dob}</div> */}
            {/* <div class="desc">Description:{user.description1}</div> */}
            {/* <div class="duration">city:{user.city}</div> */}
          </div>
                <div className="col-9 text-left" >
                    <div style={{fontSize:"18px"}}>
                        
                        
                    </div>
                </div>
                {/* <div className="w-100 mt-4"> </div>
                <hr style={{height:"5px",backgroundColor:"#00adb5"}}/>
                <div className="col-3 text-left " >
                    <h4 style={{color:"#00adb5"}}>Key Skills</h4>
                </div>
                <div className="col-9 text-left" style={{fontSize:"18px"}}>
                    
                       
                </div>
                   
                </div> */}
              <div className="w-100 mt-4"> </div>
              <hr style={{ height: "5px", backgroundColor: "#00adb5" }} />
              <div className="col-3 text-left " >
                  <h4 style={{ color: "#00adb5" }}>Education details</h4>
              </div>
              <div class="name">school:{user.positiontitle}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Degree:{user.experience}</div>
          <div class="addr">Startdate:{user.startdat}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enddate:{user.enddate}</div>
            {/* <div class="desc">DOB:{user.dob}</div> */}
            <div class="desc">Description:{user.description}</div>
              <div className="col-9 text-left" style={{ fontSize: "18px" }}>


              </div>

          </div>
                
        </div>
        
     </div>
    
     </div>      
    
  );
}

export default Template1;