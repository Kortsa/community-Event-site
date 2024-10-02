import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home/HomePage";
import Events from "./Pages/Events";
import About from "./Pages/About/About";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<HomePage />} />
            {/* <Route path="/events" element={<Events />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
