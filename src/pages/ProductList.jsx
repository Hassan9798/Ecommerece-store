import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
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
    const location=useLocation();
    const cat=location.pathname.split('/')[2];
    const [filters,setFilters]=useState({});
    const [sort,setSort]=useState('newest');
    const handleFilters=(e)=>{
        const value=e.target.value;
        setFilters({
            ...filters,
            [e.target.name]:value
        })
    };
  return (
    <Container>
        <Navbar/>
        <Annoucements/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled >Color</Option>
                    <Option>white</Option>
                    <Option>red</Option>
                    <Option>yellow</Option>
                    <Option>blue</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled >Size</Option>
                    <Option>Xl</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                    <Option>S</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select onChange={(e)=>setSort(e.target.value)}>
                    <Option value={'newest'}>Newest</Option>
                    <Option value={'asc'}>Price asc</Option>
                    <Option value={'desc'}>Price desc</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort}/>
        <NewsLetter/>

    </Container>
  )
}

export default ProductList