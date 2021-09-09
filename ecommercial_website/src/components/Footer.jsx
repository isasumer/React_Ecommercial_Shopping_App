import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
`;

const Footer = () => {
  return (
    <Container>
      <Logo>SUMER.</Logo>
      <Desc>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        quod sequi nesciunt modi debitis esse eos ut molestias, reiciendis
        repellendus?
      </Desc>
      <SocialContainer>
          <SocialIcon>
              
          </SocialIcon>
      </SocialContainer>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
