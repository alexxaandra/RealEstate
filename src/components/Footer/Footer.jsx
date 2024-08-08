import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>
                <span className='secondaryText'>Our vision is to make all people <br />the best place to live for them</span>
            </div>
            <div className="flexColStart f-right">
                <span className='primaryText'>Information</span><span className='secondaryText'>848 Cansas, FL 9494 USA</span>
                <div className="flexCenter f-menu">
                    <span>Property</span>
                    <span>About Us</span>
                    <span>Products</span>
                    <span>About Us</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
