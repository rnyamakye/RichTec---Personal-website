import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "./Components/Navbar";
import "./App.css";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <nav className="flex justify-center ">
        <Navbar />
      </nav>
      <Routes>
        <Route index path="/" element={<Home />} />
      </Routes>
      <SpeedInsights />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
