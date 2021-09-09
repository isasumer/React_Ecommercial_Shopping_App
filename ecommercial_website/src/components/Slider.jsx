import React from "react";
import styled from "styled-components";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow:hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;

const Wrapper = styled.div`
  height: 100%;
  display:flex;
  transform:translateX(0vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px; 
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [slideIn]
const handleClick = (direction) => 

  return (
    <Container>
      <Arrow direction="left" onClick={()=>handeClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="#a3dcff">
          <ImgContainer>
            <Image src="https://i.ibb.co/XsdmR2c/1.png"></Image>
          </ImgContainer>
          <InfoContainer>
            <Title>SUMMER COLLECTION</Title>
            <Desc>Lorem ipsum dolor sit amet.</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
          <ImgContainer>
            <Image></Image>
          </ImgContainer>
          <InfoContainer></InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
