import styled from "styled-components";
import seoul from "../image/seoul_green.png";

const SeoulArea = styled.img`
  width: 2.7vw;

  position: absolute;
  top: 17.5vh;
  left: 43.2vw;
  z-index: 3;
`;

const Seoul = () => {
  return <SeoulArea alt="seoul_green.png" src={seoul}></SeoulArea>;
};

export default Seoul;
