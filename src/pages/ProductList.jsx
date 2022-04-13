import React from 'react'
import styled from 'styled-components';
import Annoucements from '../components/Annoucements';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import Products from '../components/Products';
import { mobile } from '../responsive';
const Container=styled.div`
`
const Title=styled.h1`
margin:20px;
${mobile({
    textAlign:'center'
    })}
`
const FilterContainer=styled.div`
display:flex;
justify-content:space-between;
`
const Filter=styled.div`
margin:20px;

`
const FilterText=styled.span`
font-size:20px;
font-weight:600;
margin-right:20px;

`
const Select=styled.select`
padding:10px;
margin-right:20px;

`
const Option=styled.option`

`
function ProductList() {
  return (
    <Container>
        <Navbar/>
        <Annoucements/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option>White</Option>
                    <Option>Red</Option>
                    <Option>Yellow</Option>
                    <Option>Blue</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>Xl</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Price asc</Option>
                    <Option>Price dsc</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <NewsLetter/>

    </Container>
  )
}

export default ProductList