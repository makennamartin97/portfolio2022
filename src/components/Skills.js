import React from 'react';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import js from '../images/js copy.png';
import py from '../images/py copy.png';
import cs from '../images/cs.png';
import html from '../images/html2 copy.png';
import css from '../images/css3 copy.png';
import react from '../images/react.png';
import django from '../images/django2 copy.png';
import flask from '../images/flask copy.png';
import core from '../images/csharp.png';
import boot from '../images/bootstrap copy.png';
import node from '../images/nodejs copy.png';
import sql from '../images/mysql copy.png';
import mongo from '../images/mongodb copy.png';
import Roll from 'react-reveal/Roll';
import a from '../images/arrow.png';
import e from '../images/expressjs copy.png';

const Skills = () => {
    return(
        <div className="skills" >
            <Spin>
                
            <div className="title">
              
                    <h2>Skills</h2>
                
            </div>
            </Spin>
            <div className="content">
            
            <div className="skillscat">
            <Fade top>
                <div className="skillslabel">
                    Languages
                </div>
                <div className="skillslist">
                    <ul>
                    <li><img src={a}/>Javascript (ES6)</li>
                    <li><img src={a}/>Solidity</li>
                    <li><img src={a}/>Python</li>
                    <li><img src={a}/>C#</li>
                    <li><img src={a}/>HTML/CSS</li>
                    </ul>
                    
                </div>
            </Fade>
            </div>
            <div className="skillscat">
            <Fade top>
                <div className="skillslabel">
                    Frameworks/Libraries
                </div>
                <div className="skillslist">
                    <ul>
                    <li><img src={a} />ReactJS</li>
                    <li><img src={a}/>Django</li>
                    <li><img src={a}/>Flask</li>
                    <li><img src={a}/>.Net Core</li>
                    <li><img src={a}/>JQuery</li>
                    <li><img src={a}/>Bootstrap</li>
                    </ul>
                    
                </div>
            </Fade>
            </div>
            <div className="skillscat">
            <Fade top>
                <div className="skillslabel">
                    Back End + Databases
                </div>
                <div className="skillslist">
                    <ul>
                    <li><img src={a} alt='node'/>NodeJS</li>
                    <li><img src={a} alt='sql'/>SQL</li>
                    <li><img src={a} alt='mongodb'/>MongoDB</li>
                    <li><img src={a} alt='express'/>IPFS</li>
                    <li><img src={a} alt='express'/>ExpressJS</li>
                    </ul>
                    
                </div>
            </Fade>
            </div>
            </div>
            <div className="iconrow">
                
             
                <Roll left>
                <img className="skillicon" src={js} alt='js'/>
                <img className="skillicon" src={py} alt='py'/>
                <img className="skillicon" src={cs} alt='cs'/>
                <img className="skillicon" src={html} alt='html'/>
                <img className="skillicon" src={css} alt='css'/>
                <img className="skillicon" src={react} alt='reactJS'/>
                <img className="skillicon" src={django} alt='django'/>
                
                </Roll>
            </div>
            <div className="iconrow">
               
                <Roll left>
                <img className="skillicon" src={flask} alt='flask'/>
                <img className="skillicon" src={core} alt='.net core'/>
                <img className="skillicon" src={boot} alt='css'/>
      
                <img className="skillicon" src={node} alt='nodeJS'/>
                <img className="skillicon" src={sql} alt='SQL'/>
                <img className="skillicon" src={mongo} alt='mongoDB'/>
                <img className="skillicon" src={e} alt='expressJS'/>
                </Roll>
            </div>
            
                
            
        
                

        </div>

    )

}
export default Skills