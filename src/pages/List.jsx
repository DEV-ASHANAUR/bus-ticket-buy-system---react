import React from 'react'
import Card from '../components/card/Card';
import Filter from '../components/filter/Filter';
import Heading from '../components/listHeading/Heading';

const List = () => {
  return (
    <>
      <Heading />
      <section style={{ backgroundColor: "#F7F7F7" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <div className="filter-wrapper mt-3">
                <h5 className='m-0 py-2 ps-3'>Refine Search</h5>
                <hr className='m-0 p-0' />
                <Filter />
              </div>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="list-wrapper pt-2">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default List