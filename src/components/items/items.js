import React ,{Component} from "react"

export default class Items extends Component{

    render(){
        return(
            
             <div className="container-fluid items" id="items">
                 <div className="row">
                     <div className="col-md-3">
                         <div>
                             <i class="fa fa-mobile"></i>
                             <h5>Fully responsive </h5>
                             <p>Kanter is fully responsive, you can view it also in the mobile/tablets devices and it looks very in more devices.</p>
                        </div>
                     </div>
                     <div className="col-md-3 itembg">
                         <div>
                             <i class="fa fa-heart"></i>
                             <h5>With love </h5>
                             <p>Kanter developed with love and attention to detail, each block, and each button did not remain without attention</p>
                        </div>
                     </div>
                     <div className="col-md-3">
                         <div>
                             <i class="fa fa-tablet"></i>
                             <h5>One&Multi page</h5>
                             <p>Kanter developed with love and attention to detail, each block, and each button did not remain without attention</p>
                        </div>
                     </div>
                     <div className="col-md-3 itembg">
                         <div>
                             <i class="fa fa-desktop"></i>
                             <h5>Retina Ready</h5>
                             <p>Kanter is retina ready, you can view it in the large displays and it will be clear display on large displays.</p>
                        </div>
                     </div>
                 </div>
                 

                 
                
             </div>
          
        )
    }
}