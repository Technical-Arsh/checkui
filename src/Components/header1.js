import React from 'react'
import img4 from './image/img4.png'
import binImg from './image/SmLogo.png'
export default function header1() {
  return (
    <section className="wrap-2">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3 col-sm-12 col-xs-12">
                   <div className="bin1">
                     <a href={'/'}>Back</a>
                   </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                   <div className="bin2 bin3 bin10">
                   <img src={binImg} alt="" />
                     <a href="/">0.00 $UNDEAD ~ 0.00 FTM</a>
                   </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                   <div className="bin2 bin4 bin11">
                   <img src={binImg} alt="" />
                     <a href="/">0.00 $UNDEAD</a>
                   </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                   <div className="bin2 bin5 bin12">
                   <img src={img4} alt="" />
                   </div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                   <div className="bin2 bin6 bin14">
                   <img src={binImg} alt="" />
                     <a href="/">0x30........9b0A2</a>
                   </div>
                </div>
            </div>
        </div>
    </section>
  )
}
