import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import AppDownload from '../../components/app download/AppDownload'

const Home = () => {
  const[category,setCategory]=useState("All");

  return (
    <div className='home'>
    
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
      <><AppDownload></AppDownload></>  
      {/* <div className='indicator'>  <h2>Top</h2></div> */}
    </div>
  )
}

export default Home
