import styled from "styled-components";
import jeonbuk from "../image/jeonbuk_yellow.png";

const JeonbukArea = styled.img`
  width: 9.8vw;

  position: absolute;
  top: 43.5vh;
  left: 40.95vw;
`;

const Jeonbuk = () => {
  return <JeonbukArea alt="jeongbuk_yellow.png" src={jeonbuk}></JeonbukArea>;
};

export default Jeonbuk;
