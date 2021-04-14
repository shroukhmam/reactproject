import React ,{Component} from "react"

export default class Contact extends Component{

    render(){
        return(
            <>
           <div className="contact" id="contact">
               <div className="overlay"></div>
               <div className="container">
                     <div className="col-md-8 offset-md-2 ">
                          <h2 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">Contact<span> with us</span></h2> 
                          <span className="line"></span>
                          <p className="heading-text  wow fadeInUp " data-wow-duration="1s" data-wow-delay=".2s">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p> 
                     </div>
                </div>      
                     <div className="col-md-8 offset-md-2 ">
                          <div className="row">
                              <div className="col-md-6 information">
                                  <p className="text-wrap"><i className="fa fa-phone"></i>+58(667) 543 54 55</p>
                                  <div className="address">
                                     <p> 359 CENTRAL MIRA STREET<br/>VATUTINA 79 / 99 UKRAINE</p>
                                  </div>
                                  <div className="email">
                                      <p><i className="fa fa-envelope"></i><a href="#">Support@DOMIAN.COM</a><br/><i className="fa fa-envelope"></i><a href="#">Support@DOMIAN.COM</a></p>
                                  </div>
                                  <ul>
                                      <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                  </ul>
                                  
                              </div>
                              <div className="col-md-6">
                                  <form>
                                      <div className="row">
                                      <div className="col-md-6">
                                          <input type="text" required="" name="Name" placeholder=" Your name" class="form-control"></input>
                                      </div>
                                      <div className="col-md-6">
                                          <input type="email" name="email" placeholder="Your email" class="form-control"/>
                                      </div>
                                      <div className="col-md-12">
                                          <textarea rows="9" required="" name="Message" placeholder="Your message" class="form-control"></textarea>
                                      </div>
                                      <div className="col-md-4 offset-md-8">
                                            <input type="submit" value="Send" class="btn btn-form"/>
                                     </div>
                                       
                                      </div>
                                     
                                  </form>
                                  
                                  
                                  
                              </div>
                          </div>      
                    </div>
                    
                       
                   
            </div> 

           </>
           
           
            
          
        )
    }
}