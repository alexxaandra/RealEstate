import React from 'react'
import "./GetStarted.css"

function GetStarted() {
  return (
    <section className="g-wrapper" id='start'>
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>Subscribe and find super attractive offers <br />Find your residence with a click</span>
            
                <button className='button'><a href="mailto:#">Get Started</a></button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
