import "./App.css";
import { Home, About, Speaker, Event, Sponsor, Contact } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Speaker />
      <Event />
      <Sponsor />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
