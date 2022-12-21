import './App.css';
import Contactus from './Components/Contactus'
import Home from './Components/Home'
import Homebody from './Components/Homebody'
import Footer from './Components/Footer'
import Sellcommercialvehicle from './Components/Sellcommercialvehicle'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
  
    <BrowserRouter>
        <Home/>
    
        <Routes>  
          {/* routing is done to each element where we want to open thw new page after clicking the mouse on the element */}
          {/* now input state and add to cart is passed to each element where we want to use the filteration properties and addto cart properties */}
         
          <Route path="/" element={<Homebody />} />
          <Route path="/Contactus" element={<Contactus />} />
          <Route path="/Sellcommercialvehicle" element={<Sellcommercialvehicle />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>

  );
}

export default App;

