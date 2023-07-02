import styled from "styled-components";
import busan from "../image/busan_red.png";

const BusanArea = styled.img`
  width: 3.25vw;

  position: absolute;
  top: 51.9vh;
  left: 56.58vw;
`;

const Busan = () => {
  return <BusanArea alt="busan_red.png" src={busan}></BusanArea>;
};

export default Busan;
