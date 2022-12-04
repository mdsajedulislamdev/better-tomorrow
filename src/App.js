import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Event from "./Components/Event/Event";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="service" element={<Service></Service>}></Route>
        <Route path="event" element={<Event></Event>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
