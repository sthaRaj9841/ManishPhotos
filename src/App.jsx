import React from 'react'
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import LocomotiveScroll from "locomotive-scroll";
const App = () => {
 const locomotiveScroll = new LocomotiveScroll();
   return (
     <div>
       <Header />
       <Outlet />
       <Footer />
     </div>
   );
}

export default App
