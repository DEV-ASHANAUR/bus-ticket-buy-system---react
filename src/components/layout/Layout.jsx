import React from 'react'
import './layout.css'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ChairOutlinedIcon from '@mui/icons-material/ChairOutlined';
import ChairIcon from '@mui/icons-material/Chair';
const Layout = () => {
    return (
        <div className='seat-layout'>
            <h5 className='m-0 py-1' style={{ fontSize: "0.8rem" }}>Hold the cursor on seats for seat numbers, click to select or deselect.</h5>
            <div className="parrent-seat mt-4">
                <div className="seat-wrapper">
                    <div className='dirver'>
                        <div><CatchingPokemonIcon /></div>
                    </div>
                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="A1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="A2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="A3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="A4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="B1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="B2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="B3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="B4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="C1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="C2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="C3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="C4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="D1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="D2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="D3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="D4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="E1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="E2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="E3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="E4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="F1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="F2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="F3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="F4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="G1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="G2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="G3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="G4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="H1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="H2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat"></div>
                            <div className="seat" title="H3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="H4">
                                <span><ChairIcon /></span>
                            </div>
                        </div>
                    </div>

                    <div className="seats">
                        <div className="seat-row">
                            <div className="seat" title="I1">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="I2">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="I3">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="I4">
                                <span><ChairIcon /></span>
                            </div>
                            <div className="seat" title="I5">
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