import React, { useState } from 'react'
import Heading from '../components/listHeading/Heading';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { format } from "date-fns";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Checkout = () => {
    const Base_url = "http://localhost:8000/api";
    const [pasenName, setPasenName] = useState("");
    const [pasenMobile, setPasenMobile] = useState("");
    const [pasenEmail, setPasenEmail] = useState("");
    const [address, setAddress] = useState("");
    const [loader, setLoader] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const info = location.state.info;
    let total = 0;
    total = info.selectedSeats.length > 0 ? info.selectedSeats.length * info.selectedSeats[0].price : 0;
    const { starting_point, ending_point, date } = useSelector((state) => state.search);

    const handleCash = async () => {
        if (pasenName === "" && pasenMobile === "" && pasenEmail === "" && address === "") {
            toast.error("Make Sure You FillUp All Field!");
            return
        } else {
            if (info.selectedSeats.length) {
                setLoader(true);
                try {
                    await Promise.all(
                        info.selectedSeatId.map((seatId) => {
                            const res = axios.put(`${Base_url}/seat/availability/${seatId}`, { date });
                            console.log(res);
                            // return res.data;
                        })
                    )
                    try {

                        const res = await axios.post(`${Base_url}/reserve`, {
                            pasenName: pasenName,
                            pasenMobile: pasenMobile,
                            pasenEmail: pasenEmail,
                            totalPrice: total + 100,
                            dateOfTravel: date,
                            exactTime: info.dep_time,
                            invoice: info.selectedSeats,
                            bussId: info.busId,
                            operator: info.operator,
                            payType: "Cash on Delivery",
                            status:"Not Paid",
                            address: address,
                        })
                        // console.log("invoice id",res.data._id)
                        toast.success("Reservation Complete!");
                        setTimeout(() => {
                            navigate(`/invoice/${res.data._id}`);
                        }, 3000)
                    } catch (error) {
                        toast.error(error);
                    }
                } catch (error) {
                    toast.error(error);
                }
                setLoader(false);
            } else {
                toast.error("Sorry!Seat is Not Available!");
            }
        }
    }
    //handleSslPayment
    const handleSsl = async () => {
        if (pasenName === "" && pasenMobile === "" && pasenEmail === "") {
            toast.error("Make Sure You FillUp All Field!");
            return
        } else {
            const PayInfo = {
                pasenName: pasenName,
                pasenMobile: pasenMobile,
                pasenEmail: pasenEmail,
                totalPrice: total + 100,
                dateOfTravel: date,
                exactTime: info.dep_time,
                invoice: info.selectedSeats,
                bussId: info.busId,
                operator: info.operator,
                selectedSeatId: info.selectedSeatId,
                status:"pending",
                
            }
            try {
                const res = await axios.post(`${Base_url}/payment/init`, { PayInfo })
                window.location.replace(res.data);
            } catch (error) {
                console.log(error)
            }
        }
    }

    return (
        <>
            <Heading />

            <section style={{ backgroundColor: "#F7F7F7" }}>
                <div className="container bg-white" >
                    <h5 className='m-0 py-2' style={{ color: "green", fontSize: "1.2rem" }}>Passenger Details</h5>
                    <hr />
                    <div className="row pb-5">
                        <div className="col-md-8 mb-4">
                            <label htmlFor="" className='mb-1'>Name <small className='text-danger'>*</small></label>
                            <input type="text" className='input-control w-md-50 mb-3' onChange={(e) => setPasenName(e.target.value)} placeholder='Enter Name' />

                            <label htmlFor="" className='mb-1'>Modile <small className='text-danger'>*</small></label>
                            <input type="text" onChange={(e) => setPasenMobile(e.target.value)} className='input-control w-md-50 mb-3' placeholder='Mobile Number' />

                            <label htmlFor="" className='mb-1'>Email <small className='text-danger'>*</small></label>
                            <input type="text" onChange={(e) => setPasenEmail(e.target.value)} className='input-control w-md-50 mb-3' placeholder='Enter Email' />

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
                            <p>Seat No(s):{info.selectedSeats.map((item) => (<span className="badge bg-primary m-1">{item.number}</span>))}</p>

                            {/* <SeatCart /> */}
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-8 mb-3">
                            <h3 className='bg-success text-white py-2 px-2' style={{ width: "35%", fontSize: "1.2rem" }}>Payment Details</h3>
                            <div className="p-3 border mt-4 mb-5">
                                <h3 className='text-center'>Total Amount Payable - <span className='text-success'>{total + 100} Tk</span></h3>
                            </div>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">SSL Payment</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Cash on Delivery</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    <button onClick={handleSsl} style={{ borderRadius: "0px" }} className='btn btn-primary my-5 d-block w-50'>Pay Now</button>
                                </div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    <p className="text-center border border-danger my-4 p-2 text-info">Your ticket(s) would be reserved and inactive till our call center agents call you and verify your credentials. Ticket(s) would become active when you pay the due amount during the delivery of ticket(s) at your doorstep.</p>
                                    <textarea className='input-control' onChange={(e) => setAddress(e.target.value)} placeholder='Enter Ticket delivery Addrees'></textarea>
                                    <button style={{ borderRadius: "0px" }} className='btn btn-primary my-5 d-block w-50' onClick={handleCash}>Confirm Reservation</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <h5>Fare Details</h5>
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
                                <b>{total + 100} Tk</b>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}

export default Checkout