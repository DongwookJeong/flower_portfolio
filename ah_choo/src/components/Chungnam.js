import styled from "styled-components";
import chungnam from "../image/chungnam_green.png";

const ChungnamArea = styled.img`
  width: 10vw;

  position: absolute;
  top: 28.8vh;
  left: 39vw;
`;

const Chungnam = () => {
  return <ChungnamArea alt="chungnam_green.png" src={chungnam}></ChungnamArea>;
};

export default Chungnam;
