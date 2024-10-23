import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import Links from "./components/Links";

const App = () => {
  return (
    <Router>
      <div>
        <Links />
        {/* Include the Navbar at the top */}
        <Navbar />
        {/* <Home /> */}

        {/* Define routes for your pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Uncomment the following routes when their components are available */}
          {/* <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/news" element={<News />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
