import React, { useEffect, useState } from "react";
import styles from "./Cont1.module.css";

const Cont1 = ({ currentData }) => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString();
  const day = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div>
      <div className={styles.pic}>
        <img
          src="https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
        />
        <div className={styles.temp}>{currentData.temp + " °C"}</div>
        <div className={styles.city}>{currentData.city}</div>
        <div className={styles.date}>
          <div>Time: {time.toLocaleTimeString()}</div>
          <div className={styles.day}>
            <div>{`${day} & ${date}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont1;