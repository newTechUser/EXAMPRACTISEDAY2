import React, { useState ,useEffect } from 'react'
import './Bestsell'
import axios from 'axios'

function Bestsell() {
    const [data,setdata] = useState([])
    const port = 5000

    useEffect(()=>  {
        axios.get(`http://localhost:${port}/goods`)
        .then(res=>{
            setdata(res.data)            
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])

  return (
    <div className="trend">
        <p className="trendtitle">
        Popular Item in the market
        </p>
        <p className="trendmain">
            Best Sellers
        </p>
        <div className="container">
            <div className="card">
                {data.map((item)=>(
                    <div key={item._id} className="carditem">
                        <div className="cardimg">
                            <img src={`${item.goodsimg}`} alt="" className="cardimage" />
                        </div>
                        <div className="cardtext">
                            <p className="cardtitletext">{item.goodstitle}</p>
                            <p className="cardbrendtext">{item.goodsbrend}</p>
                            <p className="cardprice">{item.goodsprice}</p>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    </div>
  )
}

export default Bestsell