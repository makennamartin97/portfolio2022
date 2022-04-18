import React from 'react';
import logo from '../images/finallogo2.png'
import gh from '../images/github-sign.png';
import linked from '../images/linkedin.png';
import up from '../images/up.png';

const Footer = () => {
    const footerStyle = {
        display:'flex',
        backgroundColor: '#5000ff',
        padding: '50px',
        height: '60px',
        width: '100vw',
    }
    const footerLogo ={
        height: '20px',
        width: '20px'
    }
    return (
        <div className="footer" style={{footerStyle}}>
            <div className="leftlinks">
            <a href="https://github.com/makennamartin97"><img src={gh} alt="Github" />Github</a>
            <a href="https://www.linkedin.com/in/makennamartin97/"><img src={linked} alt="Linkedin"/>LinkedIn</a>
            <a href="#"><img src={up} alt="Linkedin"/>Back to top</a>
            </div>
            <div className="rightlinks">
                <h5>&copy; Copyright 2021, Makenna Martin</h5> 
            </div>
            
        </div>
    )
}

export default Footer;