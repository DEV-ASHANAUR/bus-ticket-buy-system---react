import React, { useState } from 'react'
import './heading.css';
import carphoto from '../../img/journey.svg';
import { useSelector } from 'react-redux';
import { format } from "date-fns";
const Heading = ({fdate}) => {
    const {starting_point,ending_point,date} = useSelector((state)=>state.search);
    
    return (
        <section style={{backgroundColor:"#ECECEC"}}>
            <div className="container">
                <div className="pt-5 pb-3">
                    <div className="left">
                        <h5 className='dep-title'>Departure</h5>
                        <div className='target-wrapper'>
                            <img src={carphoto} alt="" />
                            <div className="target-text-wrapper">
                                <h4 className='destination text-capitalize'>{starting_point&&starting_point} - {ending_point&&ending_point}</h4>
                                <span>
                                {`${format(new Date(date).getTime(),"MM/dd/yyyy")}`}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Heading