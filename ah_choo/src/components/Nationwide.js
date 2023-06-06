import styled from "styled-components";
import korea from "../image/pngwing.com.png";

const WholeArea = styled.img`
  width: 32vw;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
`;
const All = () => {
  return <WholeArea alt="pngwing.com.png" src={korea}></WholeArea>;
};

export default All;
