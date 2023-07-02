import styled from "styled-components";
import daegu from "../image/daegu_red.png";

const DaeguArea = styled.img`
  width: 2.65vw;

  position: absolute;
  top: 42.3vh;
  left: 53.55vw;
`;

const Daegu = () => {
  return <DaeguArea alt="daegu_red.png" src={daegu}></DaeguArea>;
};

export default Daegu;
