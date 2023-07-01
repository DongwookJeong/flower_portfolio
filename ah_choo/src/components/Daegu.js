import styled from "styled-components";
import daegu from "../image/daegu_red.png";

const DaeguArea = styled.img`
  width: 2.7vw;

  position: absolute;
  top: 45.7vh;
  left: 53.5vw;
`;

const Daegu = () => {
  return <DaeguArea alt="daegu_red.png" src={daegu}></DaeguArea>;
};

export default Daegu;
