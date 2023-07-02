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
  return (
    <AppStyle>
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
