import React ,{Component} from "react"

export default class Navbar extends Component{

    render(){
        return(
            
     <nav className="navbar navbar-expand-lg fixed-top home">
                 <a className="navbar-brand" href="#">KANTER</a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fa fa-bars"></span>
                        <span className="navbar-toggler-awesome fa fa-times hide"></span>
                  </button>

       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
                 <li className="nav-item active li" data-class=".home">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item" data-class=".about">
                    <a className="nav-link" href="#about">ABOUT</a>
               </li>
               <li className="nav-item" data-class=".services">
                    <a className="nav-link" href="#services">SERVICES</a>
               </li>
               <li className="nav-item" data-class=".works">
                    <a className="nav-link" href="#works">OURWORKS</a>
               </li>
               <li className="nav-item" data-class=".skills">
                    <a className="nav-link" href="#skills">SKILLS</a>
               </li>
               <li className="nav-item" data-class=".contact">
                    <a className="nav-link" href="#contact">CONTACT</a>
               </li>
         </ul>
       </div>
     </nav>
          
        )
    }
}