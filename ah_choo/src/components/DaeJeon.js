import styled from "styled-components";
import daejeon from "../image/daejeon_red.png";

const DaejeonArea = styled.img`
  width: 2.1vw;

  position: absolute;
  top: 34.8vh;
  left: 46.38vw;
`;

const Daejeon = () => {
  return <DaejeonArea alt="daejeon_red.png" src={daejeon}></DaejeonArea>;
};

export default Daejeon;
