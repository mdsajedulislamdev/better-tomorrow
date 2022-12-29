import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact/Contact";
import Event from "./Components/Event/Event";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import MakeDonation from "./Components/MakeDonation/MakeDonation";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Service from "./Components/Service/Service";
import TopNav from "./Components/TopNav/TopNav";

function App() {
  return (
    <div>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/service" element={<Service></Service>}></Route>
        <Route path="/event" element={<Event></Event>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/donate" element={<MakeDonation></MakeDonation>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
