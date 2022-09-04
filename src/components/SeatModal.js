import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Layout from './layout/Layout';
import SeatCart from './seatcart/SeatCart';
import { useSelector } from 'react-redux';
import { format } from "date-fns";
import axios from 'axios';

const SeatModal = ({ show, setShow, busId }) => {
    const Base_url = "http://localhost:8000/api";
    const { starting_point, ending_point, date } = useSelector((state) => state.search);
    const [loading, setLoading] = useState(false);

    const [seatData, setSeatData] = useState([]);

    useEffect(() => {
        const fetchSeats = async () => {
            setLoading(true);
            try {
                const res = await axios.get(`${Base_url}/bus/seat/${busId}`);
                setSeatData(res.data);
            } catch (error) {
                console.log(error)
            }
            setLoading(false);
        }
        fetchSeats();
    }, [busId])

    const book = async (roomId) => {
        try {
            const res = await axios.put(`${Base_url}/seat/availability/${roomId}`, { date });
            console.log(res);
        } catch (error) {
            console.log(error)
        }
    }
    if (loading) { return (<h1>loading..</h1>) }

    return (
        <>
            <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {/* {busId} */}
                        <h5 className='m-0 py-2' style={{ color: "green", fontSize: "1rem" }}>Choose your seat(s) {`${format(date, "MM/dd/yyyy")}`} </h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <section style={{ backgroundColor: "#F7F7F7" }}>
                        <div className="bg-white" >
                            <div className="row pb-5">
                                <div className="col-md-5 mb-4">
                                    <Layout seatData={seatData} sdate={date} />
                                </div>
                                <div className="col-md-7 mb-4">
                                    <SeatCart />
                                </div>
                            </div>
                            <Button onClick={() => book("6313b0e349995caa814ee58c")}>book</Button>
                        </div>
                    </section>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary">
                        Save Changes
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default SeatModal