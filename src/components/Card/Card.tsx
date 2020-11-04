import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { API_URL_SEARCH } from '../../constants/constants';
import { H2, Span, Strong } from '../styleguide/Typography';
import * as styles from './styles';

//! PLEASE NOTE THAT THE API IS NOT FUNCTIONAL WHILE SEARCHING FOR TOWN FORECAST
//! URLS:
/*
    Town list
    https://www.el-tiempo.net/api/json/v2/municipios

    >>>>>>>>>>>> API DOESN'T WORK HERE <<<<<<<<<<<<<
    Geographic and forecast data from a town
    https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios/[ID]

    Try: https://www.el-tiempo.net/api/json/v1/provincias/01/municipios/01001000000 (v1)
    Try: https://www.el-tiempo.net/api/json/v2/provincias/01/municipios/01001000000 (v2)
 */

interface Props {
  townName: string;
  provinceName: string;
}

// https://openweathermap.org/current#current_JSON
interface OpenWeatherApiResponse {
  weather: [
    {
      main: string;
    }
  ];
  main: {
    temp: number;
  };
}

export default function Card({ townName, provinceName }: Props): JSX.Element {
  const [townApiData, setTownApiData] = useState<OpenWeatherApiResponse>();

  useEffect(() => {
    // API
    const apiUrl = [
      API_URL_SEARCH[0],
      townName,
      API_URL_SEARCH[1],
      process.env.REACT_APP_WEATHER_APP_API_KEY,
    ].join('');

    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<OpenWeatherApiResponse>) => {
        setTownApiData(data);
      })
      .catch((error) => alert(error));
  }, []);
  return (
    <styles.Card className="border shadow round centered">
      <H2 className="card__heading">{townName}</H2>
      <Span className="card__subheading big">{provinceName}</Span>
      <div className="card__details">
        <div className="detail">
          <Strong>{townApiData?.main.temp} °C</Strong>
          <Span>Temperature</Span>
        </div>
        <div className="detail">
          <Strong>{townApiData?.weather[0].main}</Strong>
          <Span>Weather</Span>
        </div>
      </div>
    </styles.Card>
  );
}
