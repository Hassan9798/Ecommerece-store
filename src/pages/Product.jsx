import { Add, Remove } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Annoucements from '../components/Annoucements';
import Navbar from '../components/Navbar';
import NewsLetter from '../components/NewsLetter';
import { mobile } from '../responsive';
import { publicRequest } from '../makeRequest';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/cartRedux';
const Container = styled.div`
width:100%;
// background-color:yellow;
`
const Wrapper = styled.div`
display:flex;
padding:50px;
${mobile({
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // padding:'0px'
})}
`
const ImgContainer = styled.div`
flex:1;
${mobile({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})}
`
const Image = styled.img`
object-fit:contain;
height:70vh;
width:100%;
${mobile({
    height: '50vh',
    width: '80%',
    objectFit: 'contain'
})}
`
const InfoContainer = styled.div`
flex:1;
padding:0px 50px;

${mobile({
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

})}

`
const Title = styled.h1`
font-weight:200;
`
const Desc = styled.p`
margin:20px 0px;
${mobile({
    display: 'none'
})}
`
const Price = styled.span`
font-weight:100;
font-size:30px;
`
const FilterContainer = styled.div`
width:50%;
margin:30px 0px;
display:flex;
justify-content:space-between;
${mobile({
    flexDirection: 'column',
    margin: '20px 0px',
})}

`
const Filter = styled.div`
display:flex;
align-items:center;


`
const FilterTitle = styled.div`
font-size:20px;
font-weight:200;

`
const FilterColor = styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color:${props => props.color};
margin:0px 3px;
cursor:pointer;
${mobile({
    width: '40px',
    // margin:'0px 5px'
    // display:'none'
})}

`
const FilterSize = styled.select`
margin-left:5px;
padding:5px;


`
const FilterOption = styled.option`


`
const AddContainer = styled.div`
display:flex;
width:50%;
justify-content:space-between;
${mobile({
    flexDirection: 'column',
    margin: '20px',

})}
`
const AmountContainer = styled.div`
display:flex;
align-items:center;
font-weight:700;
${mobile({
    justifyContent: 'space-between',
    marginBottom: '20px'
})}

`
const Amount = styled.span`
width:30px;
height:30px;
font-size:15px;
display:flex;
align-items:center;
justify-content:center;
border-radius:10px;
border:1px solid teal;
// text-align:center;
margin:0px 5px;
`
const AddButton = styled.button`
padding:10px;
cursor:pointer;
font-size:15px;
border:2px solid teal;
font-weight:500;
&:hover{
    background-color:#FAEBD7;
}
`
function Product() {
    const location=useLocation();
    const id=location.pathname.split('/')[2];
    const [product,setProduct]=useState([]); 
    const [quantity,setQuantity]=useState(1); 
    const [size,setSize]=useState(''); 
    const [color,setColor]=useState(''); 
     const dispatch=useDispatch();
    useEffect(()=>{
        const getProduct=async()=>{
        try{
           
                const res=await publicRequest.get(`/products/findproduct/${id}`)
                setSize(res.data.size[0]);
                setColor(res.data.color[0]);
                setProduct(res.data);
            
        }
        catch(err){
            console.log(err);
        }
        }

        getProduct();
    },[id]);

    const handleQuantity=(type)=>{
        if(type==='inc'){
            setQuantity(quantity+1);
        }
        else{
          quantity > 1 && setQuantity(quantity-1);
        }
    };

    const handleCart=(e)=>{
        e.preventDefault();
        dispatch(
            addProduct({...product,quantity,size,color})
        )
    }
    const url='http://localhost:4000/';
    
    return (
        <Container>
            <Navbar />
            <Annoucements />
            <Wrapper>
                <ImgContainer>
                    <Image src={url + product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            {product.color?.map((c)=>(
                            <FilterColor color={c} key={c} onClick={()=>setColor(c)}/>
                            ))}
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>

                            <FilterSize onChange={(e)=>{setSize(e.target.value)}}>
                                {product.size?.map((s)=>(
                                <FilterOption key={s}>{s}</FilterOption>
                                ))}
                            </FilterSize>

                        </Filter>

                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{ cursor: 'pointer' }} onClick={()=>handleQuantity('dec')}/>
                            <Amount>{quantity}</Amount>
                            <Add style={{ cursor: 'pointer' }} onClick={()=>handleQuantity('inc')} />
                        </AmountContainer>
                        <AddButton onClick={handleCart}>Add To Cart</AddButton>
                    </AddContainer>
                </InfoContainer>

            </Wrapper>
            <NewsLetter />
        </Container>
    )
}

export default Product