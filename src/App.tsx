import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import NewsLetter from "./components/newsLetter";
import Institutional from "./pages/Institutional";
import Footer from "./components/Footer";
import FixedIcons from "./components/FixedIcon";
import Up from "./assets/svg/Up.svg";
import Wpp from "./assets/svg/Wpp.svg";

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
      <FixedIcons
        icons={[
          {
            action: () => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            imgUrl: Up,
          },
          {
            action: () => {
              window.open("https://api.whatsapp.com/send?phone=552225215720");
            },
            imgUrl: Wpp,
          },
        ]}
      />
      <Footer />
    </div>
  );
}

export default App;
