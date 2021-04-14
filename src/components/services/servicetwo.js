import React ,{Component} from "react"

export default class Servicetwo extends Component{

    render(){
        return(
            <section className="servicet">
                <div className="overlay"></div>
                <div className="container servicet-desc">
                <div className="col-md-8 offset-md-2">
                     <h2 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">How we work</h2>
                     <p className="heading-title"><span>We create </span>awesome stuff</p>
                     <p className="service-text  wow fadeInUp " data-wow-duration="1s" data-wow-delay=".2s">
                        Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                     </p>   
                
                </div>
                <div className="row">
                    <div className="col-lg-3 col-sm-6">

                         <div className="circle after">
                            <div className="big-circle">
                                <div className="icon">
                                <i class="fa fa-eye"></i>
                                </div>
                            </div>
                         </div>
                        <div>
                            <h5>Awesome</h5>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        
                    </div>
                     <div className="col-lg-3 col-sm-6">

                         <div className="circle after ">
                            <div className="big-circle">
                                <div className="icon">
                                <i class="fa fa-thumbs-up"></i>
                                </div>
                            </div>
                         </div>
                        <div>
                            <h5>Innovative</h5>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 col-sm-6">

                         <div className="circle after ">
                            <div className="big-circle">
                               <div className="icon">
                                <i class="fa fa-heart"></i>
                                </div>
                            </div>
                         </div>
                        <div>
                            <h5>Creative</h5>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        
                    </div>
                    <div className="col-lg-3 col-sm-6">

                         <div className="circle">
                             <div className="big-circle">
                                <div className="icon">
                                <i class="fa fa-paragraph"></i>
                                </div>
                            </div>
                         </div>
                        <div>
                            <h5>EXPERIMENTAL</h5>
                            <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                        </div>
                        
                    </div>
                
                </div> 
                </div>        
             </section>
          
        )
    }
}