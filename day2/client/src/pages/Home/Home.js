import React from 'react'
import Basket from '../../components/Basket/Basket'
import Bestsell from '../../components/BestSellers/Bestsell'
import Header from '../../components/Header/Header'
import Trending from '../../components/Trend/Trending'

function Home() {
  return (
    <div >
        <Header/>
        <Trending/>
        <Basket/>
        <Bestsell/>
    </div>
  )
}

export default Home