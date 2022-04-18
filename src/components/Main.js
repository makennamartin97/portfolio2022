import React from 'react';
import Nav from './Navbar';
import Section1 from './Section1'
import Contact from './Contact'
import Skills from './Skills'
import Slide from 'react-reveal/Slide';
import Experience from './Experience';
import Projects from './Projects';
import Footer from './Footer';
import About from './About'




const Main = () => {

    return (
        <div className="main">
            
          <Nav/>
     
        
          <Section1/>
          <Slide bottom>
            <About/>

          </Slide>

          <Slide bottom>
            <Skills/>

          </Slide>
          <Slide bottom>
            <Experience/>

          </Slide>
          <Slide bottom>
            <Projects/>

          </Slide>
          <Slide bottom>
            <Contact/>

          </Slide>
          <Slide bottom>
            <Footer/>

          </Slide>
          
          

            
        </div>
    )
}

export default Main