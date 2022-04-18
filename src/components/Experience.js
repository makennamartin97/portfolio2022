import React from 'react';
import Spin from 'react-reveal/Spin';
import Fade from 'react-reveal/Fade';
import a from '../images/arrow.png';

const Experience = () => {
    return(
        <div className="experience" id="experience">
                
            <div className="title">
                <Spin>
                    <h2>Experience</h2>
                </Spin>
            </div>
            <div className="content">
                
                <div className="places">
                <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l1">Senior Front End Blockchain Engineer at Ironglass Byte</h3>
                            <h3 className="year">December 2021 - Present</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Responsible for writing front end code for clients projects using React and CSS - including but not limited to: Non-Fungible Token staking games, e-commerce websites, minting D-apps (decentralized applications)</li>
                                <li><img src={a}/>Constructing the back end e-commerce cart functionality using modern Javascript and React</li>
                                <li><img src={a}/>Writing code for users’ wallet connection from front end to the Ethereum blockchain using Web3.js and Ethers.js</li>
                                <li><img src={a}/>Using Moralis API for staking games to loop through NFT metadata and store it in state as arrays to display images on a leaderboard based on highest level</li>
                                <li><img src={a}/>Assisting Back End Engineer with building smart contracts using Solidity and Remix</li>
                                <li><img src={a}/>Collaborating with team to test, debug, clean, and optimize the final code before deployment</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                    <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l1">Python Teaching Assistant for Amazon Career Choice Program</h3>
                            <h3 className="year">January 2021 - June 2021</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Helped assist Amazon employees with their coding assignments and career paths towards getting a job in the technical industry</li>
                                <li><img src={a}/>Supported instructors with attendance, homework, exam grading, and lectures</li>
                                <li><img src={a}/>Met with the instruction team and career services daily to plan and analyze student progression</li>
                                <li><img src={a}/>Recorded video tutorials walking through the process of building a full stack web application</li>
                                <li><img src={a}/>Motivated students in the channels everyday through zoom or the chat and making sure no questions get left unanswered</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                    {/* <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l2">Freelance Software Developer</h3>
                            <h3 className="year">December 2020 - Present</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Planning wireframes and communicating with clients to incorporate what features they want</li>
                                <li><img src={a}/>Building and deploying responsive web applications that are suitable for every device screen size</li>
                                <li><img src={a}/>Maintaining and updating the prices, photos, and company changes</li>
                            </ul>
                        </div>
                    </div>
                    </Fade> */}
                    <Fade top>
                    <div className="place">
                        <div className="thename">
                            <h3 id="l3">Coding Dojo Graduate</h3>
                            <h3 className="year">April 2020 - August 2020</h3>
                        </div>
                        <div className="detail">
                            <ul>
                                <li><img src={a}/>Graduated with perfect-score black belts on all 3 full stack exams in Python/Django, C#/.Net, and MERN</li>
                                <li><img src={a}/>Accumulated 1,500+ hours of intensive programming coursework including building, testing, debugging, and deployment</li>
                                <li><img src={a}/>Worked in teams to build projects and complete hackathons</li>
                            </ul>
                        </div>
                    </div>
                    </Fade>
                    
                </div>
                
                
            </div>
            
            
         
                

        </div>

    )

}
export default Experience