import { useState } from "react";
import axios from "axios";
import key from "./key";
import WholeArea from "./components/Nationwide";
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        `https://apis.data.go.kr/1360000/HealthWthrIdxServiceV3/getPinePollenRiskIdxV3?serviceKey=${key}&numOfRows=10&pageNo=1&dataType=JSON&areaNo=3611054000&time=2023060518' \
        -H 'accept: application/json'`
      );
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>api 첫 발</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
      <WholeArea />
    </div>
  );
};
export default App;
