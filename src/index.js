import React from "react";
import ReactDOM from "react-dom/client";

import { Header } from "./Header";
import { Footer } from "./Footer";
import { Main } from "./Main";

function App() {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
