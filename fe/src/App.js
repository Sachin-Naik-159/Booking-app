// import logo from './logo.svg';
// import './App.css';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import VenueDetail from "./pages/VenueDetail";

import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import { Route, BrowserRouter, Routes, useNavigate } from "react-router-dom";

function App() {
  const api_URL = process.env.REACT_APP_BASE_API_URL;
  function DynamicRouting() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // active session login
    let reLogin = async () => {
      let token = { token: localStorage.getItem("token") }
      let res = await axios.post(`${api_URL}/auth/test`, token);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.result.user });
    }

    useEffect(() => {
      const userData = JSON.parse(localStorage.getItem("user"));
      if (userData) {
        //Authentication
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + localStorage.getItem("token");


        //when user has a login active session
        dispatch({ type: "LOGIN_SUCCESS", payload: userData });

        // reLogin()

      } else {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        dispatch({ type: "LOGIN_ERROR" });

      }
      // eslint-disable-next-line
    }, []);

    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/details" element={<VenueDetail />} />
      </Routes>
    );
  }

  return (
    <BrowserRouter>
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        rtl={true}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        transition={Zoom}
      />

      <DynamicRouting />
    </BrowserRouter>
  );
}

export default App;
