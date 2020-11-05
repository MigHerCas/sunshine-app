<h1 align="center">
  IOMED Sunshineapp
</h1>

React App written in Typescript that fetchs spanish towns list and allows to consult current that from a certain city or town.
[IOMED](https://iomed.es/) assessment.

---

What did I build this?

1. **To try to get a nice job.** Taking care of the react frontend part of a nice company is a dream for me.
2. **Cutting edge techstack.** Typescript, React, styled-components.
3. **Fresh design.** Own curated design built with `figma`. [Design](https://www.figma.com/file/L09AYG8lpH6giHCH1Mb4nC/sunshineapp)
4. **Firebase learning.** The assessment requires user authentication. Firebase auth was my choice as I wanted to dive into this service for the first time.
5. **Portfolio.** This helps me to show my skills with `palpable` content .


## Issues

Api required for town list: [link](https://www.el-tiempo.net/api) doesn't work in neither of v1 or v2 while searching for an especific town. 

> To fix this, I introduced OpenWeatherApi, which works flawlessly! 🚀


Links:

- [`OpenWeatherApi`](https://openweathermap.org/current)
- [`Elastic UI EuiComboBox`](https://elastic.github.io/eui/#/forms/combo-box)


## Install
```shell
yarn install 
```

## Usage

With [yarn](https://npmjs.org/) installed, run

```shell
yarn start 
```
    
To build

```shell
yarn build 
```

## What I will implement soon

As I've really enjoyed this project, I want to keep creating/improving some features:

- [React Select](https://react-select.com/home) select instead of [EuiComboBox](https://elastic.github.io/eui/#/forms/combo-box).
- Implement firestore workflow.
- Improve design.
- Deploy it.

## Author

Miguel Hernanz de Castro
