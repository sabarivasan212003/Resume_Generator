import React,{useRef}from 'react';
import { useParams } from 'react-router-dom';
import Template1 from './template1';
import Temp3 from './Template3';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import '../style/prevew1.css'

import Navbar from './Navbar';
function Preview1() {
  const divRef = useRef(null);
  const navigate=useNavigate('');
  // const history=useHistory('');
  
  const downloadAsPDF = () => {
    const pdf = new jsPDF('p', 'mm', 'a4');

    html2canvas(divRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('component_content.pdf');
    });
  };
  const hey=(e)=>{
      //  navigate('/')
      e.preventDefault();
     window.history.back();
  }
  const hello=()=>{
        navigate('/create')
     
  }

  const { id1 } = useParams();
  let componentToRender1 = null;

  if (id1 === '1') {
    componentToRender1 = <Template1 />;
  } else if (id1 === '2') {
    componentToRender1 = <Temp3 />;
  }

  return (
    <>
    <Navbar />
    <div className='pre' >
      <div className='pre1'ref={divRef}>
      {componentToRender1}
      <div> <button
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
              DOWNLOAD
            </button></div>
      </div>
      <div className='pre2'>
         <img src='https://www.theladders.com/wp-content/uploads/resume-190916.jpg' style={{width:'60%',marginLeft:'150px',marginTop:'150px'}}
         style={{
          width: '60%',
          marginLeft: '150px',
          marginTop: '150px',
          transition: 'transform 0.3s ease',
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        alt="Resume" onClick={hello}></img>
      </div>
    </div>
      {/* <div className='tem3' ref={divRef}>
        {componentToRender1}
        <div>
          
       
        <button
              type='submit'
               onClick={hey}
              className='btn btn-primary w-40 mt-2'
              style={{marginLeft:'30%'}}
            >
              BACK
            </button>
     <button
              type='submit'
               onClick={hey1}
              className='btn btn-primary w-40 mt-2'
              style={{marginLeft:'30%'}}
            >
              Change template
            </button>
        </div>
        */}
      {/* </div> */}
    </>
  );
}

export default Preview1;
