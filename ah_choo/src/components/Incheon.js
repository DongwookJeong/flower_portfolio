import styled from "styled-components";
import incheon from "../image/incheon_orange.png";

const IncheonArea = styled.img`
  width: 1.8vw;

  position: absolute;
  top: 16.4vh;
  left: 41.6vw;
  z-index: 2;
`;

const Incheon = () => {
  return <IncheonArea alt="incheon_orange.png" src={incheon}></IncheonArea>;
};

export default Incheon;
