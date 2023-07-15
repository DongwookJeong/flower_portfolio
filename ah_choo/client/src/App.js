import styled from "styled-components";
import { useEffect, useState } from "react";

// * img 공통 스타일
import "./App.scss";
/*
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
*/
const AppStyle = styled.div`
  width: 100vw;

  position: relative;
`;

const App = () => {
  const [mapList, setMapList] = useState(null);

  const fetchData = () => {
    fetch("http://localhost:5000/api/mapimage")
      .then((response) => response.json())
      .then((data) => setMapList(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  /*
  const dotdot = () => {
    fetch("http://localhost:5000/api/mapimage", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        red,
        orange,
        yellow,
        green,
      }),
    }).then(() => fetchData());
  };
  */
  return (
    <AppStyle>
      <img className="seoul" />
      <img className="gyeonggi" />
      <img className="incheon" />
      <img className="gangwon" />
      <img className="chungnam" />
      <img className="sejong" />
      <img className="daejeon" />
      <img className="chungbuk" />
      <img className="gyeongbuk" />
      <img className="daegu" />
      <img className="gyeongnam" />
      <img className="busan" />
      <img className="ulsan" />
      <img className="jeonnam" />
      <img className="jeonbuk" />
      <img className="gwangju" />
      <img className="jeju" />
    </AppStyle>
  );
};
export default App;
