import React ,{Component} from "react"

export default class Footer extends Component{

    render(){
        return(
            <>
           <div className="footer">
               <div className="container">
                   <div className="row">
                       <div className="col-md-3 mb">
                            <div className="logo">
                                <img src="image/logo.png"/>
                            </div>
                            <p>We are a creative agency with a passion for design & developing beautiful creations.</p>
                            <ul className="icon-list">
                                     <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                      <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                      <li><a href="#"><i className="fa fa-skype"></i></a></li>
                                      <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                       </div>
                       <div className="col-md-3 mb">
                             <h5 className="heading-text">ADDITIONAL LINKS</h5>
                             <ul className="footer-list">
                                 <li>For Freelancer</li>
                                 <li>For Photographs</li>
                                 <li>Contact</li>
                                 <li>FAQ</li>
                                 <li>404 page</li>
                             </ul>
                        </div>
                        <div className="col-md-3 mb">
                        <h5 className="heading-text">Pages</h5>
                             <ul className="footer-list">
                                 <li>About page</li>
                                 <li>Blog page</li>
                                 <li>Price page</li>
                                 <li>Portfolio page</li>
                                 <li>Portfolio single</li>
                             </ul>
                         </div>
                        <div className="col-md-3 mb">
                             <h5 className="heading-text">Adress</h5>
                             <p>
                               1234 SOME AVENUE, <br/>
                               NEW YORK, NY 56789<br/>
                               INFO@YOUWEBSITE.COM<br/>
                               (123) 456-7890<br/>
                               (123) 456-7890<br/>
                             </p>
                        </div>
                    </div>    
               </div>   
            </div> 
            <div className="copyright">
                      © 2021 All Rights Reserved. - Created by <span>ShroukHmam</span>
            </div>
           </>
           
           
            
          
        )
    }
}