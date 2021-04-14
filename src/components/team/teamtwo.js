import React ,{Component} from "react"

export default class Teamtwo extends Component{

    render(){
        return(
            <>
           <div className="teamtwo">
               <div className="overlay"></div>
               <div className="container">
                     <div className="col-md-8 offset-md-2 ">
                          <h2 className=" wow fadeInDown " data-wow-duration="1s" data-wow-delay=".2s">Customers<span> love us</span></h2> 
                          <span className="line"></span>
                          <p className="heading-text  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p> 
                     </div>

                     <div className="slick-team">
                         <div className="team1 team-item">
                             <div className="circle-image"></div>
                             <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                             <span>Albin Erland</span>
                             <p className="desc-job">
                                 programmer, company name
                             </p>
                         </div>
                         <div className="team2 team-item">
                             <div className="circle-image"></div>
                             <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                             <span>Alex Rezvova</span>
                             <p className="desc-job">
                                 programmer, company name
                             </p>
                         </div>
                         <div className="team3 team-item">
                             <div className="circle-image"></div>
                             <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                             <span>Jacob Kia</span>
                             <p className="desc-job">
                                 creative director, company name
                             </p>
                         </div>
                         <div className="team4 team-item">
                             <div className="circle-image"></div>
                             <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum</p>
                             <span>Albin Erland</span>
                             <p className="desc-job">
                                 programmer, company name
                             </p>
                         </div>
                     </div>
                     
               </div>
           </div>
           <div className="slick-theme">
               <div>
                   <img src="image/partners-3.png"/>
               </div>
               <div>
                   <img src="image/partners-3.png"/>
               </div>
               <div>
                   <img src="image/partners-3.png"/>
               </div>
               <div>
                   <img src="image/partners-3.png"/>
               </div>
               <div>
                   <img src="image/partners-3.png"/>
               </div>
            </div> 
           </>
           
           
            
          
        )
    }
}