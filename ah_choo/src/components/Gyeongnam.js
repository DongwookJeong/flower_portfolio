import styled from "styled-components";
import gyeongnam from "../image/gyeongnam_orange.png";

const GyeongnamArea = styled.img`
  width: 10.8vw;

  position: absolute;
  top: 43.8vh;
  left: 48.5vw;
`;

const Gyeongnam = () => {
  return (
    <GyeongnamArea alt="gyeongnam_orange.png" src={gyeongnam}></GyeongnamArea>
  );
};

export default Gyeongnam;
