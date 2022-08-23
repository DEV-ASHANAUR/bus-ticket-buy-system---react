import React from 'react'
import './card.css'
const Card = () => {
  return (
    <div className='card-wrapper'>
      <div className="list-body">
        <div className="bus-info">
          <span className='title-style'><b>Operator</b> (Bus Type)</span>
          <h4 className='bus-name'>KTC Hanif</h4>
          <div className="bus-info">
            <span style={{color:"#C7B0A8"}}>1, Hino-1J, Non AC</span>
            <span>Route: <span style={{color:"#C7B0A8"}}>Dhaka - Kachikata - Noya Bazar - Baraigram - Bonpara - Dashu...</span></span>
            <span style={{color:"#757AA7"}}>Starting Point: Dhaka
              Ending Point: Kushtia</span>
          </div>
        </div>
        <div className="s-time">
          <span className='title-style'>Dep.Time</span>
          <span>7:00 Am</span>
        </div>
        <div className="arr-time">
          <span className='title-style'>Arr.Time</span>
          <span>7:00 Am</span>
        </div>
        <div className="avi-seats">
          <span className='title-style'>Seats-Available</span>
          <span>15</span>
        </div>
        <div className="price">
          <span className='title-style'>Fare</span>
          <span>700 Tk</span>
          <button className='btn btn-success mt-2'>View Seats</button>
        </div>

      </div>
    </div>
  )
}

export default Card