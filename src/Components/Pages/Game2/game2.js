import React, { Component } from 'react'
import Header1 from '../../header1'
// import Header from '../../header'
import Sketlon from '../../image/sketlon.png'
export default class game2 extends Component {
  render() {
    return (
      <>
     {/* <Header/> */}
     <Header1/>
<div className="wrap-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bag-2">
                        <h2>MARKETPLACE</h2>
                    <p>NO Undeads</p>
               
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
}
