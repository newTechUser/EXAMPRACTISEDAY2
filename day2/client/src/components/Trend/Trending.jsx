import React, { useState ,useEffect } from 'react'
import './Trending.css'
import axios from 'axios'
import { FaSort } from 'react-icons/fa';

function Trending() {
    const [data,setdata] = useState([])
    const [search,setsearch] = useState("")
    const [sortcase,setsortcase] = useState(true)
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
    function sort(){
        if(sortcase){
            setdata(data.sort((a,b)=> a.goodsprice-b.goodsprice))
            setsortcase(false)
        }
        else{
            setdata(data.sort((a,b)=> b.goodsprice-a.goodsprice))
            setsortcase(true)
        }
    }
  return (
    <div className="trend">
        <p className="trendtitle">
            Popular Item in the market
        </p>
        <p className="trendmain">
            Trending Product<FaSort style={{cursor:'pointer'}} onClick={sort}/>
        </p>
        <div className="srchpadd">
            <div className="divsrchinput">
                    <input onChange={(e)=>{setsearch(e.target.value)}} type="text" className="srchinput" placeholder="Search" />
                    <button  className='Srch' >Search</button>
            </div>
        </div>
        <div className="container">
            <div className="card">
                {data.filter(item=>item.goodsbrend.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((item,index)=>(
                    <div key={item._id} className="carditem">
                        <div className="cardimg">
                            <img src={`${item.goodsimg}`} alt="" className="cardimage" />
                        </div>
                        <div className="cardtext">
                            <p className="cardtitletext">{item.goodstitle}</p>
                            <p className="cardbrendtext">{item.goodsbrend}</p>
                            <p className="cardprice">{item.goodsprice}$</p>
                        </div>
                    </div>
                ))}
            </div> 
        </div>
    </div>
  )
}

export default Trending