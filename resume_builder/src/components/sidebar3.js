import React, { useState } from 'react';
import '../style/sidebar.css';
import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Details from './Details';
import Home from './home';
import Proffessional from './proffessional';
import Education from './education';
import Skills from './skill';
import Template1 from './template1';
import Template2 from './template2';

function Sidebar3() {
  const { id } = useParams();
  const [selectedComponent, setSelectedComponent] = useState('Home');

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };
  let componentToRender1 = null;
  if (id==='1') {
    // componentToRender = <Loginjshey />;
   componentToRender1=<Template1 />}
  if (id==='2') {
    // componentToRender = <Loginjshey />;
   componentToRender1=<Template2 />}
  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Details':
        return(
            <div style={{width: '550px',paddingLeft: '40px',padding:'20px' }}>
            <div><h2>Personal Details</h2></div>
        <form class="row g-3">
  <div class="col-md-6">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" required/>
  </div>
  <div class="col-md-6  ">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">Age</label>
    <input type="number" class="form-control" id="validationDefault02"  required/>
  </div>
  <div class="col-md-6">
    <label for="validationDefault02" class="form-label">DOB</label>
    <input type="date" class="form-control" id="validationDefault02"  required/>
  </div>
  
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Pincode</label>
    <input type="number" class="form-control" id="validationDefault05" required/>
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
    <button class="btn btn-primary" type="submit">Submit form</button>
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
       <input type="text" class="form-control" id="validationDefault01" required/>
      </div>
      <div class="col-md-6  ">
       <label for="validationDefault02" class="form-label">Experience</label>
       <input type="text" class="form-control" id="validationDefault02" required/>
      </div>
      <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Start date</label>
       <input type="date" class="form-control" id="validationDefault02"  required/>
      </div>
      <div class="col-md-6">
       <label for="validationDefault02" class="form-label">End date</label>
       <input type="date" class="form-control" id="validationDefault02"  required/>
      </div>
      <div>
        <h5>Description</h5>
      </div>
      <div class='col-md-6'>
        <textarea class='form-control'></textarea>
      
      </div>
      
      
      <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit">Submit form</button>
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
       <input type="text" class="form-control" id="validationDefault01" required/>
     </div>
     <div class="col-md-6  ">
       <label for="validationDefault02" class="form-label">Skill-2</label>
       <input type="text" class="form-control" id="validationDefault02" required/>
     </div>
     <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Skill-3</label>
       <input type="text" class="form-control" id="validationDefault02"  required/>
     </div>
     <div class="col-md-6">
       <label for="validationDefault02" class="form-label">Skill-4</label>
       <input type="text" class="form-control" id="validationDefault02"  required/>
     </div>
     <div>
        <h5>Description</h5>
     </div>
     <div class='col-md-6'>
        <textarea class='form-control'></textarea>
    
     </div>
     
     
     <div class="col-12">
       <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit">Submit form</button>
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
   <input type="text" class="form-control" id="validationDefault01" required/>
 </div>
 <div class="col-md-6  ">
   <label for="validationDefault02" class="form-label">Degree</label>
   <input type="text" class="form-control" id="validationDefault02" required/>
 </div>
 <div class="col-md-6">
   <label for="validationDefault02" class="form-label">Start date</label>
   <input type="date" class="form-control" id="validationDefault02"  required/>
 </div>
 <div class="col-md-6">
   <label for="validationDefault02" class="form-label">End date</label>
   <input type="date" class="form-control" id="validationDefault02"  required/>
 </div>
 <div>
    <h5>Description</h5>
 </div>
 <div class='col-md-6'>
    <textarea class='form-control'></textarea>

 </div>
 
 {/* <div class="col-md-6">
   <label for="validationDefault03" class="form-label">City</label>
   <input type="text" class="form-control" id="validationDefault03" required/>
 </div>
 <div class="col-md-3">
   <label for="validationDefault04" class="form-label">State</label>
   <select class="form-select" id="validationDefault04" required>
     <option selected disabled value="">Choose...</option>
     <option>...</option>
   </select>
 </div>
 <div class="col-md-3">
   <label for="validationDefault05" class="form-label">Pincode</label>
   <input type="number" class="form-control" id="validationDefault05" required/>
 </div>
 <div class="col-12">
   <div class="form-check">
     <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
     <label class="form-check-label" for="invalidCheck2">
       Agree to terms and conditions
     </label>
   </div> */}
 {/* </div> */}
 <div class="col-12">
   <button class="btn btn-primary" style={{marginTop:'60px'}}type="submit">Submit form</button>
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
              <li className='navitems'>
                <Link className='navlink' style={{ color: 'black' }}>
                  Projects
                </Link>
              </li>
            </ul>

            <button
              type='submit'
              className='btn btn-primary w-50'
              style={{
                marginTop: '50px',
                width: '1px',
                justifyContent: 'center',
                marginLeft: '60px',
                marginTop: '80px',
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
        <div className='tem2' id='dis'>
          <div style={{ padding: '70px' }}>{renderComponent()}</div>
        </div>
        <div className='tem3'>
            {componentToRender1 }
            </div>
      </div>
    </>
  );
}

export default Sidebar3;
