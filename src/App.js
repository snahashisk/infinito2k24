import "./App.css";
import { Home, About, Speaker, Event, Sponsor } from "./pages";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Speaker />
      <Event />
      <Sponsor />
    </>
  );
}

export default App;
