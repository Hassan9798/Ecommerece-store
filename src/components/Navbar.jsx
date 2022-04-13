import React from 'react'
import styled from 'styled-components';
import { Search,ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material';
import {Link} from 'react-router-dom';
import { mobile } from '../responsive';
const Container = styled.div`
height:60px;
position:sticky;
top:0;
background-color:white;
z-index:10000;
${mobile({
    // paddingLeft:'-40px',
height:'50px',
width:'100%'
})}

`
const Wrapper = styled.div`
display:flex;
align-items:center;
// justify-content:center;
padding:0px 20px;
// padding:0px -20px
`
const Left = styled.div`
flex:1;
display:flex;
align-items:center;

`
const Language = styled.span`
font-weight:400;
${mobile({
    fontSize:'12px'
    })}
`
const SearchContainer = styled.div`
border:0.5px solid lightgrey;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
${mobile({
    marginLeft:'5px'
    })}
`
const SearchInput = styled.input`
border:none;
&:focus{
    outline:none;
}
${mobile({
    width:'50px'
    })}
`
const Right = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
${mobile({
    flex:2,
    // justifyContent:'center'
    })}

`
const MenuItem=styled.div`
font-size:16px;
cursor:pointer;
margin:25px;
${mobile({
    fontSize:'12px',
    margin:'12px 5px'
    })}
`
const Center = styled.div`
flex:1;
diplay:flex;
align-items:center;
justify-content:center;
${mobile({
    marginLeft:'10px'
    })}

`
const Logo=styled.img`
margin-left:45%;
height:40px;
width:40px;
object-fit:cover;
${mobile({
    width:'35px',
    height:'35px',
    // marginLeft:'0px',
    // margin:'0px 20px'
    })}
`
function Navbar() {
    return (
        
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        {/* input */}
                        <SearchInput />
                        <Search style={{color:'grey',fontSize:'16'}} />
                    </SearchContainer>
                </Left>
                <Center>
                <Link to='/'> <Logo src='/assets/img/logo.png'/></Link>
                    </Center>
                <Right>
                  <Link to='/login' style={{'textDecoration':'none','color':'black'}}>  <MenuItem>Login</MenuItem></Link>
                  <Link to='/register' style={{'textDecoration':'none','color':'black'}}> <MenuItem>Signup</MenuItem></Link>
                    <MenuItem>
                    <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined color="action" />
                    </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar