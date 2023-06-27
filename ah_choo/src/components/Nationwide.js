import styled from "styled-components";
import korea from "../image/pngwing.com.png";

const WholeArea = styled.img`
  width: 30vw;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;

  position: static;
`;
const All = () => {
  return <WholeArea alt="pngwing.com.png" src={korea}></WholeArea>;
};

export default All;
