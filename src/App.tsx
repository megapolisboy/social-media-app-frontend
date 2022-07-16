import "./App.css";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { useEffect } from "react";
import { getCurrentUser, logout } from "./features/userSlice";
import { useJwt } from "react-jwt";
import PostDetailsPage from "./pages/PostDetailsPage";
import HomePage from "./pages/HomePage";
import MessagesPage from "./pages/MessagesPage";
import ProfilePage from "./pages/ProfilePage";
import SavedPostsPage from "./pages/SavedPostsPage";
import SettingsPage from "./pages/SettingsPage";
import { tokenLogout } from "./features/tokenSlice";

function App() {
  const token = useAppSelector((state) => state.token.token) ?? "";
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const { decodedToken, isExpired } = useJwt(token);
  useEffect(() => {
    if (decodedToken && isExpired) {
      dispatch(logout());
      dispatch(tokenLogout());
    } else if (token && !currentUser) {
      dispatch(getCurrentUser());
    }
  }, []);

  return (
    <Provider store={store}>
      <div className="max-w-[2024px] mx-auto">
        <BrowserRouter>
          <Routes>
            {(!token || !currentUser) && (
              <>
                <Route path="/auth" element={<LoginPage />} />
                <Route path="*" element={<Navigate replace to="/auth" />} />
              </>
            )}
            {token && currentUser && (
              <>
                <Route path="/" element={<HomePage />} />
                <Route path="/messages" element={<MessagesPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/savedPosts" element={<SavedPostsPage />} />
                <Route path="/settings" element={<SettingsPage />} />

                {/* This gonna be deleted */}

                <Route path="/posts/:id" element={<PostDetailsPage />} />
                <Route path="/auth" element={<Navigate replace to="/" />} />
                <Route path="/:search" element={<HomePage />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
