import React from 'react'
import "./Contact.css"
import{MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2"
function Contact() {
  return (
    <section className='c-wrapper' id='contact'>
        <div className="paddings innerWidth flexCenter c-container">
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact Us </span>
                <span className='secondaryText'>We alwasy ready to help by providing thr best services. We believe a good place to live can make your life better</span>
                    <div className="flexColStart contactModes">
                        {/* first row */}
                        <div className="flexStart row">
                            {/* call */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                  <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                  </div>
                                  <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className='secondaryText'>021 123 678 12</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                Call Now
                            </div>
                            </div>
                            {/* chat */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                  <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                  </div>
                                  <div className="flexColStart detail">
                                    <span className="primaryText">Chat</span>
                                    <span className='secondaryText'>021 123 678 12</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                Chat Now
                            </div>
                            </div>
                            
                        </div>
                        {/* second row */}
                        <div className="flexStart row">
                            {/* video call */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                  <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                  </div>
                                  <div className="flexColStart detail">
                                    <span className="primaryText">Video Call</span>
                                    <span className='secondaryText'>021 123 678 12</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                Video Call Now
                            </div>
                            </div>
                            {/* chat */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                  <div className="flexCenter icon">
                                    <HiChatBubbleBottomCenter size={25}/>
                                  </div>
                                  <div className="flexColStart detail">
                                    <span className="primaryText">Message</span>
                                    <span className='secondaryText'>021 123 678 12</span>
                                 </div>
                                </div>
                                <div className="flexCenter button">
                                Message Now
                            </div>
                            </div>
                            
                        </div>
                    </div>
            </div>
            <div className="c-right">
                <div className='flexCenter'>
                    <img src="./contact.jpg" className="image-container" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
