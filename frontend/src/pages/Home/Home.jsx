import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import ExprloeMenu from '../../components/ExprloeMenu/ExprloeMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
const Home = () => {
  const[category , setcategory] = useState('All')
  return (
    <div>
      <Header/>
      <ExprloeMenu category={category} setcategory = {setcategory}/>
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home
