import React,{Component } from 'react';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import a from '../images/arrow.png';
import weatherapi from '../images/weatherapi2.gif'
import wed from '../images/weddingplanner2.gif'
import crud from '../images/crud.gif'
import kirby from '../images/kirby.gif'
import arrow from '../images/arrow.png';
import mongo from '../images/mongodb copy.png';
import e from '../images/expressjs copy.png';
import react from '../images/react.png';
import node from '../images/nodejs copy.png';
import js from '../images/js copy.png';
import {Modal, Button} from "react-bootstrap";
import html from '../images/html2 copy.png';
import css from '../images/css3 copy.png';


class Projects extends Component {
    constructor(props,context){
        super(props,context);
        this.handleShow = this.handleShow.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.state={
            show:null
        }
    }
    handleClose(){
        this.setState({show:null})
    }
    handleShow(id){
        this.setState({show:id})
    }
    render(){
    

    
      

   
    return(
        <div className="projects" id="projects">
            
            <div className="title">
                <Spin>
                    <h2>Projects</h2>
                </Spin>
            </div>
            
            <div className="projrow">
        
            <div className="containrow">
                <div className="proj crudelicious ">

                    <div className="contain ">
                        <div class="overlay">
                            <h3>Crudelicious</h3>
                            <Button className="projbtn2" onClick={()=>this.handleShow('sec')} onHide={this.handleClose}>See Details</Button>
                        </div>
                        <img src={crud} alt="Crudelicious"/>

                    </div>
      
                </div>
                <Modal show={this.state.show == 'sec'} bodyclassname="custom-modal-style">
                    <Modal.Header>
                        <Modal.Title>Crudelicious</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Description:</h4>
                        <p>A full stack CRUD application that allows users to create, read, update, and delete their favorite dishes and recipes as well as explore new ones.</p>
                        <h4>Technologies used to build this project:</h4>
                        <ul>
                            
                            <li>C#</li>
                            <li>ASP.Net Core</li>
                            <li>SQL</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            

                        </ul>
                        <h5>See the source code on Github <a href="https://github.com/makennamartin97/crudelicious.git">here</a></h5>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                    
            </div>
            <div className="containrow" >
                <div className="proj weatherproj">
                
                    <div className="contain ">
                        <div class="overlay">
                            <h3>Weather API</h3>
                            <Button className="projbtn" onClick={()=>this.handleShow('first')} onHide={this.handleClose}>See Details</Button>
                        </div>
                    
                        <img className="weatherimg" src={weatherapi} alt="Weather api" />
                        

                    </div>
           
                </div>
                
                
                <Modal show={this.state.show == 'first'} bodyclassname="custom-modal-style">
                    <Modal.Header>
                        <Modal.Title>Weather API</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Description:</h4>
                        <p>A single page responsive weather application that dynamically displays data retrieved from OpenWeather's Weather API with a gif matching the current weather for the zip code entered.</p>
                        <h4>Technologies used to build this project:</h4>
                        <ul>
                            
                            <li>Javascript</li>
                            <li>JQuery</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            

                        </ul>
                        <h5>See it deployed live <a href="https://makennamartin97.github.io/weather-api/">here</a></h5>
                        <h5>See the source code on Github <a href="https://github.com/makennamartin97/weather-api">here</a></h5>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                
                    
            </div>
            <div className="containrow">
                <div className="proj weddingproj ">
                
                    <div className="contain">
                    <div class="overlay">
                            <h3>Wedding Planner</h3>
                            <Button className="projbtn3" onClick={()=>this.handleShow('third')} onHide={this.handleClose}>See Details</Button>
                        </div>

                        
                        <img src={wed} alt="Wedding Planner"/>

                    </div>
                </div>
                <Modal show={this.state.show == 'third'} bodyClassName="custom-modal-style">
                    <Modal.Header>
                        <Modal.Title>Wedding Planner</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Description:</h4>
                        <p>A full stack login/registration CRUD application that allows users to post weddings, RSVP, and see who else is going.</p>
                        <h4>Technologies used to build this project:</h4>
                        <ul>
                            
                            <li>C#</li>
                            <li>ASP.Net Core</li>
                            <li>SQL</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            

                        </ul>
                        <h5>See the source code on Github <a href="https://github.com/makennamartin97/theweddingplanner.git">here</a></h5>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
            <div className="containrow">
                <div className="proj ">
                
                    <div className="contain">
                        <div class="overlay">
                            <h3>Kirby and Pals</h3>
                            <Button className="projbtn4" onClick={()=>this.handleShow('fourth')} onHide={this.handleClose}>See Details</Button>
                        </div>
                        <img src={kirby} alt="Kirby and Pals"/>
                    </div>
                </div>
                <Modal show={this.state.show == 'fourth'} bodyClassName="custom-modal-style">
                    <Modal.Header>
                        <Modal.Title>Kirby and Pals</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Description:</h4>
                        <p>A single page front-end freelance project for a local dog walking company that is responsive on all devices and features an email contact system.</p>
                        <h4>Technologies used to build this project:</h4>
                        <ul>
                            
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            

                        </ul>
                        <h5>*No longer deployed live at kirbyandpals domain*</h5>
                        <h5>See the source code on Github <a href="https://github.com/makennamartin97/kirby-and-pals2">here</a></h5>
                    </Modal.Body>
                    <Modal.Footer>
                        
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
                    
            </div>

            </div>
            <div className="other">
                <div className="title">
                    <Spin>
                        <h2>Other Projects</h2>
                    </Spin>
                </div>
                <div className="content">
                
                    <div className="moreprojects">
                    <Fade top>
                        <div className="anotherone">
                        <div className="thename">
                            <h3 id="l1">Portfolio | makenna-martin.com</h3>

                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Single page responsive front-end application that showcases projects, animations, and a contact system.</li>
                                <li><img src={a}/>Click <a href="https://github.com/makennamartin97/frontend-portfolio">here</a> to see the source code from Github</li>
                                <li><img src={a}/>Technologies: ReactJS, Javascript, EmailJS, HTML, CSS</li>
                            </ul>
                            <div className="stack">
                                <img src={react} alt="react"/>
                                <img src={js} alt="js"/>
                                <img src={html} alt="html"/>
                                <img src={css} alt="css"/>
                                
                            </div>
                        </div>
                    </div>

                        </Fade>
                        <Fade top>
                        <div className="anotherone">
                        <div className="thename">
                            <h3 id="l1">1331 Recordz | 1331recordz.com</h3>

                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Hired to develop the record labels 7 page decentralized application from scratch with React and CSS</li>
                                <li><img src={a}/>Click <a href="https://www.1331recordz.com">here</a> to see it deployed</li>
                                <li><img src={a}/>Stack: ReactJS, CSS</li>
                            </ul>
                            <div className="stack">
                                <img src={react} alt="react"/>
                                <img src={css} alt="css"/>
                            </div>
                        </div>
                    </div>

                        </Fade>
                        <Fade top>
                        <div className="anotherone">
                        <div className="thename">
                            <h3 id="l1">Pet Shelter</h3>

                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Full stack CRUD application that allows users to post, edit, view, and "adopt" pets </li>
                                <li><img src={a}/>Click <a href="https://github.com/makennamartin97/pet-shelter">here</a> to see the source code from Github</li>
                                <li><img src={a}/>Stack: MongoDB, ExpressJS, ReactJS, NodeJS</li>
                            </ul>
                            <div className="stack">
                                <img src={mongo} alt="mongoDB"/>
                                <img src={e} alt="mongoDB"/>
                                <img src={react} alt="mongoDB"/>
                                <img src={node} alt="mongoDB"/>
                            </div>
                        </div>
                    </div>

                        </Fade>
                      
                    </div>
                </div>

            </div>
            
         
                

        </div>

    )
    }

}
export default Projects