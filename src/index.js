import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import {store} from "./app/store";
import {Provider} from "react-redux";
import {extendedApiSlice as extendedApiSlicePlayer} from "./features/players/playerSlice";
import {extendedApiSlice as extendedApiSliceMatches} from "./features/matches/matchSlice";
import {extendedApiSlice as extendedApiSliceConfig} from "./features/config/configSlice";

store.dispatch(extendedApiSlicePlayer.endpoints.getPlayers.initiate());
store.dispatch(extendedApiSliceMatches.endpoints.getMatches.initiate());
store.dispatch(extendedApiSliceConfig.endpoints.getConfig.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
