import React, { Component } from 'react'
function Education() {
    return ( 

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
}

export default Education;