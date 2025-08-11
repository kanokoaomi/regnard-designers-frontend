import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/authOperations";
import Loader from "./components/Loader/Loader";
import UpdatePicture from "./pages/UpdatePicturePage/UpdatePicturePage";

const AddPicture = React.lazy(() =>
  import("./pages/AddPicture/AddPicturePage")
);
const Register = React.lazy(() => import("./pages/Register/Register"));
const Login = React.lazy(() => import("./pages/Login/Login"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-picture" element={<AddPicture />} />
          <Route path="/update-picture/:id" element={<UpdatePicture />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
