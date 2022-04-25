import React from 'react'
import Annoucements from '../components/Annoucements'
import Category from '../components/Category'
import Navbar from '../components/Navbar'
import NewsLetter from '../components/NewsLetter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
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
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <Tooltip title="All"  arrow>
                <Button style={{color:'red',textDecoration:'underline'}}>See all products</Button>
              </Tooltip>
          </div>
        <NewsLetter/>
    </HomeContainer>
  )
}

export default Home