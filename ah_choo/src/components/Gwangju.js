import styled from "styled-components";
import gwangju from "../image/gwangju_yellow.png";

const GwangjuArea = styled.img`
  width: 2.4vw;

  position: absolute;
  top: 53vh;
  left: 42.6vw;
`;

const Gwangju = () => {
  return <GwangjuArea alt="Gwangju_yellow.png" src={gwangju}></GwangjuArea>;
};

export default Gwangju;
