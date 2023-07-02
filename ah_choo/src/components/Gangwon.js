import styled from "styled-components";
import gangwon from "../image/gangwon_orange.png";

const GangwonArea = styled.img`
  width: 14.6vw;

  position: absolute;
  top: 1.4vh;
  left: 45.41vw;
  z-index: 2;
`;

const Gangwon = () => {
  return <GangwonArea alt="gangwon_orange.png" src={gangwon}></GangwonArea>;
};

export default Gangwon;
