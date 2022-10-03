import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import News from '../components/News';

const Container = styled.div ``;
const Wrapper = styled.div `
padding: 20px;
`;
const Title = styled.h1 `
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div `
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "blue" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTitles = styled.div``;
const TopTitle = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;

`;

const Bottom = styled.div `
display: flex;
justify-content: space-between;`;
const Information = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductInfo = styled.div`
  flex: 2;
  display: flex;
`;

const Total = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const Image = styled.img`
  width: 200px;
`;

const Detail = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;
const PriceInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


const ProductNumBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  
`;





const Cart = () => {
    return (
        <Container>
           <Announcement/>
           <Navbar/>
           <Wrapper>
               <Title>YOUR BAG</Title>
               <Top>
                   <TopButton>BACK TO SHOPPING</TopButton>
                   <TopTitles>
                       <TopTitle>Wishlist</TopTitle>
                       <TopTitle>Your Bag</TopTitle>
                   </TopTitles>
                   <TopButton type="filled">GO TO CHECKOUT</TopButton>
                
               </Top>
               <Bottom>
                   <Information>
                       <Product>
                       <ProductInfo>
                           <Image src="https://i.etsystatic.com/11196266/r/il/860ef1/2484661040/il_794xN.2484661040_ayaj.jpg"/>
                           <Detail>
                               <ProductName><b>Item:</b> IKAT JACKET</ProductName>
                               <ProductID><b>Articule:</b> 86978564</ProductID>
                               <ProductColor/>
                               <ProductSize><b>Size:</b> S </ProductSize>
                           </Detail>
                       </ProductInfo>
                       <PriceInfo>Price</PriceInfo>
                       <ProductNumBox>
                           <Add/>
                           <ProductAmount>2</ProductAmount>
                           <Remove/>
                       </ProductNumBox>
                       <ProductPrice>$30</ProductPrice>
                     </Product>
                   </Information>
                   <Total></Total>
               </Bottom>
           </Wrapper>
           <News/>
           <Footer/> 
        </Container>
    )
}

export default Cart
