import logo from './logo.svg';
import './App.css';
import { Routes,Route, Link, BrowserRouter as Router } from 'react-router-dom'  
// import Login from './components/Login'
import SignUp from './components/SignUp';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Home from './components/home.js';
import Create from './components/create';
import Loginjshey from './components/Details';
// import ParentComponent from './components/parentcomponent';
import Proffessional from './components/proffessional';
// import RegistrationForm from './components/registration';
// import Preview from './components/preview';
import Education from './components/education';
import Template1 from './components/template1';
import RegistrationForm from './components/preview';
import Check from './components/check';
import Temp1 from './components/Templ';
import Sidebar3 from './components/sidebar3';
import temp3 from './components/Template3';
import Temp3 from './components/Template3';
import ReactTemplate from './components/education1';
import Temp4 from './components/template4';
import Temp5 from './components/template5';
import Contact from './components/contact';
import Footer from './components/footer';
import Home1 from './components/home1';
import Preview1 from './components/preview1';
// import Temp4 from './components/template4';
// import Check from './components/check';
// import Home from './components/home';
function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/sign" element={<SignUp />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/side/:id" element={<Sidebar />} />
          <Route path="/home" element={<Home />} />
           <Route path="/create" element={<Create />} /> 
           <Route path="/details" element={<Loginjshey />} /> 
             {/* <Route path="/tem" element={<Template1 />} />   */}
           <Route path="/pro" element={<Proffessional />} /> 
           {/* <Route path="/Register" element={<RegistrationForm />} />  */}
           {/* <Route path="/pre" element={<Preview />} />  */}
           <Route path="/edu" element={<Education />} /> 
           <Route path="/reg" element={<RegistrationForm />} /> 
           <Route path="/check" element={<Check />} /> 
           <Route path="/temp" element={<Template1 />} /> 
            <Route path="/s3/:id" element={<Sidebar3 />} />  
            <Route path="/t3" element={<Temp3 />} />  
            <Route path="/Edu1" element={<ReactTemplate />} />  
            <Route path="/t5" element={<Temp5 />} />  
             <Route path="/con" element={<Contact />} />   
             <Route path="/fot" element={<Footer />} />   
             <Route path="/" element={<Home1 />} />   
             <Route path="/pre1/:id1" element={<Preview1 />} />   
        </Routes>
      </Router>
    </>
  );
}

export default App;
