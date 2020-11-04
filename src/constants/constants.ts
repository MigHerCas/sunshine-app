/*
    Town list
    https://www.el-tiempo.net/api/json/v2/municipios

    >>>>>>>>>>>> API DOESN'T WORK HERE <<<<<<<<<<<<<
    Geographic and forecast data from a town
    https://www.el-tiempo.net/api/json/v2/provincias/[CODPROV]/municipios/[ID]

    Try: https://www.el-tiempo.net/api/json/v1/provincias/01/municipios/01001000000 (v1)
    Try: https://www.el-tiempo.net/api/json/v2/provincias/01/municipios/01001000000 (v2)
 */

export const API_URL_LIST = 'https://www.el-tiempo.net/api/json/v2/municipios';
export const API_URL_SEARCH = [
  'https://api.openweathermap.org/data/2.5/weather?q=',
  '&units=metric&appid=',
];
export const FIRESTORE_COLLECTION = 'municipios';
export const FIRESTORE_LIST_DOCUMENT = 'lista';
