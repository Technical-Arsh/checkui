
import React, { Component } from 'react'
import Header1 from '../../header1'
// import Header from '../../header'
import Sket from "../../image/sketlon.png"
import head from "../../image/SmLogo.png"
import img6 from "../../image/img6.png"
import img7 from "../../image/img7.png"
//import Button from "../../image/btnBg1.png"
import { Link } from "react-router-dom";

export default class game6 extends Component {
  render() {
    return (
      <>
     {/* <Header/> */}
     <Header1/>
        <div className="wrap-8">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="bag-4">
                            <table class="table table-borderless">
    <thead>
      <tr>
        {/* <th>Firstname</th>
        <th>Email</th> */}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>BNB Rewarded</td>
        <td className='bag-9'>342.51 ~ $NaN</td>
      </tr>
      <tr>
        <td>BNB Claimed</td>
        <td className='bag-9'>218.72 ~ $NaN</td>
      </tr>
      <tr>
        <td>Total Egg Minted</td>
        <td className='bag-9'>2114</td>
      </tr>
      <tr>
        <td>Total Fights Won</td>
        <td className='bag-9'>32718</td>
      </tr>
      <tr>
        <td>Total UNDEAD Incubated</td>
        <td className='bag-9'>Pending...</td>
      </tr>
     
    </tbody>
  </table>
    </div>
                        </div> 

                        <div className="col-md-6">
                          <div className="bag-4">
                            <div className="ok">
                              <img src={Sket} alt="" />
                            </div>
                           <div className=" bag-11">
                           <a href='/'>Fight</a>
                           </div>
                            
                          </div>
                          <div className="bin1">
                     <a href="/">GitBook</a>
                   </div>
                        </div> 
                        <div className="row">
                            <div className="col-md-2">
                                <div className="img12">
                                <img src={img6} alt="" />
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="img12 img13">
                                <img src={img7} alt="" />
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-12">
                        <div className="bag-10">
                        <div className="ok">
                          <img src={head} alt="" /></div>
                          <Link  to="/">Mint Wizard</Link>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <div className="bag-10">
                        <div className="ok">
                          <img src={head} alt="" /></div>
                          <Link  to="/game2">Dangeon</Link>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <div className="bag-10">
                        <div className="ok">
                          <img src={head} alt="" /></div>
                          <Link  to="/game3">Booster</Link>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <div className="bag-10">
                        <div className="ok">
                          <img src={head} alt="" /></div>
                          <Link  to="/game4">Incubator</Link>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <div className="bag-10">
                        <div className="ok">
                          <img src={head} alt="" /></div>
                          <div className="bak">
                          <Link  to="/game5">Marketplace</Link></div>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <div className="bag-10">
                        <div className="ok">
                          <img src={head} alt="" /></div>
                          <div className="bak">
                          <Link  to="/game6">Game Log</Link></div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
</>
    )
  }
}
