import React from 'react'
import './heading.css';
import carphoto from '../../img/journey.svg';
const heading = () => {
    return (
        <section style={{backgroundColor:"#ECECEC"}}>
            <div className="container">
                <div className="pt-5 pb-3">
                    <div className="left">
                        <h5 className='dep-title'>Departure</h5>
                        <div className='target-wrapper'>
                            <img src={carphoto} alt="" />
                            <div className="target-text-wrapper">
                                <h4 className='destination'>Dhaka - Kustiya</h4>
                                <span>24 August, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default heading