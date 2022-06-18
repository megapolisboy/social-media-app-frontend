import MainPage from "./pages/MainPage";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./app/store"

function App() {
  return (
    <Provider store={store} >
       <div className="max-w-[2024px] mx-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
