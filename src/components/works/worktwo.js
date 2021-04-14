import React ,{Component} from "react"

export default class Worktwo extends Component{

    render(){
        return(
            
            <div className="creative">
                
                <div className="contain">
                    <div className="overlay"></div>
                    <div className="col-md-8 offset-md-2 zindex">
                        <h2>Like our creative <span>works ?</span></h2>
                        <a href="#" className="start">START PROJECT</a>
                    </div>
                </div>
                <div className="numbers">
                    <div className="overlay"></div>
                  <div className="container ">
                    <div className="col-md-8 offset-md-2 zindex">
                        <h2 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">We are in <span>numbers</span></h2>
                        <span className="line"></span>
                        <p className="mb  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                    </div>
                  </div>
                  <div className="row">
                      <div className="col-md-3 zindex">
                          <div className="gray num count1">0</div>
                          <div className="black name">Completed projects</div>
                      </div>
                      <div className="col-md-3 zindex">
                          <div className="black num count2">0</div>
                          <div className="gray name">Happy clients</div>
                      </div>
                      <div className="col-md-3 zindex">
                          <div className="gray num count3">0</div>
                          <div className="black name">Winning awards</div>
                      </div>
                      <div className="col-md-3 zindex">
                          <div className="black num count4">0</div>
                          <div className="gray name">YEARs</div>
                      </div>
                  </div>
                </div>
                
              
            </div>
          
        )
    }
}