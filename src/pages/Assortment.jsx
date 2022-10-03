import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import News from "../components/News";
import Footer from "../components/Footer";


const Container = styled.div``;

const Title = styled.h1`
margin: 20px;
`;
const ContainerFilt = styled.div`
display: flex;
justify-content: flex-start;
`;
const Filters = styled.div`
margin: 10px;`;


const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;

`;

const Select = styled.select`
  padding: 1px;
  margin-right: 20px;
  
`;
const Option = styled.option``;


const Assortment = () => {
    return (
        <Container>
        <Announcement/>
         <Navbar /> 
         <Title>OUR PRODUCTS</Title>
         <ContainerFilt> 
            <Filters><FilterText>Filter Products:</FilterText></Filters>
            <Select>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select>
            <Option disabled>Price</Option>
            <Option>Under $20</Option>
            <Option>$$20-50</Option>
            <Option>$$50-100</Option>
            <Option>Over $100</Option>
          </Select>


            <Filters><FilterText>Sort Products:</FilterText>
            <Select>
            <Option value="newest">Newest Products</Option>
            <Option value="asc">Price (high to low)</Option>
            <Option value="desc">Price (low to high)</Option>
          </Select>
            </Filters>
         </ContainerFilt>
         <Products/>
         <News/>
         <Footer/>  
        </Container>
    )
}

export default Assortment
