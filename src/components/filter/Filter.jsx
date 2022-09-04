import React, { useState } from 'react'
import './filter.css'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import DatePicker from "react-datepicker";
import { debounce } from 'lodash';

const Filter = ({ operstors, handleOperatorCheck, type, handleTypeCheck, start, setStart, end, setEnd, fdate, setFdate, rdate, setRdate }) => {
    //debounce 
    const handleStart = debounce((text) => {
        setStart(text);
    }, 1000)
    //debounce
    const handleEnd = debounce((text) => {
        setEnd(text);
    }, 1000)

    return (
        <>
            <div className="operater">
                <h5 className='m-0 py-2'>Operator</h5>
                <FormGroup>
                    {
                        operstors.map((operstor, i) => (
                            <FormControlLabel key={i} control={<Checkbox checked={operstor.checked} onChange={() => handleOperatorCheck(operstor.name)} />} label={operstor.name} />
                        ))
                    }
                </FormGroup>
            </div>
            <hr className='m-0' />
            <div className="operater">
                <h5 className='m-0 py-2'>Bus Type</h5>
                <FormGroup>
                    {
                        type.map((t) => (
                            <FormControlLabel key={t.id} control={<Checkbox checked={t.checked} onChange={() => handleTypeCheck(t.id)} />} label={t.label} />
                        ))
                    }

                    {/* <FormControlLabel control={<Checkbox defaultChecked />} label="Non-Ac" /> */}
                </FormGroup>
            </div>
            <hr className='m-0' />
            <div className="operater">
                <h5 className='m-0 py-2'>Destination</h5>
                <div className="form-group mb-3">
                    <label htmlFor="form">From</label>
                    <input type="text" onChange={(e) => handleStart(e.target.value)} className='input-control text-capitalize' placeholder={start} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="to">To</label>
                    <input type="text" onChange={(e) => handleEnd(e.target.value)} className='input-control text-capitalize' placeholder={end} />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="form">Date</label>
                    <DatePicker selected={fdate} minDate={new Date()} onChange={(date) => setFdate(date)} className="input-control" />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="form">Return (Optional)</label>
                    <DatePicker selected={rdate} minDate={new Date()} onChange={(date) => setRdate(date)} className="input-control" />
                </div>
            </div>
            <hr className='m-0' />
        </>
    )
}

export default Filter