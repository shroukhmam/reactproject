import React ,{Component} from "react"

export default class Carousel extends Component{

    render(){
        return(
            <div className="slide">
                <div class="videojs">
                            <div className="fa fa-times icon"></div>
                            <div className="postvideo">
                              <video controls autoplay width="100%">
                                <source src="image/video1.mp4" type="video/mp4" />
                              </video> 
                            </div>
                            
                </div>
                
                 <div className="slide-arrow prev">
                    <i class="fa fa-angle-left"></i>
                </div>
                <div className="slide-arrow next">
                    <i class="fa fa-angle-right"></i>
                </div>
            <div className="slide-point">
                <span data-class="1" className="active point1"></span>
                <span data-class="2" className="point2"></span>
                <span data-class="3" className="point3"></span>
                <span className="point4" data-class="4"></span>
            </div>
            <div className="overlay"></div>
            <div className="owl-carousel">
                <div className="digitalAgency slide-1 slide ">
                    <div>
                        <div className="title wow fadeInDown" data-wow-duration="1s" data-wow-delay=".2s">
                            KER<span>NEL</span>
                        </div>
                        <div className="holder">
                        </div>
                        <div className="slide-title">WE ARE <span>DIGITAL AGENCY</span></div>
                        <div className="slide-text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                        </div>
                        <div className="slide-button">
                            <a href="#" className="active">GET STARTED</a>
                            <a href="#">CONTACT US</a>
                        </div>
                    </div>
                </div>
                <div className="videoAgency slide-2 slide hide">
                    <div>
                        <div className="title">
                             <span className="fa fa-play"></span>
                        </div>
                        <div className="holder">
                        </div>
                        <div className="slide-title">WE ARE <span>DIGITAL AGENCY</span></div>
                        <div className="slide-text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                        </div>
                        <div className="slide-button">
                            <a href="#" className="active">GET STARTED</a>
                            <a href="#">CONTACT US</a>
                        </div>
                        
                        
                   
                    </div>
                </div>
                <div className="innovation slide-3 slide hide">
                    <div>
                        <div className="title wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">
                            INNOVATION
                        </div>
                        <div className="holder">
                        </div>
                        <div className="slide-text wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                              Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum
                        </div>
                        
                    </div>
                </div>

                <div className="kernal_info slide-4 slide hide">
                    <div>
                        <div>
                            <img src="./image/construction.png"/>
                        </div>
                        <div className="title wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">KERNAL AGENCY</div>
                        <div className="slide-button">
                            <a href="#">WHO WE ARE</a>
                        </div>
                    </div>
                </div>

            </div>
            <a href="#items" class="smooth-scroll btn-down"><i aria-hidden="true" class="fa fa-angle-down"></i></a>
            </div>
    
          
        )
    }
}