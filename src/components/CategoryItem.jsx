import { Link,useLocation } from 'react-router-dom';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
const Container = styled.div`
flex:1;
// margin:3px;
width:100%;
height:70vh;
position:relative;
overflow: hidden;
cursor:pointer;
transition:all 0.5s ease;
&:hover{
    background-color:#FAEBD7;
};
${mobile({
    width: '100%'
})}

`
const Img = styled.img`
height:100%;
width:50vh;
object-fit:contain;
${mobile({
    height: '50vh',
})}
`
const Info = styled.div`
width:100%;
height:100%;
position:absolute;
top:0;
left:0;;
// margin:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Title = styled.h1`
color:#FF7F50;
margin-bottom:20px
font-weight:500;

`
const Button = styled.button`
border:none;
width:100px;
height:30px;
background-color:#FFEFD5;
color:black;
border-radius:10%;
cursor:pointer;
font-weight:800;

`
function CategoryItem({ item }) {
    console.log(item);
    return (
        <Container>
            <Img src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Link to={`/products/${item.cat}`}>
                    <Button>Shop Now</Button>
                </Link>

            </Info>


        </Container>

    )
}

export default CategoryItem