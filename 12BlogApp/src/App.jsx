import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import authService from "./Appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Footer, Header } from "./Components";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div
      className="min-h-sc
  flex flex-wrap content-between bg-gray-500
  "
    >
      <div className="w-full block">
        <Header />
        <main>// outlet</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
