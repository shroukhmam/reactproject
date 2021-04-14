import React ,{Component} from "react"

export default class Download extends Component{

   render(){
        return(
            <>
           <div className="download">
                    <div class="spinner">
                          <div class="double-bounce1"></div>
                          <div class="double-bounce2"></div>
                    </div>
           </div> 
            <div class="up hide"> 
                  <i class="fa fa-angle-up"></i>
            </div>
           </>
            
          
        )
    }
}