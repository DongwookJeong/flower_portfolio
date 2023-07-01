import { useState } from "react";
import axios from "axios";
import key from "./key";
import styled from "styled-components";

import WholeArea from "./components/Nationwide";
import SeoulArea from "./components/Seoul";
import GyeonggiArea from "./components/Gyeonggi";
import IncheonArea from "./components/Incheon";
import GangwonArea from "./components/Gangwon";
import ChungnamArea from "./components/Chungnam";
import SejongArea from "./components/Sejong";
import DaejeonArea from "./components/DaeJeon";
import ChungbukArea from "./components/Chungbuk";
import GyeongbukArea from "./components/Gyeongbuk";
import DaeguArea from "./components/Daegu";
import JeonbukArea from "./components/Jeonbuk";
import JeonnamArea from "./components/Jeonnam";
import GwangjuArea from "./components/Gwangju";
import GyeongnamArea from "./components/Gyeongnam";
import UlsanArea from "./components/Ulsan";
import BusanArea from "./components/Busan";
import JejuArea from "./components/Jeju";
const AppStyle = styled.div`
  width: 100vw;

  position: relative;
`;

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        `https://apis.data.go.kr/1360000/HealthWthrIdxServiceV3/getPinePollenRiskIdxV3?serviceKey=${key}&numOfRows=10&pageNo=1&dataType=JSON&areaNo=3611054000&time=2023062718' \
        -H 'accept: application/json'`
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <AppStyle>
      <div>
        <button onClick={onClick}>api 첫 발</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}

      <WholeArea />
      <SeoulArea />
      <GyeonggiArea />
      <IncheonArea />
      <GangwonArea />
      <ChungnamArea />
      <SejongArea />
      <DaejeonArea />
      <ChungbukArea />
      <GyeongbukArea />
      <DaeguArea />
      <JeonbukArea />
      <JeonnamArea />
      <GwangjuArea />
      <GyeongnamArea />
      <UlsanArea />
      <BusanArea />
      <JejuArea />
    </AppStyle>
  );
};
export default App;
