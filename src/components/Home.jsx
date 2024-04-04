import { useState } from "react";
import Cont1 from "./Cont1";
import Cont2 from "./Cont2";
import styles from "./Home.module.css";

const Home = () => {
  const [currentData, setCurrentData] = useState({
    temp: 30.9,
    city: "New Delhi",
    humidity: "26",
    windSpeed: "3.0",
    visibility: "5000",
    weather: "clear",
  });

  return(
    <div className={styles.Home}>
      <Cont1 currentData={currentData} setCurrentData={setCurrentData}></Cont1>
      <Cont2 currentData={currentData} setCurrentData={setCurrentData}></Cont2>
    </div>
  )
};

export default Home;