import styled from "styled-components";
import jeonbuk from "../image/jeonbuk_yellow.png";

const JeonbukArea = styled.img`
  width: 9.8vw;

  position: absolute;
  top: 40vh;
  left: 41vw;
`;

const Jeonbuk = () => {
  return <JeonbukArea alt="jeongbuk_yellow.png" src={jeonbuk}></JeonbukArea>;
};

export default Jeonbuk;
