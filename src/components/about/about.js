import React ,{Component} from "react"

export default class About extends Component{

    render(){
        return(
            
             <div className="container about" id="about">
                 <div className="col-md-8 offset-md-2">
                     <h2 className="about-title   wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">About <span>US</span></h2>
                     <p className="about-desc"><span>We create </span>awesome stuff</p>
                     <p className="about-text  wow fadeInUp " data-wow-duration="1s" data-wow-delay=".2s">
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                     </p>   
                 </div>
                
                 <div className="row ">
                     <div className="col-md-4">
                       <div className="d-flex">
                          <div><img className="l"src="image/bullseye-solid.svg"width="50px" height="50px"/></div> 
                          <div className="descofone">
                              <h5>web <span>development</span></h5>
                              <p>Praesent sodales, quam vitae gravida interdum, ex mi bibendum enim, sit amet tristique mi quam vel odio. Donec non nunc condimentum.drerit elit sed, condimentum magna. Suspendisse imperdiet purus vel drerit elit sed, condimentum magna. Suspendisse imperdiet purus vel</p>
                          </div>
                       </div>
                       <div className="backimg">
                            <img src="image/bullseye-solid.svg"/>
                        </div>
                     </div>
                     <div className="col-md-4">
                       <div className="d-flex">
                       <img className="l"src="image/life-ring-regular.svg"width="50px" height="50px"/>
                          <div className="descofone">
                              <h5>context <span>advertising</span></h5>
                              <p>Praesent sodales, quam vitae gravida interdum, ex mi bibendum enim, sit amet tristique mi quam vel odio. Donec non nunc condimentum.drerit elit sed, condimentum magna. Suspendisse imperdiet purus vel drerit elit sed, condimentum magna. Suspendisse imperdiet purus vel</p>
                          </div>
                       </div>
                       <div className="backimg">
                            <img src="image/life-ring-regular.svg"/>
                        </div>
                     </div>
                     <div className="col-md-4">
                       <div className="d-flex">
                       <img className="l"src="image/lightbulb-regular.svg"width="50px" height="50px"/>
                          <div className="descofone">
                              <h5>Internet <span>marketing</span></h5>
                              <p>Praesent sodales, quam vitae gravida interdum, ex mi bibendum enim, sit amet tristique mi quam vel odio. Donec non nunc condimentum.drerit elit sed, condimentum magna. Suspendisse imperdiet purus vel drerit elit sed, condimentum magna. Suspendisse imperdiet purus vel</p>
                          </div>
                       </div>
                       <div className="backimg">
                            <img src="image/lightbulb-regular.svg"/>
                        </div>
                     </div>
                 </div>
             </div>
          
        )
    }
}