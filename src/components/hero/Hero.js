import React, { useState } from 'react'
import './hero.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Hero = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    return (
        <div className='bg-banner'>
            <div className="overly">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 left-side">
                            <h4 className='text-uppercase text-white'>The Best Way Of Buy Ticket</h4>
                            <h1 className='my-3' style={{ fontWeight: '700' }}>Save Time Make Life Easy!</h1>
                            <p className='head-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus illo nulla nobis voluptate ipsa !.</p>
                            <div>
                                <button className='discover-btn'>Show All Routes</button>
                            </div>
                        </div>
                        <div className="col-md-4 right-side">
                            <div className="form-container">
                                <div className="form-group mb-3">
                                    <label htmlFor="form">From</label>
                                    <input type="text" className='input-control' placeholder='From Destination' />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="to">To</label>
                                    <input type="text" className='input-control' placeholder='Target Destination' />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form">Date</label>
                                    <DatePicker selected={startDate} minDate={new Date()} onChange={(date) => setStartDate(date)} className="input-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form">Return (Optional)</label>
                                    <DatePicker selected={returnDate} minDate={new Date()} onChange={(date) => setReturnDate(date)} className="input-control" />
                                </div>
                                <button className='submit-btn'>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero