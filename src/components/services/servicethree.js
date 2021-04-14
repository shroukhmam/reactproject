import React ,{Component} from "react"

export default class ServiceThree extends Component{

    render(){
        return(
            <section className="servicethree">
                <div className="overlaythree"></div>
             <div className="container containe">
        
                 
                 <div className="row ">
                     <div className="col-md-3 workprogress">
                         <h3 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">Work<span> progress</span></h3>
                         <span class="line"></span>
                         <p className=" wow fadeInUp " data-wow-duration="1s" data-wow-delay=".2s">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
                    </div>
                     <div className="col-md-3 col-sm-4 icons">
                         <p>
                           <i class="fa fa-comment "></i>
                         </p>
                         <p>1. Discuss</p>
                     </div>
                     <div className="col-md-3 col-sm-4 icons" >
                         <p><i class="fa fa-tv"></i></p>
                         <p>2. Make</p>
                    </div>
                     <div className="col-md-3 col-sm-4 icons">
                         <p>
                         <i class="fa fa-heart"></i>
                         </p>
                         <p>3. Product</p>
                     </div>
                 </div>
             </div>
             </section>
          
        )
    }
}