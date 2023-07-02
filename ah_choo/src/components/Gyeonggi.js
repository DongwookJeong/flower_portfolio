import styled from "styled-components";
import gyeonggi from "../image/gyeonggi_red.png";

const GyeonggiArea = styled.img`
  width: 8.7vw;

  position: absolute;
  top: 6.4vh;
  left: 41.6vw;
`;

const Gyeonggi = () => {
  return <GyeonggiArea alt="gyeonggi_red.png" src={gyeonggi}></GyeonggiArea>;
};

export default Gyeonggi;
