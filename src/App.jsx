
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.css"

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Hero, Navbar } from "./components";
import CustomCursor from "./CustomCursor";




const App = () => {



 
  return (
   <BrowserRouter>
    {/* <CustomCursor /> */}
    
   
        <Hero/>
        
        {/* <About/> */}
        {/* <Contact/> */}


     
   </BrowserRouter>
  )
}

export default App
