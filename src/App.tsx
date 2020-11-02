import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

// Constants
import { API_URL_LIST } from './constants/constants';

// Firebase
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { FirebaseConfig } from './firebase/config';

// Firebase hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

// Initialize firebase app
firebase.initializeApp(FirebaseConfig);

// Firebase global variables
const auth = firebase.auth();
const firestore = firebase.firestore();

// Components
import { SignIn } from './components/SignIn';
// import { MainPanel } from './components/MainPanel';
import ComboBox from './components/ComboBox';

// Types
import { EuiComboBoxOptionOption } from '@elastic/eui';
import { Town } from './types/types';

// Utils
import { convertDataToComboOption } from './utils/dataMapping';

function App(): JSX.Element {
  // Firebase authentication
  const [user] = useAuthState(auth);

  // Firestore storage
  const searchesRef = firestore.collection('searches');
  const query = searchesRef.orderBy('NOMBRE').limit(3);
  const [values] = useCollectionData<Town>(query, { idField: 'id' });

  // const [loading, setLoading] = useState<boolean>(false);
  const [dataFromApi, setDataFromApi] = useState<EuiComboBoxOptionOption[]>([]);
  const [activeOptions, setActiveOptions] = useState<EuiComboBoxOptionOption[]>(
    []
  );

  useEffect(() => {
    // Firestore intiial fetch
    // We need to convert from CollectionData into EuiComboBoxOptionOption[]
    values && setActiveOptions(convertDataToComboOption(values));
    console.log('Values', values);
  }, [values]);

  useEffect(() => {
    searchesRef.add({
      activeOptions,
    });
  }, [setActiveOptions]);

  //  Data fetching API data fetch + converts it to type EuiComboBoxOptionOption[]
  useEffect(() => {
    // setLoading(true);

    // API
    const apiUrl = API_URL_LIST;
    axios
      .get(apiUrl)
      .then(({ data }: AxiosResponse<Town[]>) => {
        // setLoading(false);
        setDataFromApi(convertDataToComboOption(data));
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header>
        <div className="credits">
          <h3 className="bold">IOMED</h3>
          <h3 className="thin">MIGUEL HERNANZ</h3>
        </div>
        <div className="heading-wrapper centered">
          <h1>
            sunshine <span>app</span>
          </h1>
        </div>
      </header>
      <main className="app">
        <section className="credentials">
          <div className="credential shadow border round">
            <h2 className="neutral">Login</h2>
            <form>
              <input
                className="text-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <div className="form-actions login">
                <button className="google"></button>
                <button className="primary"></button>
              </div>
              <input
                className="text-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </form>
          </div>
          <span className="delimiter">OR</span>
          <div className="credential shadow border round">
            <h2 className="neutral">Sign up</h2>
            <form>
              <input
                className="text-input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <div className="form-actions signup">
                <button className="secondary"></button>
              </div>
              <input
                className="text-input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </form>
          </div>
        </section>
        <section className="search-container">
          <input
            type="text"
            name="search"
            id="search"
            className="search-input round shadow border"
            placeholder="Search"
          />
        </section>
        <section className="cards-container">
          <article className="card border shadow round centered">
            <h2 className="card__heading">Barcelona</h2>
            <span className="card__subheading big">Cataluña</span>
            <div className="card__details">
              <div className="detail">
                <strong>27 °</strong>
                <span>Temperature</span>
              </div>
              <div className="detail">
                <strong>54 %</strong>
                <span>Rain probability</span>
              </div>
            </div>
          </article>
          <article className="card border shadow round centered">
            <h2 className="card__heading">Barcelona</h2>
            <span className="card__subheading big">Cataluña</span>
            <div className="card__details">
              <div className="detail">
                <strong>27 °</strong>
                <span>Temperature</span>
              </div>
              <div className="detail">
                <strong>54 %</strong>
                <span>Rain probability</span>
              </div>
            </div>
          </article>
          <article className="card border shadow round centered">
            <h2 className="card__heading">Barcelona</h2>
            <span className="card__subheading big">Cataluña</span>
            <div className="card__details">
              <div className="detail">
                <strong>27 °</strong>
                <span>Temperature</span>
              </div>
              <div className="detail">
                <strong>54 %</strong>
                <span>Rain probability</span>
              </div>
            </div>
          </article>
        </section>

        {user ? (
          <ComboBox
            comboBoxData={dataFromApi}
            activeOptions={activeOptions}
            setActiveOptions={setActiveOptions}
            searchesRef={searchesRef}
          />
        ) : (
          <SignIn auth={auth} />
        )}
      </main>
      <footer className="built-with border shadow">
        <div className="built-with__container">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 20.0012V40.0012H40.0012V0H0V20.0012ZM32.2356 18.4075C33.2512 18.6613 34.0263 19.1125 34.7375 19.8488C35.1063 20.2425 35.6519 20.96 35.6962 21.1312C35.7087 21.1812 33.9694 22.35 32.915 23.0044C32.8775 23.0294 32.7244 22.865 32.5525 22.6106C32.0381 21.8606 31.4987 21.5375 30.6731 21.4806C29.4606 21.3981 28.6731 22.0331 28.6856 23.0931C28.6856 23.4044 28.7294 23.5881 28.8569 23.8431C29.1238 24.3956 29.6194 24.7256 31.1744 25.3994C34.0381 26.6306 35.2631 27.4431 36.0244 28.5994C36.8744 29.8881 37.0656 31.9456 36.4881 33.4756C35.8531 35.1394 34.2787 36.2694 32.0631 36.6444C31.3775 36.765 29.7519 36.7462 29.0156 36.6131C27.4094 36.3275 25.8856 35.5337 24.9456 34.4925C24.5769 34.0862 23.86 33.0256 23.9044 32.9487C23.9231 32.9237 24.0888 32.8219 24.2731 32.7137L25.7588 31.8575L26.9088 31.1906L27.15 31.5469C27.4862 32.0612 28.2231 32.7656 28.6675 33.0006C29.9438 33.6737 31.6963 33.5781 32.5594 32.8038C32.9281 32.4675 33.08 32.1181 33.08 31.6037C33.08 31.14 33.0238 30.9369 32.7819 30.5881C32.4706 30.1444 31.8356 29.7694 30.0319 28.9881C27.9681 28.0994 27.0794 27.5469 26.2669 26.6706C25.7969 26.1625 25.3525 25.35 25.1681 24.6706C25.0156 24.1056 24.9775 22.6894 25.0981 22.1181C25.5231 20.1181 27.0281 18.7338 29.2 18.3213C29.905 18.1881 31.5438 18.2388 32.235 18.41L32.2356 18.4075ZM22.845 20.0762L22.8575 21.7138H17.6513V36.5075H13.9688V21.7138H8.7625V20.1075L8.80625 18.4575C8.825 18.4325 11.9938 18.42 15.835 18.4263L22.8256 18.445L22.845 20.0762Z"
              fill="#007ACC"
            />
          </svg>
          <svg
            width="30"
            height="41"
            viewBox="0 0 30 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5251 14.4474L15.5214 18.1724L11.8064 10.6787L13.7289 6.36869C14.2289 5.49369 15.0089 5.50369 15.4964 6.36869L19.5251 14.4474Z"
              fill="#FFA000"
            />
            <path
              d="M11.8063 10.6788L15.5213 18.1726L0.558838 32.0913L11.8063 10.6788Z"
              fill="#F57F17"
            />
            <path
              d="M23.9038 8.75373C24.6188 8.06623 25.3588 8.30123 25.5476 9.27498L29.4426 31.9062L16.5326 39.6562C16.0826 39.9062 14.8826 40.0137 14.8826 40.0137C14.8826 40.0137 13.7901 39.8837 13.3738 39.6387L0.558838 32.0912L23.9038 8.75373Z"
              fill="#FFCA28"
            />
            <path
              d="M11.8063 10.6788L0.560059 32.0913L5.56881 0.797536C5.75381 -0.177464 6.30881 -0.271214 6.80381 0.588786L11.8063 10.6788Z"
              fill="#FFA000"
            />
          </svg>
          <svg
            width="44"
            height="39"
            viewBox="0 0 44 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.0002 23.3903C24.0609 23.3903 25.7314 21.7197 25.7314 19.6591C25.7314 17.5984 24.0609 15.9279 22.0002 15.9279C19.9396 15.9279 18.269 17.5984 18.269 19.6591C18.269 21.7197 19.9396 23.3903 22.0002 23.3903Z"
              fill="#00D8FF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22.0003 12.0726C27.01 12.0726 31.6638 12.7915 35.1728 13.9995C39.4006 15.455 42 17.6612 42 19.6589C42 21.7407 39.2451 24.0845 34.705 25.5888C31.2726 26.726 26.7558 27.3196 22.0003 27.3196C17.1247 27.3196 12.5078 26.7624 9.03667 25.5763C4.64509 24.0752 2 21.7011 2 19.6589C2 17.6774 4.48191 15.4883 8.65029 14.035C12.1723 12.807 16.9411 12.0726 21.9997 12.0726H22.0003Z"
              stroke="#00D8FF"
              strokeWidth="2.73408"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.3961 15.8877C17.8989 11.548 20.8464 7.87566 23.6459 5.43942C27.0188 2.50411 30.2286 1.35456 31.9591 2.35246C33.7626 3.39245 34.4166 6.94991 33.4516 11.6342C32.7227 15.1758 30.9798 19.3851 28.6041 23.5046C26.1683 27.7282 23.3792 31.4494 20.6179 33.863C17.1237 36.9175 13.7456 38.0228 11.9766 37.0026C10.26 36.0134 9.60353 32.7692 10.427 28.4321C11.1228 24.7676 12.8689 20.2698 15.3953 15.8876L15.3961 15.8877Z"
              stroke="#00D8FF"
              strokeWidth="2.73408"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4024 23.5157C12.8926 19.1809 11.1838 14.7924 10.4706 11.1504C9.61198 6.76222 10.219 3.40714 11.948 2.40634C13.7496 1.3633 17.1584 2.57324 20.7347 5.74878C23.4387 8.14962 26.2153 11.7611 28.5979 15.8767C31.0407 20.0963 32.8715 24.3712 33.5837 27.9689C34.485 32.5216 33.7556 36.0002 31.9882 37.0233C30.2733 38.0161 27.1352 36.965 23.789 34.0855C20.9618 31.6527 17.937 27.8935 15.4024 23.5156V23.5157Z"
              stroke="#00D8FF"
              strokeWidth="2.73408"
            />
          </svg>

          <h3 className="especial">BUILT WITH</h3>
          <svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.4338 17.2145C33.0351 17.2227 31.8244 17.5583 30.8088 18.0583C30.4338 17.3158 30.0588 16.6677 29.9963 16.1833C29.9257 15.6208 29.8401 15.277 29.9257 14.6052C30.0113 13.9333 30.4026 12.9802 30.4026 12.902C30.3951 12.8314 30.3163 12.4877 29.5119 12.4802C28.7076 12.4727 28.0119 12.6364 27.9338 12.8477C27.7943 13.238 27.6819 13.6375 27.5976 14.0433C27.4569 14.7777 25.9882 17.3795 25.1519 18.747C24.8782 18.2158 24.6438 17.747 24.5969 17.372C24.5263 16.8095 24.4407 16.4658 24.5263 15.7939C24.6119 15.122 25.0032 14.1689 25.0032 14.0908C24.9957 14.0202 24.9169 13.6764 24.1126 13.6689C23.3082 13.6614 22.6126 13.8252 22.5344 14.0364C22.4563 14.2477 22.3701 14.7477 22.1982 15.232C22.0338 15.7164 20.0807 20.0608 19.5732 21.1933C19.3151 21.7714 19.0888 22.2327 18.9244 22.5452C18.7601 22.8577 18.9169 22.5689 18.9013 22.6002L18.6826 23.0145V23.022C18.5732 23.2177 18.4557 23.4052 18.4013 23.4052C18.3626 23.4052 18.2838 22.8814 18.4169 22.1627C18.7063 20.6545 19.4094 18.3027 19.4013 18.217C19.4013 18.1783 19.5344 17.7639 18.9482 17.5527C18.3776 17.3414 18.1744 17.6933 18.1276 17.6933C18.0807 17.6933 18.0413 17.8183 18.0413 17.8183C18.0413 17.8183 18.6744 15.1695 16.8301 15.1695C15.6738 15.1695 14.0801 16.4277 13.2907 17.5758L9.30569 19.7558L9.21944 19.662C6.98632 17.277 2.85319 15.5895 3.02507 12.3864C3.08757 11.222 3.49382 8.15141 10.9626 4.43266C17.0801 1.38578 21.9794 2.22141 22.8313 4.08078C24.0426 6.73703 20.2138 11.6745 13.8538 12.387C11.4319 12.6608 10.1582 11.7227 9.83757 11.3714C9.50132 11.0039 9.45444 10.9883 9.32944 11.0589C9.12632 11.1683 9.25132 11.4964 9.32944 11.692C9.51694 12.1845 10.2982 13.0595 11.6263 13.497C12.7907 13.8802 15.6344 14.0908 19.0726 12.7627C22.9244 11.2702 25.9326 7.12953 25.0494 3.66891C24.1507 0.145159 18.3069 -1.01109 12.7826 0.950159C9.49382 2.12078 5.93757 3.94828 3.37507 6.34703C0.321941 9.19078 -0.162434 11.6758 0.0400662 12.707C0.751316 16.387 5.82132 18.7858 7.85257 20.5595L7.57132 20.7158C6.55569 21.2158 2.68819 23.2395 1.71944 25.3802C0.625691 27.802 1.89132 29.5445 2.73507 29.7789C5.34444 30.5058 8.01632 29.2008 9.46194 27.052C10.8994 24.9033 10.7276 22.1145 10.0638 20.8408L10.0401 20.7939L10.8369 20.3252C11.3526 20.0202 11.8607 19.7389 12.3057 19.497C12.0557 20.177 11.8757 20.9814 11.7819 22.1533C11.6726 23.5283 12.2351 25.3095 12.9776 26.0133C13.3057 26.3183 13.6963 26.3258 13.9388 26.3258C14.7982 26.3258 15.1888 25.6145 15.6188 24.7633C16.1501 23.7239 16.6188 22.5208 16.6188 22.5208C16.6188 22.5208 16.0326 25.7789 17.6344 25.7789C18.2207 25.7789 18.8063 25.0208 19.0719 24.6302V24.6377C19.0719 24.6377 19.0876 24.6139 19.1188 24.5595C19.1813 24.4658 19.2126 24.4108 19.2126 24.4108V24.3952C19.4469 23.9889 19.9707 23.0589 20.7519 21.5202C21.7601 19.5358 22.7288 17.0514 22.7288 17.0514C22.7288 17.0514 22.8226 17.6608 23.1119 18.6608C23.2838 19.2545 23.6588 19.9033 23.9482 20.5358L23.5732 21.0514L23.5807 21.0595C23.3807 21.3245 23.1748 21.585 22.9632 21.8408C22.1663 22.7939 21.2132 23.8802 21.0882 24.1927C20.9394 24.5602 20.9707 24.8333 21.2601 25.052C21.4713 25.2083 21.8463 25.2395 22.2444 25.2083C22.9632 25.1614 23.4632 24.9814 23.7132 24.872C24.1642 24.7112 24.5903 24.4876 24.9788 24.2077C25.7601 23.6295 26.2369 22.8089 26.1901 21.7152C26.1663 21.1133 25.9713 20.5195 25.7288 19.957L25.9401 19.6445C27.1744 17.8395 28.1276 15.8552 28.1276 15.8552C28.1276 15.8552 28.2213 16.4645 28.5107 17.4645C28.6594 17.9727 28.9563 18.527 29.2219 19.0739C28.0657 20.0195 27.3388 21.1133 27.0888 21.832C26.6276 23.1602 26.9869 23.762 27.6669 23.9027C27.9719 23.9652 28.4094 23.8245 28.7376 23.6839C29.1438 23.5508 29.6363 23.3245 30.0894 22.9883C30.8707 22.4102 31.6207 21.6052 31.5819 20.5195C31.5582 20.0195 31.4257 19.527 31.2457 19.0583C32.2301 18.652 33.5038 18.4177 35.1207 18.6127C38.5976 19.0189 39.2851 21.1908 39.1519 22.097C39.0188 23.0033 38.2926 23.5033 38.0501 23.6595C37.8076 23.8083 37.7294 23.8627 37.7532 23.972C37.7844 24.1364 37.8938 24.1283 38.1051 24.097C38.3944 24.0502 39.9332 23.3545 39.9957 21.6827C40.0894 19.5339 38.0501 17.1902 34.4332 17.2139L34.4338 17.2145ZM7.61882 26.2552C6.47007 27.5133 4.85319 27.9895 4.16569 27.5833C3.42319 27.1533 3.71257 25.302 5.12694 23.9658C5.98632 23.1533 7.10382 22.4033 7.83819 21.942L8.54944 21.512C8.59632 21.4808 8.62757 21.4652 8.62757 21.4652C8.68257 21.4339 8.74507 21.3945 8.80757 21.3558C9.33132 23.262 8.83132 24.9339 7.62007 26.2545L7.61882 26.2552ZM16.0188 20.5439C15.6201 21.5208 14.7763 24.0283 14.2688 23.8877C13.8313 23.7702 13.5657 21.872 14.1826 19.9964C14.4951 19.0508 15.1594 17.9258 15.5501 17.4883C16.1832 16.7852 16.8707 16.5508 17.0426 16.8395C17.2457 17.2145 16.2688 19.9333 16.0188 20.5433V20.5439ZM22.9488 23.8564C22.7769 23.9427 22.6207 24.0052 22.5501 23.9583C22.4951 23.927 22.6207 23.8095 22.6207 23.8095C22.6207 23.8095 23.4882 22.8795 23.8319 22.4502L24.5119 21.5827V21.6764C24.5119 22.8014 23.4338 23.5514 22.9494 23.8564H22.9488ZM28.2926 22.6377C28.1676 22.5439 28.1832 22.2545 28.6051 21.3483C28.7694 20.9889 29.1444 20.387 29.7926 19.817C29.8707 20.0514 29.9176 20.2783 29.9101 20.4889C29.9019 21.8952 28.9019 22.4189 28.2926 22.6377Z"
              fill="#CF649A"
            />
          </svg>
          <svg
            width="28"
            height="40"
            viewBox="0 0 28 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.33854 40C9.10665 40 10.8023 39.2976 12.0526 38.0473C13.3028 36.7971 14.0052 35.1014 14.0052 33.3333V26.6666H7.33854C5.57043 26.6666 3.87474 27.369 2.6245 28.6192C1.37425 29.8695 0.671875 31.5652 0.671875 33.3333C0.671875 35.1014 1.37425 36.7971 2.6245 38.0473C3.87474 39.2976 5.57043 40 7.33854 40V40Z"
              fill="#0ACF83"
            />
            <path
              d="M0.671875 20C0.671875 18.2319 1.37425 16.5362 2.6245 15.286C3.87474 14.0358 5.57043 13.3334 7.33854 13.3334H14.0052V26.6667H7.33854C5.57043 26.6667 3.87474 25.9643 2.6245 24.7141C1.37425 23.4638 0.671875 21.7682 0.671875 20V20Z"
              fill="#A259FF"
            />
            <path
              d="M0.671875 6.66667C0.671874 4.89946 1.37354 3.20455 2.62265 1.95446C3.87177 0.704369 5.56613 0.00138063 7.33333 0L14 0V13.3333H7.33854C5.57043 13.3333 3.87474 12.631 2.6245 11.3807C1.37425 10.1305 0.671875 8.43478 0.671875 6.66667V6.66667Z"
              fill="#F24E1E"
            />
            <path
              d="M14.0054 0H20.672C22.4401 0 24.1358 0.702379 25.3861 1.95262C26.6363 3.20286 27.3387 4.89856 27.3387 6.66667C27.3387 8.43478 26.6363 10.1305 25.3861 11.3807C24.1358 12.631 22.4401 13.3333 20.672 13.3333H14.0054V0Z"
              fill="#FF7262"
            />
            <path
              d="M27.3387 20C27.3387 21.7681 26.6363 23.4638 25.3861 24.7141C24.1358 25.9643 22.4401 26.6667 20.672 26.6667C18.9039 26.6667 17.2082 25.9643 15.958 24.7141C14.7078 23.4638 14.0054 21.7681 14.0054 20C14.0054 18.2319 14.7078 16.5362 15.958 15.286C17.2082 14.0358 18.9039 13.3334 20.672 13.3334C22.4401 13.3334 24.1358 14.0358 25.3861 15.286C26.6363 16.5362 27.3387 18.2319 27.3387 20V20Z"
              fill="#1ABCFE"
            />
          </svg>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 0V34.375L0 29.9L30 40L40 35.8375V4.15625L30 0ZM19.5 5.85L10.3125 14.9375L4.78125 10.7687L2.5 11.5313L8.125 17.0938L2.5 22.6562L4.78125 23.4188L10.3125 19.25L19.5 28.3313L25 26V8.1875L19.5 5.85ZM19.5 12.3312V21.875L13.1875 17.0938L19.5 12.3312Z"
              fill="#007ACC"
            />
          </svg>
        </div>
      </footer>
    </>
  );
}

export default App;
