import React from 'react'
import './Header.css'
 
function Header() {
  return (
    <div className="header">
        <div className="blue"></div>
        <div className="headmain">
            <div className="imgside">
                <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-banner.png.webp" alt="" className="headimage" />
            </div>
            <div className="textside">
                <p className="headtitle">Shop is fun</p>
                <p className="headmaintext">BROWSE OUR<br/> PREMIUM PRODUCT</p>
                <p className="headdesc">Us which over of signs divide dominion deep fill bring they're meat beho<br/> upon own earth without morning over third. Their male dry. They are great <br/>appear whose land fly grass.</p>
                <div className="headdivbtn">
                    <button className="headbtn">Browse Now!</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header