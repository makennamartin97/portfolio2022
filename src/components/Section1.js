import React from 'react';
import me from '../images/minime.jpg';
import gh from '../images/github-sign.png';
import linked from '../images/linkedin.png';
import Wave from 'react-wavify'


const Section1= () => {
    


    return (
        
            
        <div className="section1" >
            <div className="bg"></div>

            
            
            <div id="name">
                
            
                <h1 className="animate__animated animate__backInDown">Hi, I'm <span>Makenna Martin.</span></h1>
   
                <div className="break"></div>

                <h3 className="animate__animated animate__backInRight animate__delay-1s">I am a <span>Software Engineer</span></h3>
                <div className="break"></div>
                <h4 className="animate__animated animate__bounceInUp animate__delay-2s">with a passion for <span>Front End Development.</span></h4>
                <div className="picgroup">
                    
                    <a href="https://github.com/makennamartin97"><img className="animate__animated animate__backInDown animate__delay-3s icon" src={gh} alt="Github" /></a>
                    <img className="border2 mainpic animate__animated animate__rotateInUpRight animate__delay-3s" src={me} alt="Me"/>
                    
                    <a href="https://www.linkedin.com/in/makennamartin97/"><img className="animate__animated animate__backInDown animate__delay-3s icon" src={linked} alt="Linkedin"/></a>
                </div>

            </div>
   
            <Wave id="wave"fill='#5000ff'
                paused={false}
                options={{
                    height: 2,
                    amplitude: 18,
                    speed: 0.20,
                    points: 3
                }}
            />
 
        </div>
       
    )
}

export default Section1