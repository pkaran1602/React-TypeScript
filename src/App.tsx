import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Header from "./component/header/Header";
function App() {
  const Home = React.lazy(() => import("./pages/home/Home"));
  const About = React.lazy(() => import("./pages/about/About"));
  const Contact = React.lazy(() => import("./pages/contact/Contact"));
  const Practice = React.lazy(() => import("./pages/practice/Practice"));


  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading....</div>}>
        <Header />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/practice" element={<Practice />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
