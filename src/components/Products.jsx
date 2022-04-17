import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Product from './Product';
import axios from 'axios';
const Container = styled.div`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`
const Wrapper = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
align-items:center;;
justify-content:space-between;
`
const Title = styled.h1`
font-size:40px;
font-weight:bold;
`
function Products({ cat, filters, sort }) {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat ? `http://localhost:4000/api/products/getallproducts?category=${cat}`
            :
            ' http://localhost:4000/api/products/getallproducts'
        );
        setProducts(res.data);

      }
      catch (err) {

      }
    }
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilterProducts(
         products.filter(item=>
        Object.entries(filters).every(([key,value])=>
        item[key].includes(value)
        )
        )
      )
  }, [products, cat, filters]);

  useEffect(()=>{
    if(sort === 'newest'){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=> a.createdAt - b.createdAt)
      )
    }
    else if(sort === 'asc'){
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=> a.price - b.price)
      )
    }
    else {
      setFilterProducts((prev)=>
      [...prev].sort((a,b)=> b.price - a.price)
      )
    }
  },[sort])
  return (
    
    <Container>
      <Title>PRODUCTS</Title>
      <Wrapper>

        { cat ?filterProducts.map((product) => (
          <Product key={product._id} product={product} />
        )) : products.slice(0,8)
                      .map((product) => (
          <Product key={product._id} product={product} />
        )) }


      </Wrapper>
    </Container>

  )
}

export default Products