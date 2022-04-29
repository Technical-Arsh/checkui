import React, { Component } from 'react'
import Header1 from '../../header1'
// import Header from '../../header'
import SMLOGO from '../../image/SmLogo.png'

export default class game3 extends Component {
  render() {
    return (
      <>
     {/* <Header/> */}
     <Header1/>
        <div className="wrap-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="bag-4">
                              <h2>Mint UNDEAD</h2>
                              <img src={SMLOGO} alt="" />
                              <h3>Mint Undead Skull</h3>
                              <p>98455.88 $UNDEAD TO <br />MINT SKULL</p>
                              <a href='/' className='bag-15'>Approve</a>
                              <a href='/' className='bag-15'>Mint</a>
                              <p>You can also buy more $UNDEAD from Marketplace offered by other users.</p>
                              <span>Go To MarketPlace</span>
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
</>
    )
  }
}
