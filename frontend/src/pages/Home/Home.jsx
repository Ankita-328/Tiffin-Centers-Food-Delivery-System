import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import TiffinCentre from '../../components/TiffinCenter/TiffinCentre'

const Home = () => {
    const[category,setCategory] = useState("All")
  return (
    <div>
        <Header/>
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category}/>
        <TiffinCentre/>
    </div>
  )
}

export default Home