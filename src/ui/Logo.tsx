import styled from "styled-components";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;
`;
const StyledH5 = styled.h5`
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
`;
function Logo() {
  return (
    <StyledLogo>
      <Img src="/logo-light.png" alt="Logo" />
      <StyledH5>Scorch</StyledH5>
    </StyledLogo>
  );
}

export default Logo;
