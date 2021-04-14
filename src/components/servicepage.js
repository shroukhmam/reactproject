import React ,{Component} from "react";
import Navbar from "./navbar/navbar";
import Carousel from "./carousel/carousel";
import Servicepageone from "./services/servicepageone";
import Servicepagetwo from "./servicepagetwo";
import Servicethree from "./services/servicethree";
import Footer from "./footer/footer";



export default class Servicepage extends Component{

    render(){
        return(
         <section className="servicepage">
                
             <Navbar/>
             <Carousel/>
             <Servicepageone/>
             <Servicethree/>
             <Servicepagetwo/>
             <Footer/>
        
            
        </section>
          
        )
    }
}

