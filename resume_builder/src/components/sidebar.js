import React, { useState,useRef } from 'react';
import '../style/sidebar.css';
// import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Details from './Details';
import Home from './home';
import Proffessional from './proffessional';
import Education from './education';
import Skills from './skill';
import Template1 from './template1';
import Template2 from './template2';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/useSlice';
import html2canvas from 'html2canvas';
import { selectUser } from '../redux/useSlice';
import Temp3 from './Template3';
import Temp4 from './template4';
import Temp5 from './template5';
function Sidebar() {
  const pink = (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    // const userid = formData.get('userid');
    const firstname = formData.get('firstname');
    const lastname = formData.get('lastname');
    const age = formData.get('age');
    const dob = formData.get('dob');
    const city = formData.get('city');
    
    const data = {  firstname,lastname,age,dob,city };
    // console.log(data);
  
    axios.post("http://localhost:8080/api/v1/auth/personal", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const navigate= useNavigate('');
  const dispatch = useDispatch();
  const { id } = useParams();
  const [selectedComponent, setSelectedComponent] = useState('Home');
  const user = useSelector(selectUser);
  const [currentStep, setCurrentStep] = useState(0);
  // const user = useSelector(selectUser);
  const divRef = useRef(null);
  // const divRef = useRef(null);

  
  const handleButtonClick = (componentName) => {
    // componentName.preventDefault();
    switch (componentName) {
      case 'Next':
        if (selectedComponent === 'Details') {
          setSelectedComponent('Proffessional');
        } else if (selectedComponent === 'Proffessional') {
          setSelectedComponent('Skills');
        } else if (selectedComponent === 'Skills') {
          setSelectedComponent('Education');
        } // Add other cases if needed
        break;
      case 'Previous':
        if (selectedComponent === 'Proffessional') {
          setSelectedComponent('Details');
        } else if (selectedComponent === 'Skills') {
          setSelectedComponent('Proffessional');
        } else if (selectedComponent === 'Education') {
          setSelectedComponent('Skills');
        } // Add other cases if needed
        break;
      default:
        setSelectedComponent(componentName);
        break;
    }
  };
  
  
  // const handleButtonClick = (componentName) => {
  //   // If Next button is clicked, move to the next step
  //   if (componentName === 'Next') {
  //     setCurrentStep((prevStep) => prevStep + 1);
  //   } else {
  //     setSelectedComponent(componentName);
  //   }
  // };
   let componentToRender1 = null;
   const[firstname,setFirstname]=useState('');
  const[lastname,setLastname]=useState('');
  const[age,setAge]=useState('');
  const[dob,setDob]=useState('');
  const[city,setCity]=useState('');
  const[pincode,setPincode]=useState('');
  const[state,setState]=useState('');
  const[positiontitle,setPosition]=useState('');
  const[startdate1,setStartdate1]=useState('');
  const[enddate1,setEnddate1]=useState('');
  const[startdate,setStartdate]=useState('');
  const[enddate,setEnddate]=useState('');
  const[description1,setDescription1]=useState('');
  const[description,setDescription]=useState('');
  const[exprience,setExperience]=useState('');
  const[school,setSchool]=useState('');
  const[degree,setDegree]=useState('');
  const[skill1,setSkill1]=useState('');
  const[skill2,setSkill2]=useState('');
  const[skill3,setSkill3]=useState('');
  const[skill4,setSkill4]=useState('');
  const submitHandler = (e) => {
    // console.log(formdata.username,formdata.password)
      // pink();
    e.preventDefault(); 
    dispatch(login({
      
      ...user, firstname:firstname,
      lastname:lastname,
      age:age,
      dob:dob,
      phone:city,
       state:state,
       pincode:pincode,
       positiontitle:positiontitle,
       startdate1:startdate1,
       enddate1:enddate1,
       description1:description1,
       startdate:startdate,
       enddate:enddate,
       description:description,
       exprience:exprience,
       school:school,
       degree:degree,
       skill1:skill1,
       skill2:skill2,
       skill3:skill3,
       skill4:skill4,
       
       // city:city,
      }))
      console.log('hello');
    }
    if (id==='1') {
      // componentToRender = <Loginjshey />;
      componentToRender1=<Template1 />}
      if (id==='2') {
        // componentToRender = <Loginjshey />;
        componentToRender1=<Temp3 />}
        if (id==='4') {
          // componentToRender = <Loginjshey />;
          componentToRender1=<Temp5 />}
          const hello=(value)=>{
            navigate(`/pre1/${value}`)
  }
          const renderComponent = () => {
            switch (selectedComponent) {
              case 'Details':
        return(
            <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
            <div><h2>Personal Details</h2></div>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label" onChange>First name</label>
    <input type="text" class="form-control" id="validationDefault01" name="firstname" onChange={(e)=>{setFirstname(e.target.value)}}required/>
    {/* console.log{user.firstname}; */}
  </div>
  <div class="col-md-6  ">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02"  name="lastname" onChange={(e)=>{setLastname(e.target.value)}}required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Age</label>
    <input type="number" class="form-control" id="validationDefault02"   name="age"onChange={(e)=>{setAge(e.target.value)}} required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">DOB</label>
    <input type="date" class="form-control" id="validationDefault02"  name="dob" onChange={(e)=>{setDob(e.target.value)}}required/>
  </div>
  
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03"  name="city"onChange={(e)=>{setCity(e.target.value)}} required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">Phoneno</label>
    <input type="number" class="form-control" id="validationDefault03"onChange={(e)=>{setCity(e.target.value)}} required/>
  </div>
  {/* <div class="col-md-3">
    <label for="validationDefault04" class="form-label">Phoneno</label>
    <select class="form-select" id="validationDefault04" onChange={(e)=>{setState(e.target.value)}}required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div> */}
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Pincode</label>
    <input type="number" class="form-control" id="validationDefault05" onChange={(e)=>{setPincode(e.target.value)}}required/>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler}  >Submit form</button>
      </div>
      <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      </div>  
 
</form>
</div>
        );
      case 'Proffessional':
        return (
            <>
            <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
               <div><h2>Professional Details</h2></div>
           <form class="row g-3">
      <div class="col-md-6">
       <label for="validationDefault01" class="form-label">Position title</label>
       <input type="text" class="form-control" id="validationDefault01" onChange={(e)=>{setPosition(e.target.value)}}required/>
      </div>
      <div class="col-md-6  ">
       <label for="validationDefault02" class="form-label">Experience</label>
       <input type="text" class="form-control" id="validationDefault02"onChange={(e)=>{setExperience(e.target.value)}} required/>
      </div>
      <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Start date</label>
       <input type="date" class="form-control" id="validationDefault02" onChange={(e)=>{setStartdate1(e.target.value)}} required/>
      </div>
      <div class="col-md-6">
       <label for="validationDefault02" class="form-label">End date</label>
       <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setEnddate1(e.target.value)}}required/>
      </div>
      <div>
        <h5>Description</h5>
      </div>
      <div class='col-md-6'>
        <textarea class='form-control' onChange={(e)=>{setDescription1(e.target.value)}}></textarea>
      
      </div>
      
      
      <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler}  >Submit form</button>
      </div>
      <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Previous')}
        style={{ marginTop: '20px' ,marginLeft:'90px'}}
      >
        Edit Previous details
      </button>
      </div>
      </form>
      </div>
           </>
        );
      case 'Skills':
        return (
            <>
            <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
               <div><h2>Skills</h2></div>
           <form class="row g-3">
     <div class="col-md-6">
       <label for="validationDefault01" class="form-label">Skill-1</label>
       <input type="text" class="form-control" id="validationDefault01" onChange={(e)=>{setSkill1(e.target.value)}}required/>
     </div>
     <div class="col-md-6  ">
       <label for="validationDefault02" class="form-label">Skill-2</label>
       <input type="text" class="form-control" id="validationDefault02"onChange={(e)=>{setSkill2(e.target.value)}} required/>
     </div>
     <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Skill-3</label>
       <input type="text" class="form-control" id="validationDefault02"  onChange={(e)=>{setSkill3(e.target.value)}}required/>
     </div>
     <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Skill-4</label>
       <input type="text" class="form-control" id="validationDefault02"  onChange={(e)=>{setSkill4(e.target.value)}}required/>
     </div>
     <div>
        <h5>Description</h5>
     </div>
     <div class='col-md-6'>
        <textarea class='form-control'></textarea>
    
     </div>
     
     
     <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler} >Submit form</button>
     </div>
     <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Previous')}
        style={{ marginTop: '20px' ,marginLeft:'90px'}}
      >
        Edit Previous details
      </button>
      </div>
    </form>
    </div>
           </>
        );
      case 'Education':
        return(
            <>
        <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
           <div><h2>Education Details</h2></div>
       <form class="row g-3">
 <div class="col-md-6">
   <label for="validationDefault01" class="form-label">School</label>
   <input type="text" class="form-control" id="validationDefault01"  onChange={(e)=>{setSchool(e.target.value)}}required/>
 </div>
 <div class="col-md-6  ">
   <label for="validationDefault02" class="form-label">Degree</label>
   <input type="text" class="form-control" id="validationDefault02" onChange={(e)=>{setDegree(e.target.value)}} required/>
 </div>
 <div class="col-md-6">
   <label for="validationDefault02" class="form-label">Start date</label>
   <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setStartdate(e.target.value)}} required/>
 </div>
 <div class="col-md-6">
   <label for="validationDefault02" class="form-label">End date</label>
   <input type="date" class="form-control" id="validationDefault02"  onChange={(e)=>{setEnddate(e.target.value)}} required/>
 </div>
 <div>
    <h5>Description</h5>
 </div>
 <div class='col-md-6'>
    <textarea class='form-control'  onChange={(e)=>{setDescription(e.target.value)}} ></textarea>

 </div>
 
 
 <div class="col-12">
   <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit" onClick={submitHandler} >Submit form</button>
 </div>
 <div class="col-12">
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Next')}
        style={{ marginTop: '20px' }}
      >
        Next
      </button>
      <button
        className="btn btn-primary"
        onClick={() => handleButtonClick('Previous')}
        style={{ marginTop: '20px' ,marginLeft:'90px'}}
      >
        Edit Previous details
      </button>
      </div>
</form>
</div>
       </>
        );
      case 'Home':
    //   default:
    //     return <Home />;
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='main'>
        <div className='tem1'>
          <div>
            <ul className='nav flex-column'>
              <li className='navitems'>
                <Link
                  onClick={() => handleButtonClick('Details')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Personal details
                </Link>
              </li>
              <li className='navitems'>
                <Link
                  onClick={() => handleButtonClick('Proffessional')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Professional details
                </Link>
              </li>
              <li className='navitems'>
                <Link
                  onClick={() => handleButtonClick('Skills')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Skills
                </Link>
              </li>
              <li className='navitems'>
                <Link
                  onClick={() => handleButtonClick('Education')}
                  className='navlink'
                  style={{ color: 'black' }}
                >
                  Educational details
                </Link>
              </li>
              {/* <li className='navitems'>
                <Link className='navlink' style={{ color: 'black' }}>
                  Projects
                </Link>
              </li> */}
            </ul>

            {/* <button
              type='submit'
              className='btn btn-primary w-50'
              onClick={downloadAsPDF}
              style={{
                marginTop: '50px',
                width: '1px',
                justifyContent: 'center',
                marginLeft: '60px',
                marginTop: '80px',
              }}
            >
              SUBMIT
            </button> */}
            <button
              type='submit'
              className='btn btn-primary w-50'
              onClick={()=>hello(id)}
              style={{
                marginTop: '50px',
                width: '1px',
                justifyContent: 'center',
                marginLeft: '60px',
                marginTop: '80px',
              }}
            >
              PREVIEW
            </button>
              
          </div>
          
        </div>
        <div className='tem2' id='dis'>
          <div style={{ padding: '70px' }}>{renderComponent()}</div>
        </div>
        <div className='tem3' ref={divRef}>
          {/* <h1>Hello</h1> */}
            {componentToRender1 }
            </div>
      </div>
    </>
  );
}

export default Sidebar;
