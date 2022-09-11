import React from 'react'
import './card.css'
import {Link} from 'react-router-dom';
const Card = ({item,handleSeat}) => {
  return (
    <div className='card-wrapper'>
      <div className="list-body">
        <div className="bus-info">
          <span className='title-style'><b>Operator</b> (Bus Type)</span>
          <h4 className='bus-name'>{item.operator}</h4>
          <div className="bus-info">
            <span style={{color:"#C7B0A8"}}>{item.bus_model}</span>
            <span>Route: <span style={{color:"#C7B0A8"}}>{item.bus_route}</span></span>
            <span className='text-capitalize' style={{color:"#757AA7"}}>Starting Point: {item.starting_point} <br />
              Ending Point: {item.ending_point}</span>
          </div>
        </div>
        <div className="s-time">
          <span className='title-style'>Dep.Time</span>
          <span>{item.dep_time}</span>
        </div>
        <div className="arr-time">
          <span className='title-style'>Arr.Time</span>
          <span>{item.arr_time}</span>
        </div>
        {/* <div className="avi-seats">
          <span className='title-style'>Seats-Available</span>
          <span>15</span>
        </div> */}
        <div className="price">
          <span className='title-style'>Fare</span>
          <span>{item.price} Tk</span>
          {/* <Link to="/seat/24354">
          <button className='btn btn-success mt-2'>View Seats</button>
          </Link> */}
          <button className='btn btn-success mt-2' onClick={()=>handleSeat(item._id,item.price,item.operator,item.dep_time)}>View Seats</button>
        </div>

      </div>
    </div>
  )
}

export default Card