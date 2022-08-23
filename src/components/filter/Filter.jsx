import React,{useState} from 'react'
import './filter.css'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import DatePicker from "react-datepicker";
const Filter = () => {
    const [checked, setChecked] = useState(true);
    const [startDate, setStartDate] = useState(new Date());
    const [returnDate, setReturnDate] = useState(new Date());

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <div className="operater">
                <h5 className='m-0 py-2'>Operator</h5>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Hanif" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Green Line" />
                </FormGroup>
            </div>
            <hr className='m-0' />
            <div className="operater">
                <h5 className='m-0 py-2'>Bus Type</h5>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Ac" />
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Ac" />
                </FormGroup>
            </div>
            <hr className='m-0' />
            <div className="operater">
                <h5 className='m-0 py-2'>Destination</h5>
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
            </div>
            <hr className='m-0' />
        </>
    )
}

export default Filter