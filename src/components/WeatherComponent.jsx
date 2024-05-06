"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherComponent = () => {
  const [location, setLocation] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      });
    }
  }, []);

  useEffect(() => {
    // Fetch weather data when location is available
    if (location) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=edbc70af22a3e722b25262ba23fc8f2d`
          );
          setWeatherData(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching weather data:', error);
        }
      };
      fetchData();
    }
  }, [location]);

  if (!location) {
    return <div>Getting location...</div>;
  }

  if (loading) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div>
    <div>
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].main}</p>
    </div>
      <p>Temperature: {weatherData.main.temp}</p>
      
    </div>
  );
};

export default WeatherComponent;
