import styled from "styled-components";
import gyeongbuk from "../image/gyeongbuk_green.png";

const GyeongbukArea = styled.img`
  width: 11.7vw;

  position: absolute;
  top: 24.3vh;
  left: 49.9vw;
`;

const Gyeongbuk = () => {
  return (
    <GyeongbukArea alt="gyeongbuk_green.png" src={gyeongbuk}></GyeongbukArea>
  );
};

export default Gyeongbuk;
