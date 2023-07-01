import styled from "styled-components";
import sejong from "../image/sejong_yellow.png";

const SejongArea = styled.img`
  width: 1.7vw;

  position: absolute;
  top: 33.88vh;
  left: 45.7vw;
`;

const Sejong = () => {
  return <SejongArea alt="sejong_yellow.png" src={sejong}></SejongArea>;
};

export default Sejong;
