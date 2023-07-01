import styled from "styled-components";
import jeju from "../image/jeju_red.png";

const JejuArea = styled.img`
  width: 5.1vw;

  position: absolute;
  top: 86.2vh;
  left: 39.2vw;
`;

const Jeju = () => {
  return <JejuArea alt="jeju_red.png" src={jeju}></JejuArea>;
};

export default Jeju;
