import React, { Component } from 'react'
import Header1 from '../../header1'
// import Header from '../../header'

export default class game5 extends Component {
  render() {
    return (
      <>
     {/* <Header/> */}
     <Header1/>
        <div className="wrap-7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="bag-4">
                              <h2>EE BOOSTER</h2>
                             <ul>
                               <li>
                               <i className='fa fa-play'></i>
                               </li>
                               <li>
                               <i className='fa fa-play'></i>
                               </li>
                             </ul>
                                <div className="bag-8">
                                <ul className='honda'>
                                    <li className='onjds'>
                                      <a href="/">BP</a>
                                    </li>
                                    <li className='onjds'>
                                      <a href="/">FS</a>
                                    </li>
                                    <li className='onjds'>
                                      <a href="/">EE</a>
                                    </li>
                                  </ul>
                                </div>
                              <h3>Boosting Rate</h3>
                              <p>O $UNDEAD per 100 EE</p>
                              <input type="number" name="" id="" placeholder='100'/>
                              <button className='btn btn-danger'>Approve</button>
                              <button className='btn btn-danger'>Boost</button>
                              <p>Free Claim 1000EE In</p>
                              {/* <a href='/'>Go To MarketPlace</a> */}
                        </div>
                        </div>   
                    </div>
                </div>
            </div>
</>
    )
  }
}
