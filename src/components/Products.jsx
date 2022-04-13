import React from 'react'
import styled from 'styled-components';
import Product from './Product';
function Products() {
    const Container=styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-around;
    `
    const Wrapper=styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    align-items:center;;
    justify-content:space-between;
    `
    const Title=styled.h1`
    font-size:40px;
    font-weight:bold;
    `
  return (
    <Container>
        <Title>PRODUCTS</Title>
        <Wrapper>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </Wrapper>
    </Container>

  )
}

export default Products