import BoilingVerdict from "./BoilingVerdict";
import { useState } from "react";

const Calculator = (props) => {
  const [temperature, setTemperature] = useState("");

  const handleChange = (e) => setTemperature(e.target.value);

  return (
    <fieldset>
      <legend>섭씨 온도를 확인하세요</legend>
      <input value={temperature} onChange={handleChange} />
      <BoilingVerdict celcius={parseFloat(temperature)} />
    </fieldset>
  );
};

export default Calculator;