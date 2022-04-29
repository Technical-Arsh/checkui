import React from 'react'
// import Header from '../../header.js'
import Header1 from '../../header1.js'
import Sketlon from '../../image/sketlon.png'

export default function game1() {
  return (
      <>
      {/* <Header/> */}
      <Header1/>
<div className="wrap-3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bag-1">
                        <h2>MARKETPLACE</h2>
                    
                    <button className="btn btn-danger">Open Trades</button>
                    <button className="btn btn-danger">My Trade</button>
                    <button className="btn btn-danger">My Collection</button>
                    <p>No Traders To Show</p>
                </div>
                </div>
                <div className="col-md-12">
                    <div className="sketlon">
                        <img src={Sketlon} alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

