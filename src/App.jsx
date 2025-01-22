import NewSignin from "./newSignin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./home";

export default function App() {
  const [isAuth, setAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {isAuth ? (
            <Route path="/" element={<Home />} />
          ) : (
            <Route path="/" element={<NewSignin setAuth={setAuth} />} />
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}