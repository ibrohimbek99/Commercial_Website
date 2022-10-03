import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'

const Container = styled.div``;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;
const Info = styled.div`
    flex: 1;
    padding: 0px 50px;
`;
const Title = styled.h1`
    font-weight: 250;`;
const Descr = styled.p`
    margin: 20px 0px`;
const Price = styled.span`
    font-weight: 100;
    font-size: 40px; `;

const FilterBox = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
  `;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterName = styled.span`
  font-size: 20px;
  font-weight: 200;
`;
const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;
const FilterPrice = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterPriceOption = styled.option``;
const AddtoCart = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NumberBox = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Number = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
    return (
        <Container>
           <Announcement /> 
           <Navbar />
           <Wrapper>
               <ImageContainer>
                   <Image src="https://i.etsystatic.com/11196266/r/il/860ef1/2484661040/il_794xN.2484661040_ayaj.jpg"/>
               </ImageContainer>
               <Info>
                   <Title> Ikat Jacket</Title>
                   <Descr>Uzbek Ikat jacket was made for you. The best one in the collection.</Descr>
                   <Price>$20</Price>
                   <FilterBox>
                       <Filter>
                           <FilterName>Color</FilterName>
                           <FilterColor color="gray"/>
                           <FilterColor color="red"/>
                           <FilterColor color="blue"/>
                       </Filter>
                       <Filter>
                           <FilterName>Price</FilterName>
                           <FilterPrice>
                               <FilterPriceOption>Under $20</FilterPriceOption>
                               <FilterPriceOption>$$20-50</FilterPriceOption>
                               <FilterPriceOption>$$50-100</FilterPriceOption>
                               <FilterPriceOption>Over $100</FilterPriceOption>
                           </FilterPrice>
                       </Filter>
                   </FilterBox>
                   <AddtoCart>
                       <NumberBox>
                        <Remove/>
                        <Number>1</Number>
                        <Add/>
                       </NumberBox>
                       <Button>ADD TO CART</Button>
                   </AddtoCart>
               </Info>
           </Wrapper>
           <News />
           <Footer />
        </Container>
    )
}

export default Product
