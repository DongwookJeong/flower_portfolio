import styled from "styled-components";
import ulsan from "../image/ulsan_yellow.png";

const UlsanArea = styled.img`
  width: 3.2vw;

  position: absolute;
  top: 46.6vh;
  left: 57.65vw;
`;

const Ulsan = () => {
  return <UlsanArea alt="ulsan_yellow.png" src={ulsan}></UlsanArea>;
};

export default Ulsan;
