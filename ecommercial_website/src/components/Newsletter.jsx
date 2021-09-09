import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
height: 60vh;
background-color:#fcf5f5;
display:flex;
align-items:center;
justify-content: center;

`;
const Title = styled.h1``;
const Desc = styled.div``;
const InputContainer = styled.div``;
const Input = styled.input``;
const Button = styled.button``;

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Desc>Lorem ipsum dolor sit amet.</Desc>
      <InputContainer>
        <Input placeholder="Enter your email"></Input>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
