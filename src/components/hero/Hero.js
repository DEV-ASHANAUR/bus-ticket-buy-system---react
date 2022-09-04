import React, { useState } from 'react'
import './hero.css'
import DatePicker from "react-datepicker";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiTransportationIcon from '@mui/icons-material/EmojiTransportation';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { newSearch } from '../../redux/searchSlice';

const Hero = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());
    const [startingPoint,setStartingPoint] = useState("");
    const [endingPoint,setEndingPoint] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //handleSearch
    const handleSearch = () =>{
        if(startDate != "" && startingPoint != "" && endingPoint != ""){
            dispatch(newSearch({staring_point:startingPoint.toLowerCase(),ending_point:endingPoint.toLowerCase(),date:startDate,return_date:returnDate}));
            navigate("/list",{state:{staring_point:startingPoint.toLowerCase(),ending_point:endingPoint.toLowerCase(),date:startDate,return_date:returnDate}});
        }else{
            toast.error("All Field Are Required!");
        }
    }

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
                                <button className='discover-btn' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Services</button>
                            </div>
                        </div>
                        <div className="col-md-4 right-side">
                            <div className="form-container">
                                <div className="form-group mb-3">
                                    <label htmlFor="form">From</label>
                                    <input type="text" value={startingPoint} onChange={(e)=>setStartingPoint(e.target.value)} className='input-control text-capitalize' placeholder='From Destination' />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="to">To</label>
                                    <input type="text" value={endingPoint} onChange={(e)=>setEndingPoint(e.target.value)} className='input-control text-capitalize' placeholder='Target Destination' />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form">Date</label>
                                    <DatePicker selected={startDate} minDate={new Date()} onChange={(date) => setStartDate(date)} className="input-control" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="form">Return (Optional)</label>
                                    <DatePicker selected={returnDate} minDate={new Date()} onChange={(date) => setReturnDate(date)} className="input-control" />
                                </div>
                                <button className='submit-btn' onClick={handleSearch}>Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Available Service</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div clasName="modal-body">
                            <div className="container">
                                <h4 className='route-title'>#Routes</h4>
                                <div className="route-list">
                                    <div>
                                        <span className='text-primary'><LocationOnIcon /></span>
                                        <span>Dhaka to Faridpur</span>
                                    </div>
                                    <div>
                                        <span className='text-primary'><LocationOnIcon /></span>
                                        <span>Dhaka to Dinajpur</span>
                                    </div>
                                    <div>
                                        <span className='text-primary'><LocationOnIcon /></span>
                                        <span>Dhaka to kustiya</span>
                                    </div>
                                    <div>
                                        <span className='text-primary'><LocationOnIcon /></span>
                                        <span>Dhaka to rajshai</span>
                                    </div>
                                </div>
                                <h4 className='route-title mt-5'>#Bus Operators</h4>
                                <div className="route-list">
                                    <div>
                                        <span className='text-primary'><EmojiTransportationIcon /></span>
                                        <span>Green Line Paribahan</span>
                                    </div>
                                    <div>
                                        <span className='text-primary'><EmojiTransportationIcon /></span>
                                        <span>Hanif Paribahan</span>
                                    </div>
                                    <div>
                                        <span className='text-primary'><EmojiTransportationIcon /></span>
                                        <span>Rabeya Paribahan</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Hero