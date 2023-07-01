import styled from "styled-components";
import gyeongbuk from "../image/gyeongbuk_green.png";

const GyeongbukArea = styled.img`
  width: 11.5vw;

  position: absolute;
  top: 27.25vh;
  left: 49.95vw;
`;

const Gyeongbuk = () => {
  return (
    <GyeongbukArea alt="gyeongbuk_green.png" src={gyeongbuk}></GyeongbukArea>
  );
};

export default Gyeongbuk;
