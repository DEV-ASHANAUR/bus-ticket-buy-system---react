import axios from 'axios';
import React, { useEffect, useState,useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';

const Invoice = () => {
    const Base_url = "http://localhost:8000/api";
    const [loader, setLoader] = useState(false);
    const [data, setDate] = useState({});
    const location = useLocation();
    const invoiceId = location.state.invoiceId;
    const componentRef = useRef();

    useEffect(() => {
        const fetchData = async () => {
            setLoader(true);
            try {
                const res = await axios.get(`${Base_url}/reserve/${invoiceId}`);
                setDate(res.data);
                console.log(res.data)
            } catch (error) {
                console.log(error)
            }
            setLoader(false);
        }
        fetchData();
    }, [invoiceId]);
    //handlePrint
    
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <div className='container mt-5'>
            <div className="row mb-5 p-4" ref={componentRef}>
                <div className="col-md-12 m-auto">
                    <span className='bg-primary py-2 px-2 text-white text-uppercase'>E-Ticket</span>
                    <p className='mt-3'>Invoice Id : {data._id}</p>
                    <div className='my-3'>
                        <h5>Customer Details</h5>
                        <p className='my-2 text-capitalize'>Name : {data.pasenName}</p>
                        <p className='my-2 text-capitalize'>Phone : {data.pasenMobile}</p>
                        <p className='my-2 text-capitalize'>Email : {data.pasenEmail}</p>
                        <p className='my-2 text-capitalize'>Address : {data.address}</p>
                        <h5>Bus Details</h5>
                        <p className='my-2 text-capitalize'>Travel Date : {new Date(data.dateOfTravel).toLocaleString('default', { weekday: 'long' })} -
                            {new Date(data.dateOfTravel).getDate()} -
                            {new Date(data.dateOfTravel).toLocaleDateString('default', { month: 'short' })} -
                            {new Date(data.dateOfTravel).getFullYear()} / {data.exactTime}
                        </p>
                        <p className='my-2 text-capitalize'>Operator : {data.operator}</p>
                    </div>
                    <div>
                        <table className='table text-center'>
                            <thead className='bg-primary text-white'>
                                <tr>
                                    <th>Seat No</th>
                                    <th>Class</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.invoice?.map((item, i) => (
                                        <tr key={i}>
                                            <td>{item.number}</td>
                                            <td>{item.class}</td>
                                            <td>{item.price} Tk</td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                            <tfoot className='bg-primary text-white'>
                                <tr>
                                    <th>Seat No</th>
                                    <th>Class</th>
                                    <th>Total</th>
                                </tr>
                            </tfoot>

                        </table>
                        <div className='d-flex justify-content-end'>
                            <div className='pe-5 text-end'>
                                <h6>SubTotal : {data.totalPrice - 100} Tk</h6>
                                <h6>Proccing Fee : 100 Tk</h6>
                                <hr className='my-1' />
                                <h6>Total : {data.totalPrice} Tk</h6>
                            </div>
                        </div>
                        <button className='btn btn-flat btn-primary' onClick={handlePrint}>Download</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invoice