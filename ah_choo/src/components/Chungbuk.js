import styled from "styled-components";
import chungbuk from "../image/chungbuk_orange.png";

const ChungbukArea = styled.img`
  width: 8.7vw;

  position: absolute;
  top: 25.75vh;
  left: 46.65vw;
`;

const Chungbuk = () => {
  return <ChungbukArea alt="chungbuk_orange.png" src={chungbuk}></ChungbukArea>;
};

export default Chungbuk;
