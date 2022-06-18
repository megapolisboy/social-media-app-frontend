import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="44100760713-cf7f064j9uvj7q07cq76ilo3qmhp8ukn.apps.googleusercontent.com">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
