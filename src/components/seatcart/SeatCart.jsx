import React from 'react'
import './seatCart.css';
import ChairIcon from '@mui/icons-material/Chair';
const SeatCart = () => {
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
            <tbody className='text-center'>
                <tr>
                    <td>A1</td>
                    <td>700 tk</td>
                    <td>Economy</td>
                </tr>
                <tr>
                    <td>A2</td>
                    <td>700 tk</td>
                    <td>Economy</td>
                </tr>
                <tr>
                    <td>A3</td>
                    <td>700 tk</td>
                    <td>Economy</td>
                </tr>

            </tbody>
            <tfoot className='text-white bg-secondary'>
                <tr>
                    <td colSpan="3">Total: 2100 tk</td>
                </tr>
            </tfoot>
        </table>
        <button className='btn btn-success btn-sm'>
            Continue
        </button>
    </div>
  )
}

export default SeatCart