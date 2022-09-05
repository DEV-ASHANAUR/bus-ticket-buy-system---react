import React from 'react'
import Heading from '../components/listHeading/Heading';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
const Checkout = () => {
    const location = useLocation();
    const info = location.state.info;
    let total = 0;
    total = info.selectedSeats.length > 0 ? info.selectedSeats.length * info.selectedSeats[0].price : 0;
    const { starting_point, ending_point, date } = useSelector((state) => state.search);
    console.log("loca", location.state);
    return (
        <>
            <Heading />
            <section style={{ backgroundColor: "#F7F7F7" }}>
                <div className="container bg-white" >
                    <h5 className='m-0 py-2' style={{ color: "green", fontSize: "1.2rem" }}>Passenger Details</h5>
                    <hr />
                    <div className="row pb-5">
                        <div className="col-md-8 mb-4">
                            <label htmlFor="">Name <small className='text-danger'>*</small></label>
                            <input type="text" className='input-control w-md-50 mb-3' placeholder='Enter Name..' />

                            <label htmlFor="">Modile <small className='text-danger'>*</small></label>
                            <input type="text" className='input-control w-md-50 mb-3' placeholder='Enter Mobile Number' />

                            <label htmlFor="">Email <small className='text-danger'>*</small></label>
                            <input type="text" className='input-control w-md-50 mb-3' placeholder='Enter Email' />

                        </div>
                        <div className="col-md-4 mb-4">
                            <h5 className='m-0 pb-2 mb-3' style={{ fontSize: "1.2rem", borderBottom: "2px solid gray" }}>Journey Details</h5>
                            <h3 className='destination text-capitalize'>{starting_point && starting_point} - {ending_point && ending_point}</h3>

                            <p className='m-0 pt-2'>{info.operator}</p>
                            <div className='my-2'>
                                <span>
                                    {/* {`${format(new Date(date).getTime(), "MM/dd/yyyy")}`} */}
                                    {new Date(date).getDate()} -
                                    {new Date(date).toLocaleDateString('default', { month: 'long' })} - 
                                    {new Date(date).getFullYear()} - 
                                    {new Date(date).toLocaleString('default', { weekday: 'short' })} -
                                    {info.dep_time}   
                                </span>
                            </div>
                            <p>Seat No(s):{info.selectedSeats.map((item)=>(<span class="badge bg-primary m-1">{item.number}</span>))}</p>

                            {/* <SeatCart /> */}
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-8 mb-3">
                            <h3 className='bg-success text-white py-2 px-2' style={{width:"35%",fontSize:"1.2rem"}}>Payment Details</h3>
                            <div className="p-3 border mt-4">
                                <h3 className='text-center'>Total Amount Payable - <span className='text-success'>{total+100} Tk</span></h3>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h4>Fare Details</h4>
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Ticket Price : </p>
                                <b>{total} Tk</b>
                            </div>
                            <hr className='m-0 my-1' />
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Processing Fee : </p>
                                <b>100 Tk</b>
                            </div>
                            <hr className='m-0 my-1' />
                            <div className='d-flex justify-content-between'>
                                <p className='m-0'>Total Fee : </p>
                                <b>{total+100} Tk</b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout