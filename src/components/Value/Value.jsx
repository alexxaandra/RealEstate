import React from 'react'
import {Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel} from "react-accessible-accordion"
import "react-accessible-accordion/dist/fancy-example.css"
import data from "../../utils/accordion"


import "./Value.css"
import { MdOutlineArrowDropDown } from 'react-icons/md'

function Value() {
  return (
    <section className='v-wrapper' id='value'>
        <div className="paddings innerWidth flexCenter v-container">
            {/* left side */}
            <div className="v-left">
                
                <img src="./value.png" className="image-container"alt="house" />
                
            </div>
            {/* right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>We always ready to help by providing the best services for you.
                    <br />
                    We beleive a good place to live can make your life better
                </span>

                <Accordion className='accordion'
                 allowMultipleExpanded={false} 
                //  in a single time only one single item is goinmg to be expanded
                preExpanded={[0]}>
                    {data.map((item,i) =>{
                        return (
                            <AccordionItem className='accordionItem' key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className='flexCenter accordionButton'>
                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">{item.heading}</span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className="secondaryText">
                                        {item.detail}
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        );
                    }
                    )

                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default Value
