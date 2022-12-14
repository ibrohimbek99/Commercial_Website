import { MailOutlineOutlined } from '@material-ui/icons';
import React from 'react'


import styled from "styled-components";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
 

`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const News = () => {
    return (
        <Container>
      <Title>GET UPDATED!</Title>
      <Desc>Do you want to be notified about upcoming discounts? Leave your email and be informed!</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <MailOutlineOutlined />
        </Button>
      </InputContainer>
    </Container>
  );
};


export default News
