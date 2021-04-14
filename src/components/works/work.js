import React ,{Component} from "react"

export default class Work extends Component{

    render(){
        return(
            <>
             <div class="appear">
                   <div className="work-inform">
                       <div className="fa fa-times"></div>
                        <div className="showimage"> </div>
                        <div className="slick-appear show">
                            <div className="photo1"><img src="image/work-1.jpg" width="100%" /></div>
                            <div className="photo2"><img src="image/work-2.jpg" width="100%"/></div>
                            <div className="photo3"><img src="image/work-3.jpg" width="100%" /></div>
                            
                        </div>
                        <div class="youtube">
                        <div className="showvideo">
                              <video controls autoplay width="100%">
                                <source src="image/video1.mp4" type="video/mp4" />
                              </video> 
                            </div>
                        </div>
                       <div className="margin">
                           <div className="project-info">
                              <h2>Project <span class="nameofproject">title</span></h2> 
                              <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                              <hr/>
                           </div>
                             <div class="detail">
                               <h3>Detalis</h3>
                               <span className="line"></span>
                               <ul>
                               <li><b>Client: </b>Templatemonster</li>
                               <li><b>Date: </b>23th, April, 2017</li>
                               <li><b>Live: </b><a href="#">view project </a><i aria-hidden="true" class="fa fa-external-link"></i></li>
                               </ul>
                              
                               <hr/>
                          </div>
                          <a href="#" className="btnproject">see project</a>
                       
                        </div>
                  </div>
           </div>
            <div className="work">
                <div className="overlay"></div>
                <div className="desc col-md-8 offset-md-2">
                    <h2 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">Our some <span>work</span></h2>
                    <p ><span>We create </span>awesome stuff</p>
                    <p className="desc-text wow fadeInUp
                     " data-wow-duration="1s" data-wow-delay=".2s" >Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                </div>
                <ul>
                    <li className="active" data-class="showall">ALL</li>
                    <li data-class="design">DESIGN</li>
                    <li data-class="mobile">MOBILE APP</li>
                    <li data-class="video">VEDIO</li>
                    <li data-class="photography">PHOTOGRAPHY</li>
                </ul>
                <div className=" showall determine">
                    <div className="mouseoverlay display">
                        <i className="fa fa-youtube"></i>
                        <div className="info">
                            <div>
                            <h4>YouTube</h4>
                            <span></span>
                             <p>Claritas est etiam processus dynamicus</p>
                             </div>
                        </div>
                        
                    </div>
                    <div className=" div1 div" data-heading="title" data-text="Image" data-icon="fa fa-image">
                          <div className="image"></div>
                    </div>
                    <div className=" div2 div" data-heading="gallary" data-text="GALLARY IMAGE" data-icon="fa fa-clone">
                         <div className="image"></div>
                    </div>
                    <div className=" div3 div" data-text="YOUTUBE VIDEO" data-heading="videotube" data-icon="fa fa-youtube">
                          <div className="image"></div>
                    </div>
                    <div className=" div4 div" data-text="VIEMO VIDEO"data-heading="videotube"  data-icon="fa fa-play">
                           <div className="image"></div>
                    </div>
                    <div className="div5 div"data-heading="title" data-text="Image" data-icon="fa fa-image" >
                          <div className="image"></div>
                    </div>
                    <div className="div6 div"data-heading="gallary" data-text="GALLARY IMAGE" data-icon="fa fa-clone">
                         <div className="image"></div>
                    </div>
                    <div className=" div7 div" data-heading="videotube" data-text="YOUTUBE VIDEO" data-icon="fa fa-youtube">
                          <div className="image"></div>
                    </div>
                    <div className="div8 div"data-heading="videotube" data-text="VIEMO VIDEO" data-icon="fa fa-play">
                           <div className="image"></div>
                    </div>
                    <div className=" div9 div"data-heading="title" data-text="Image" data-icon="fa fa-image">
                          <div className="image"></div>
                    </div>
                    <div className=" div10 div"data-heading="gallary" data-text="GALLARY IMAGE" data-icon="fa fa-clone">
                         <div className="image"></div>
                    </div>
                    <div className=" div11 div" data-heading="videotube" data-text="YOUTUBE VIDEO" data-icon="fa fa-youtube">
                          <div className="image"></div>
                    </div>
                    <div className=" div12 div"data-heading="videotube" data-text="VIEMO VIDEO" data-icon="fa fa-play">
                           <div className="image"></div>
                    </div>
                    

                </div>
            </div>
          </>
        )
    }
}