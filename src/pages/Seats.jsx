import React from 'react'
import Heading from '../components/listHeading/Heading';
import Layout from '../components/layout/Layout';
import SeatCart from '../components/seatcart/SeatCart';
const Seats = () => {
    return (
        <>
            <Heading />
            <section style={{ backgroundColor: "#F7F7F7" }}>
                <div className="container bg-white" >
                    <h5 className='m-0 py-2' style={{ color: "green", fontSize: "1rem" }}>Choose your seat(s)</h5>
                    <hr />
                    <div className="row pb-5">
                        <div className="col-md-5 mb-4">
                            <Layout />
                        </div>
                        <div className="col-md-7 mb-4">
                            <SeatCart />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Seats