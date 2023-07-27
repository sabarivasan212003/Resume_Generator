import React, { Component } from 'react'
function Skills() {
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
}

export default Skills;