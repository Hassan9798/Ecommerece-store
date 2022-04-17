import {React,useEffect} from 'react'
import styled from 'styled-components';
import { CategoryList } from '../data';
import CategoryItem from './CategoryItem';
import Aos from 'aos';
import 'aos/dist/aos.css'
import { mobile } from '../responsive';
const Container=styled.div`
display:flex;
overflow: hidden;
flex:wrap;
// width:100%;
padding:10px;
justify-content:space-between;
${mobile({
  alignItems:'center',
  flexDirection:'column'
   })}
`
function Category() {
  // useEffect(()=>{
  //   Aos.init();
  //   },[])
  return (
    // <div data-aos="flip-up" data-aos-offset="200" >
    <Container >
        {CategoryList.map((item=>
            <CategoryItem item={item}/>
            ))}
        
    </Container>
  
  )
}

export default Category