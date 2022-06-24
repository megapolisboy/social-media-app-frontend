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
              <Route path="*" element={<Navigate replace to="/auth" />} />
            )}
            {!token && (
              <Route path="/" element={<Navigate replace to="/auth" />} />
            )}
            {token && (
              <Route path="/auth" element={<Navigate replace to="/" />} />
            )}
            <Route path="/" element={<MainPage />} />
            <Route path="/auth" element={<LoginPage />} />
            <Route path="/:id" element={<PostDetailsPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
