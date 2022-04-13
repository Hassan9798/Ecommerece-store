import React from 'react'
import Annoucements from '../components/Annoucements'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
const HomeContainer=styled.div`
// background-color:yellow;
// width:100%;
`
function Home() {
 
  return (
    <HomeContainer>
        <Navbar/>
        <Annoucements/>
        <Slider/>
        <Category/>
        <Products/>
        <NewsLetter/>
    </HomeContainer>
  )
}

export default Home