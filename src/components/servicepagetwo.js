import React ,{Component} from "react";
import {Link} from "react-router-dom"


export default class Servicepagetwo extends Component{

    render(){
        return(
            <div className="servicepagetwo">
                <div className="overlay"></div>
           
             <div className="container ">
                <div className="col-md-6">
                    <h4>Why chooce<span> us ?</span></h4>
                    <span className="line"></span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In maximus ligula semper metus pellentesque mattis. Maecenas volutpat, diam enim sagittis quam. Aliquam elementum tellus non erat porttitor mollis. Morbi viverra sollicitudin nisl eu sodales.</p>
                    <p>Etiam sit amet fringilla lacus. Pellentesque suscipit ante at ullamcorper pulvinar neque porttitor. Integer lectus. Praesent sed nisi eleifend, fermentum orci amet, iaculis libero.</p>
                </div>
                <div className="col-md-6">
                    <div className="togther">
                        <div className="heading-content active">
                            <h3><i className="fa fa-group"></i>We are proffesionals</h3>
                            <i className="fa fa-angle-down"></i>
                        </div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</div>
                    </div>
                    <div className="togther">
                        <div className="heading-content">
                            <h3><i className="fa fa-clock-o"></i>We are punctual</h3>
                        </div>
                        <div className="content">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</div>
                    </div>
                    <div className="togther">
                        <div className="heading-content">
                            <h3><i className="fa fa-heart"></i>We are friendly</h3>
                        </div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</div>
                    </div>
                    <div className="togther">
                        <div className="heading-content">
                            <h3><i className="fa fa-codepen"></i>We are creative</h3>
                        </div>
                        <div className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit quam lectus, facilisis auctor, ultrices ut, elementum vulputate, nunc.</div>
                    </div>
                </div>
                
                 </div>
                 </div>
            
          
            
          
        )
    }
}