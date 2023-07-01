import styled from "styled-components";
import jeonnam from "../image/jeonnam_red.png";

const JeonnamArea = styled.img`
  width: 10.7vw;

  position: absolute;
  top: 54.7vh;
  left: 39.2vw;
`;

const Jeonnam = () => {
  return <JeonnamArea alt="jeonnam_red.png" src={jeonnam}></JeonnamArea>;
};

export default Jeonnam;
