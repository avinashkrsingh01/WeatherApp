import React from "react";
import axios from "axios";
import styles from "./Cont2.module.css";

const Cont2 = ({ currentData, setCurrentData }) => {
  const api_key = "a8911bc75882ba9beea69f5c549453ac";
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      let element = document.getElementById("searchBar");
      if (element.value === "") {
        return;
      }

      const url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${api_key}`;

      const response = (await axios.get(url)).data;
      setCurrentData({
        temp: response.main.temp,
        city: response.name,
        humidity: response.main.humidity,
        windSpeed: response.wind.speed,
        visibility: response.visibility,
        weather: response.weather[0].main,
      });
      console.log(response);
      element.value = "";
    } catch (error) {
      alert("City does't exist");
      console.log(error);
    }
  };

  return (
    <div className={styles.cont2}>
      <form className={styles.topBar} onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="search city"
          id="searchBar"
          className={styles.input}
        />
        <button className={styles.icon} onClick={handleSearch}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      <div className={styles.sun}>
        <img
          src="https://cdn0.iconfinder.com/data/icons/weather-web-app-ui-colored/100/weather-20-512.png"
          alt=""
        />
        <span className={styles.weather}>{currentData.weather}</span>
      </div>
      <div className={styles.flat}>
        <div className={styles.flat1}>
          <div className={styles.box}>
            <i className="fa-solid fa-temperature-quarter"></i>
            <span>Temprature</span>
            <div className={styles.season}>{currentData.temp + " °C"}</div>
          </div>

          <div className={styles.box}>
            <i className="fa-solid fa-droplet"></i>
            <span>Humidity</span>
            <div className={styles.season}>{currentData.humidity + " %"}</div>
          </div>
        </div>

        <div className={styles.flat2}>
          <div className={styles.box}>
            <i className="fa-solid fa-wind"></i>
            <span>Wind Speed</span>
            <div className={styles.season}>
              {currentData.windSpeed + " Km/Hr"}{" "}
            </div>
          </div>

          <div className={styles.box}>
            <i className="fa-solid fa-eye"></i>
            <span>Visibility</span>
            <div className={styles.season}>{currentData.visibility}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cont2;