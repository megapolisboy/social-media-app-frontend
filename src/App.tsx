import MainPage from "./pages/MainPage";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { logout } from "./features/userSlice";
import { useJwt } from "react-jwt";

function App() {
  const token = useAppSelector((state) => state.user.token) ?? "";
  const dispatch = useAppDispatch();
  const { decodedToken, isExpired } = useJwt(token);
  useEffect(() => {
    if (decodedToken && isExpired) {
      dispatch(logout());
    }
  });
  return (
    <div className="max-w-[2024px] mx-auto">
      <BrowserRouter>
        <Routes>
          {/* {!token && (
            <Route path="*" element={<Navigate replace to="/auth" />} />
          )}
          {!token && (
            <Route path="/" element={<Navigate replace to="/auth" />} />
          )}
          {token && (
            <Route path="/auth" element={<Navigate replace to="/" />} />
          )} */}
          <Route path="/" element={<MainPage />} />
          <Route path="/auth" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
