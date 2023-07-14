import styled from "styled-components";

// * img 공통 스타일
import "./App.scss";

// ! 마크업을 위한 이미지 파일 삭제 예정
import seoul from "./image/seoul_green.png";
import gyeonggi from "./image/gyeonggi_red.png";
import chungbuk from "./image/chungbuk_orange.png";
import chungnam from "./image/chungnam_green.png";
import daegu from "./image/daegu_red.png";
import daejeon from "./image/daejeon_red.png";
import gangwon from "./image/gangwon_orange.png";
import gwangju from "./image/gwangju_yellow.png";
import gyeongbuk from "./image/gyeongbuk_green.png";
import gyeongnam from "./image/gyeongnam_orange.png";
import incheon from "./image/incheon_orange.png";
import jeju from "./image/jeju_red.png";
import jeonbuk from "./image/jeonbuk_yellow.png";
import jeonnam from "./image/jeonnam_red.png";
import sejong from "./image/sejong_yellow.png";
import ulsan from "./image/ulsan_yellow.png";
import busan from "./image/busan_red.png";

const AppStyle = styled.div`
  width: 100vw;

  position: relative;
`;

const App = () => {
  return (
    <AppStyle>
      <img className="seoul" src={seoul} />
      <img className="gyeonggi" src={gyeonggi} />
      <img className="incheon" src={incheon} />
      <img className="gangwon" src={gangwon} />
      <img className="chungnam" src={chungnam} />
      <img className="sejong" src={sejong} />
      <img className="daejeon" src={daejeon} />
      <img className="chungbuk" src={chungbuk} />
      <img className="gyeongbuk" src={gyeongbuk} />
      <img className="daegu" src={daegu} />
      <img className="gyeongnam" src={gyeongnam} />
      <img className="busan" src={busan} />
      <img className="ulsan" src={ulsan} />
      <img className="jeonnam" src={jeonnam} />
      <img className="jeonbuk" src={jeonbuk} />
      <img className="gwangju" src={gwangju} />
      <img className="jeju" src={jeju} />
    </AppStyle>
  );
};
export default App;
