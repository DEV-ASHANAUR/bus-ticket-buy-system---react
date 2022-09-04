import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../components/card/Card';
import Filter from '../components/filter/Filter';
import Heading from '../components/listHeading/Heading';
import { useLocation } from 'react-router-dom'
import { newSearch } from '../redux/searchSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { failFetch, startFetch, successFetch } from '../redux/bussSlice';
import SeatModal from '../components/SeatModal';


const List = () => {
  const Base_url = "http://localhost:8000/api";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [show, setShow] = useState(false);
  const [busId,setBusId] = useState(undefined);

  // const [loading,setLoading] = useState(false); 
  // const {data,loading,reFetch} = useFetch(`/bus?starting_point=${start}&ending_point=${end}`);
  const {data,loading} = useSelector((state)=>state.buss);
  // console.log("redux",data);
  const [buss,setBuss] = useState([]);
  const [operstors,setOperators] = useState([]);

  const [start,setStart] = useState(location.state.staring_point);
  const [end,setEnd] = useState(location.state.ending_point);
  const [fdate,setFdate] = useState(location.state.date);
  const [rdate,setRdate] = useState(location.state.return_date);
  const [notFound, setNotFound] = useState(false);
  const [type, setType] = useState([
    { id: 1, checked: false, label: 'Ac' },
    { id: 2, checked: false, label: 'Non-Ac'}
  ]);

  const handleSeat = (busId)=>{
    setBusId(busId);
    setShow(true);
  }

  useEffect(()=>{
    const fetchData = async()=>{
        // setLoading(true);
        dispatch(startFetch());
        try {
            const res = await axios.get(`${Base_url}/bus?starting_point=${start}&ending_point=${end}`);
            dispatch(successFetch(res.data));
            setBuss(res.data.buss);
            setOperators(res.data.operator);
        } catch (error) {
            // setError(error);
            dispatch(failFetch());
        }
    }
    fetchData();
  },[start,end]);

  //apply filter
  const applyFilters = () => {
    let updateDataList = data.buss;
    //filter by category
    //checkcuisines
    let checkedType = type.filter((item) => item.checked).map((item) => item.label);
    // console.log("checkType",checkedType);
    let checkOperators = operstors.filter((item) => item.checked).map((item) => item.name);
    // console.log("checkOperators",checkOperators);
    if (checkOperators.length) {
      updateDataList = updateDataList.filter((item) => (checkOperators.includes(item.operator)));
    }

    if (checkedType.length) {
      updateDataList = updateDataList.filter((item) => (checkedType.includes(item.bus_type)));
    }

    //set update product
    setBuss(updateDataList);
    !updateDataList.length ? setNotFound(true) : setNotFound(false);
  }
  
  useEffect(()=>{
    dispatch(newSearch({staring_point:start.toLowerCase(),ending_point:end.toLowerCase(),date:fdate,return_date:rdate}));
    navigate("/list",{state:{staring_point:start.toLowerCase(),ending_point:end.toLowerCase(),date:fdate,return_date:rdate}});
  },[start,end,fdate,rdate]);

  //handle type check
  // console.log("buss data",buss);
  // console.log("opetator data",operstors);
  // console.log("type",type);
  //handle type check - ac / non-ac

  const handleTypeCheck = (id) => {
    let changeType = type;
    let updateType = changeType.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setType(updateType);
  }
  //handle operator
  const handleOperatorCheck = (id) => {
    let changeOperators = operstors;
    let updateOperstors = changeOperators.map((item) => item.name === id ? { ...item, checked: !item.checked } : item);
    setOperators(updateOperstors);
  }

  useEffect(() => {
    applyFilters();
  }, [type,operstors]);


  return (
    <>
      <Heading fdate={fdate} />
      <section style={{ backgroundColor: "#F7F7F7" }}>
        <div className="container">
          <div className="row pb-5">
            <div className="col-md-3 col-sm-12">
              <div className="filter-wrapper mt-3">
                <h5 className='m-0 py-2 ps-3'>Refine Search</h5>
                <hr className='m-0 p-0' />
                <Filter operstors={operstors} handleOperatorCheck={handleOperatorCheck} type={type} handleTypeCheck={handleTypeCheck} start={start} setStart={setStart} end={end} setEnd={setEnd} fdate={fdate} setFdate={setFdate} rdate={rdate} setRdate={setRdate} />
              </div>
            </div>
            <div className="col-md-9 col-sm-12">
              <div className="list-wrapper pt-2">
              {
                (loading)?(
                  <h1>Loading...</h1>
                ):
                (
                  <>
                    {
                      buss?.length ? (
                        buss.map((item)=>(
                          <Card  key={item._id} item={item} handleSeat={handleSeat} />
                        ))
                      ):
                      (
                        <div className="text-center">
                          <h2>Sorry,we couldn't find any results</h2>
                        </div>
                      )
                    }
                  </>
                )
              }
                
              </div>
            </div>
          </div>
        </div>
        {show && <SeatModal show={show} setShow={setShow} busId={busId} />}
      </section>
    </>
  )
}

export default List