import { ArrowLeftRounded, ArrowRightRounded } from '@material-ui/icons';
import styled from 'styled-components'
import { slideshowItems } from '../array';
import { useState } from 'react';

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: #cdb7f6;
overflow:hidden;`;

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin: auto;
cursor: pointer;
opacity:0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 2s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);`;

const Slide = styled.div `
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props=>props.bg};`;

const ImgCont = styled.div `
flex:1;
height: 100%;`;

const Info = styled.div `
padding: 50px;
flex: 1;`;

const Title = styled.h1`
font-size: 70px`;
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;`;
const Button = styled.button`
padding: 10px;
background-color: transparent;
cursor: pointer;`;

const Image = styled.img `
align-items: center;
height: 100%;`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) =>{
        if(direction=== "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex -1 : 2)
        }else{
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0)
        }
    }
    return (
        <Container>
            <Arrow direction ="left" onClick={() => handleClick("left")}>
                <ArrowLeftRounded/>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {slideshowItems.map((item) =>(
                <Slide bg={item.bg} key = {item.id}>
                <ImgCont>
                    <Image src={item.img} />
                </ImgCont>
                <Info>
                    <Title>{item.title} </Title>
                    <Description>{item.desc} </Description>
                    <Button>SHOP NOW</Button>
                </Info>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction ="right" onClick={() => handleClick("right")}>
                <ArrowRightRounded/>
            </Arrow>
        </Container>
    )
}

export default Slider
