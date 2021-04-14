import React ,{Component} from "react";
import {Link} from "react-router-dom"


export default class Service extends Component{

    render(){
        return(
            <section className="service">
                <div className="overlay"></div>
             <div className="container services">
                
                <div className="col-md-8 offset-md-2">
                     <h2 className="service-title wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">OUR<span>SERVICE</span></h2>
                     <span className="line"></span>
                     <p className="service-text wow fadeInUp " data-wow-duration="1s" data-wow-delay=".2s">
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                     </p>   
                 </div>

                 <div className="responsive">
                     <div className="brand brand1">
                         <img src="image/chart-pie-solid.svg" width="50px" height="50px"/>
                         <h3>branding</h3>
                         <p>Claritas est etiam processus dynamicus, qui sequitur</p>
                     </div>
                     <div className="brand">
                         <img src="image/tint-solid.svg" width="50px" height="50px"/>
                         <h3>Web desine</h3>
                         <p>Claritas est etiam processus dynamicus, qui sequitur</p>
                     </div>
                     <div className="brand">
                         <img src="image/clock-regular.svg" width="50px" height="50px"/>
                         <h3>Graphic design</h3>
                         <p>Claritas est etiam processus dynamicus, qui sequitur</p>
                     </div>
                     <div className="brand">
                         <img src="image/map-regular.svg" width="50px" height="50px"/>
                         <h3>Develpment</h3>
                         <p>Claritas est etiam processus dynamicus, qui sequitur</p>
                     </div>
                 </div>
                 
                 <div className="row ">
                     <div className="col-md-6">
                         <h3>Never fall in love with an idea. They’re whores. If the the job, there’s always another.</h3>
                         <span className="line"></span>
                         <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                         <p>Tab 1 Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris </p>
                     </div>
                     <div className="col-md-6">
                         <ul className="list-service">
                             <li>Rich media banners</li>
                             <li>Audio production</li>
                             <li>Photography</li>
                             <li>Design</li>
                             <li>Content creation</li>
                             <li>Content audit</li>
                             <li>Project management</li>
                             <li>Technical requirements</li>
                             <li>Testing</li>
                             <li>and more...</li>
                         </ul>
                     </div>
                 </div>
             </div>
             <a href="#" className="link">View all services&gt;</a>
          
             </section>
          
        )
    }
}