import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import NewsLetter from "./components/newsLetter";
import Institutional from "./pages/Institutional";
import Footer from "./components/Footer";
import AsideMenu from "./components/AsideMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Institutional />,
  },
]);

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
      <NewsLetter />
      <Footer />
    </div>
  );
}

export default App;
