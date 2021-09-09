import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const Logo = styled.div`
  flex: 1;

`;
const Desc = styled.div`
  flex: 5;

`;
const SocialContainer = styled.div`
  flex: 2;

   display: flex;
  flex-direction: row;
`;

const SocialIcon = styled.div`
  display: flex;
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
      <Left>
        <Logo>SUMER.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
          quod sequi nesciunt modi debitis esse eos ut molestias, reiciendis
          repellendus?
        </Desc>
        <SocialContainer>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center></Center>
      <Right></Right>
    </Container>
  );
};

export default Footer;
