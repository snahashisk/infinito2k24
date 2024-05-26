import "./App.css";
import {
  Home,
  About,
  Speaker,
  Event,
  Sponsor,
  Contact,
  Timeline,
  Gallery,
} from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Timeline />
      <Speaker />
      <Event />
      <Gallery />
      <Sponsor />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
