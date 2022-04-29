import React, { Component } from 'react'
import Header1 from '../../header1'
// import Header from '../../header'
export default class game4 extends Component {
  render() {
    return (
      <>
     {/* <Header/> */}
     <Header1/>
<div className="wrap-6">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="bag-2">
                        <h2>Latest 5000 Blocks Data</h2>
                    <div className="list">
                      <ul>
                        <li><a href="/">TXN Hash</a></li>
                        <li><a href="/">Action</a></li>
                        <li><a href="/">Dragon</a></li>
                        <li><a href="/">Alein</a></li>
                        <li><a href="/">Rewards</a></li>
                        <li><a href="/">BG Gain</a></li>
                        <li><a href="/">EE</a></li>
                      </ul>
                      {/* <table class="table">
                      <thead>
                        <tr>
                          <th>TXN Hash</th>
                          <th>Action</th>
                          <th>Dragon</th>
                          <th>Alein</th>
                          <th>Rewards</th>
                          <th>Email</th>
                          <th>BG Gain</th>
                          <th>EE</th>
                                  </tr>
                                </thead>
                                </table> */}
                    </div>
                    <p>NO Undeads</p>
                </div>
                </div>
            </div>
        </div>
    </div>
            </>
    )
  }
}
