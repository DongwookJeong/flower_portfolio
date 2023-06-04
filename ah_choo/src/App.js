import { useState } from "react";
import axios from "axios";
import key from "./key";
const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const res = await axios.get(
        `http://apis.data.go.kr/1360000/HealthWthrIdxServiceV3?&apiKey=${key}`
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
    </div>
  );
};
export default App;
