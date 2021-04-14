import React ,{Component} from "react";
import Navbar from "./navbar/navbar";
import Carousel from "./carousel/carousel";
import Items from "./items/items";
import About from "./about/about";
import Services from "./services/services";
import Works from "./works/works";
import Skills from "./skills/skills";
import Teams from "./team/teams";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Download from "./downloadTop";
function Homepage() {
  return (
   
       <div>

             <Navbar/>
             <Carousel/>
             <Items/>
             <About/>
             <Services/>
             <Works />
             <Skills />
             <Teams />
             <Contact/>
             <Footer/>
             <Download/>
             
            
       </div>
    
  );
}

export default Homepage;
