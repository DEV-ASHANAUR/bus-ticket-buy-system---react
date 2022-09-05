import React,{useState} from 'react'
import './layout.css'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairIcon from '@mui/icons-material/Chair';
const Layout = ({seatData,sdate,busPrice,selectedSeats,setSelectedSeats}) => {
    // const [selectedSeats,setSelectedSeats] = useState([]);
    //isAvailable
    const isAvailable = (seatNumbers)=>{
        // console.log("Seat",seatNumbers);
        const isFound = seatNumbers.unavailableDates.some((date)=> new Date(date).getDate() == new Date(sdate).getDate());
        // console.log("Seat",isFound);
        return isFound;
    }

    function handleSelect(number, event){
        event.preventDefault();
        
        if(event.currentTarget.classList.contains("selected")){
            
            event.currentTarget.classList.remove("selected");
            setSelectedSeats(selectedSeats.filter((item)=>item.number !== number));
            
        }else{
            if(selectedSeats.length > 4){
                console.log("limit exist");
            }else{
                event.currentTarget.classList.add("selected");
                setSelectedSeats([...selectedSeats,{number:number,class:"Economy",price:busPrice}]);
            }
        }
    }

    // console.log("selectedSeats",selectedSeats);

    if(!seatData.length > 0){
        return <h1>loading...</h1>
    }

    // console.log(isAvailable(seatData[0].seatNumbers[1]))

    return (
        <div className='seat-layout'>
            <h5 className='m-0 py-1' style={{ fontSize: "0.8rem" }}>Hold the cursor on seats for seat numbers, click to select or deselect. </h5>
            <div className="parrent-seat mt-4">
                <div className="seat-wrapper">
                    <div className='dirver'>
                        <div><CatchingPokemonIcon /></div>
                    </div>
                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[0])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[0].number,event)}} title={seatData[0]?.seatNumbers[0].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[1])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[1].number,event)}} title={seatData[0]?.seatNumbers[1].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[2])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[2].number,event)}} title={seatData[0]?.seatNumbers[2].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[3])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[3].number,event)}} title={seatData[0]?.seatNumbers[3].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[4])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[4].number,event)}} title={seatData[0]?.seatNumbers[4].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[5])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[5].number,event)}} title={seatData[0]?.seatNumbers[5].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[6])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[6].number,event)}} title={seatData[0]?.seatNumbers[6].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[7])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[7].number,event)}} title={seatData[0]?.seatNumbers[7].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[8])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[8].number,event)}} title={seatData[0]?.seatNumbers[8].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[9])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[9].number,event)}} title={seatData[0]?.seatNumbers[9].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[10])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[10].number,event)}} title={seatData[0]?.seatNumbers[10].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[11])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[11].number,event)}} title={seatData[0]?.seatNumbers[11].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[12])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[12].number,event)}} title={seatData[0]?.seatNumbers[12].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[13])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[13].number,event)}} title={seatData[0]?.seatNumbers[13].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[14])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[14].number,event)}} title={seatData[0]?.seatNumbers[14].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[15])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[15].number,event)}} title={seatData[0]?.seatNumbers[15].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[16])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[16].number,event)}} title={seatData[0]?.seatNumbers[16].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[17])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[17].number,event)}} title={seatData[0]?.seatNumbers[17].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[18])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[18].number,event)}} title={seatData[0]?.seatNumbers[18].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[19])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[19].number,event)}} title={seatData[0]?.seatNumbers[19].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[20])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[20].number,event)}} title={seatData[0]?.seatNumbers[20].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[21])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[21].number,event)}} title={seatData[0]?.seatNumbers[21].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[22])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[22].number,event)}} title={seatData[0]?.seatNumbers[22].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[23])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[23].number,event)}} title={seatData[0]?.seatNumbers[23].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>
                   
                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[24])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[24].number,event)}} title={seatData[0]?.seatNumbers[24].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[25])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[25].number,event)}} title={seatData[0]?.seatNumbers[25].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[26])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[26].number,event)}} title={seatData[0]?.seatNumbers[26].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[27])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[27].number,event)}} title={seatData[0]?.seatNumbers[27].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[28])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[28].number,event)}} title={seatData[0]?.seatNumbers[28].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[29])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[29].number,event)}} title={seatData[0]?.seatNumbers[29].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[30])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[30].number,event)}} title={seatData[0]?.seatNumbers[30].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[31])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[31].number,event)}} title={seatData[0]?.seatNumbers[31].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[32])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[32].number,event)}} title={seatData[0]?.seatNumbers[32].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[33])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[33].number,event)}} title={seatData[0]?.seatNumbers[33].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[34])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[34].number,event)}} title={seatData[0]?.seatNumbers[34].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[35])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[35].number,event)}} title={seatData[0]?.seatNumbers[35].number}>
                                <span><ChairIcon /></span>
                            </div>
                            <div className={`seat ${isAvailable(seatData[0].seatNumbers[36])?"disabled":""}`} onClick={(event)=>{handleSelect(seatData[0]?.seatNumbers[36].number,event)}} title={seatData[0]?.seatNumbers[36].number}>
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout