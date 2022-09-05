import React, { useEffect, useState } from 'react'
import './seatCart.css';
import ChairIcon from '@mui/icons-material/Chair';
const SeatCart = ({ selectedSeats, handleCheckPage }) => {
    let total = 0;
    total = selectedSeats.length > 0 ? selectedSeats.length * selectedSeats[0].price : 0;
    return (
        <div className='seats-cart-container'>
            <div className="seats_status">
                <div className="available">
                    <span><ChairIcon /></span>
                    Available Seats
                </div>
                <div className="booked">
                    <span><ChairIcon /></span>
                    Booked Seats
                </div>
                <div className="selected">
                    <span><ChairIcon /></span>
                    Selected Seats
                </div>
            </div>

            <table className='table mt-2'>
                <thead className='text-center text-white bg-secondary'>
                    <tr>
                        <th>Seats</th>
                        <th>Fare</th>
                        <th>Class</th>
                    </tr>
                </thead>
                <tbody className='text-center' style={{ height: "205px" }}>

                    {selectedSeats.length ? (
                        <>
                            {
                                selectedSeats.map((item, i) => (
                                    <tr key={i}>
                                        <td>{item.number}</td>
                                        <td>{item.price} tk</td>
                                        <td>{item.class}</td>
                                    </tr>
                                ))
                            }
                        </>
                    ) : (
                        <tr>
                            <td colSpan={3}>Empty</td>
                        </tr>
                    )}
                </tbody>
                <tfoot className='text-white bg-secondary'>
                    <tr>
                        <td colSpan="3">Total: {total} tk</td>
                    </tr>
                </tfoot>
            </table>
            <button className='btn btn-success btn-sm' onClick={handleCheckPage} disabled={!selectedSeats.length > 0} >
                Continue
            </button>
        </div>
    )
}

export default SeatCart