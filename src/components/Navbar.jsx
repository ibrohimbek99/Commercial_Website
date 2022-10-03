import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
const Container = styled.div`
    height: 60px; 
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;`;

const Language =styled.span `
font-size: 14px;
cursor: pointer;`

const SearchContainer = styled.div `
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px`;

const Input = styled.input`
border: none;
`;

const Center = styled.div`
flex: 1;
text-align: center;`;

const Logo = styled.h1`
font-weight: bold;
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`;

const MenuItem = styled.div `
font-size: 14px;
cursor: pointer;
margin-left: 25px;`
const Navbar = () => {
    let navigate =useNavigate();
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input /> 
                    <Search></Search>
                    </SearchContainer>
                </Left>
                <Center><Logo>UZBEK IKAT</Logo></Center>
                <Right>
                    <MenuItem><button onClick={()=>{navigate("/");}}>Home</button>  </MenuItem>
                    <MenuItem><button onClick={()=>{navigate("/Assortment");}}>Products</button> </MenuItem>
                    <MenuItem>
                    <button onClick={()=>{navigate("/cart");}}>
                        <Badge badgeContent={0} color="primary">
                            <ShoppingCartOutlined  />
                        </Badge>
                        </button>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
