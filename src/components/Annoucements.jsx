import React from 'react';
import styled from 'styled-components';
import {mobile} from '../responsive';
const Container=styled.div`
width:100%;
height:30px;
background-color:teal;
text-align:center;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:14px;
font-weight:bold;
${mobile({
  width:'100%',
  fontSize:'12px'
})}
`



// `
function Annoucements() {
  return (
    <Container>Super Deals! Free Shipping On Orders over 5000 PKR</Container>
  )
}

export default Annoucements