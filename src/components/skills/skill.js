import React ,{Component} from "react"

export default class Skill extends Component{

    render(){
        return(
           <div className="skill">
               <div className="overlay"></div>
                  <div className="skill-desc col-lg-8 offset-lg-2">
                      <h2 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">Our<span>skills</span></h2>
                      <span className="line"></span>
                      <p className=" wow fadeInUp " data-wow-duration="1s" data-wow-delay=".2s">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                  </div>
                  <div className="col-lg-8 offset-lg-2">
                  <div className="row">
                      <div className="col-md-8">
                          <div className="langs">
                              <a href="#" className="active">CSS&HTML</a>
                              <a href="#">JAVASCRIPT</a>
                              <a href="#">WORDPRESS</a>
                              <a href="#">ECOMMERCE</a>
                              <a href="#">OPENCART</a>
                          </div>
                          <div className="langinfo zindex">
                              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                              <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                          </div>
                      </div>
                      <div className="col-md-4">
                             <div className="progres">
                                 <div className="color1 gray">Jquery</div>
                                 <div className="color2 black" data-precent="40"></div>
                                 <div className="color3">40%</div>
                             </div>
                             <div className="progres">
                                 <div className="color1 black">Css&Html</div>
                                 <div className="color2 gray" data-precent="80"></div>
                                 <div className="color3">80%</div>
                             </div>
                             <div className="progres">
                                 <div className="color1 gray">Wordpress</div>
                                 <div className="color2 black" data-precent="90"></div>
                                 <div className="color3">90%</div>
                             </div>
                             <div className="progres">
                                 <div className="color1 black">Opencart</div>
                                 <div className="color2 gray" data-precent="60"></div>
                                 <div className="color3">60%</div>
                             </div>
                             <div className="progres">
                                 <div className="color1 gray">Php</div>
                                 <div className="color2 black" data-precent="87"></div>
                                 <div className="color3">87%</div>
                             </div>
                      </div>
                  </div>
                  </div>
           </div> 
           
           
            
          
        )
    }
}