import MainPage from "./pages/MainPage";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { logout } from "./features/userSlice";
import { useJwt } from "react-jwt";
import { fetchPosts } from "./features/postsSlice";
import PostDetailsPage from "./pages/PostDetailsPage";
import { Intro } from "./pages/Intro";
import React from "react";

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
    <Provider store={store}>
      <div className="max-w-[2024px] mx-auto">
        <BrowserRouter>
          <Routes>
            {!token && (
              <>
                <Route path="/intro" element={<Intro/>} />
                <Route path="*" element={<Navigate replace to="/intro"/>} />
                <Route path="/signIn" element={<LoginPage/>} />
                <Route path="/signUp" element={<LoginPage />} />
              </>
            )}
            {token && (
              <>
                <Route path="/" element={<MainPage mode="Feed" />} />
                <Route path="/page" element={<MainPage mode="Page" />} />

                <Route path="/:id" element={<PostDetailsPage />} />
                <Route path="/auth" element={<Navigate replace to="/" />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
