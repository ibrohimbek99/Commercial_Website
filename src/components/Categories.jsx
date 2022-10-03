import React from 'react'
import styled from 'styled-components';
import { categories } from '../array';
import ItemCategory from './ItemCategory';

const Container = styled.div `
display: flex;
padding: 20px;
justify-content: space-between;
`;

const Categories = () => {
    return (
        <Container>
           {categories.map(item =>(
               <ItemCategory item = {item} key = {item.id}/>
           ))} 
        </Container>
    )
}

export default Categories
