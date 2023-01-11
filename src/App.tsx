import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import NewsLetter from "./components/newsLetter";
import Home from "./pages/Home";
import Institutional from "./pages/Institutional";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/institucional",
    element: <Institutional />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <NewsLetter />
    </div>
  );
}

export default App;
