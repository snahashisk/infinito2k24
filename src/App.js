import "./App.css";
import { useRef } from "react";
import { Home, About, Speaker, Event, Sponsor, Contact } from "./pages";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const speakerRef = useRef(null);
  const eventRef = useRef(null);
  const sponsorRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleScrollToAbout = () => {
    scrollToRef(aboutRef);
  };

  const handleScrollToSpeaker = () => {
    scrollToRef(speakerRef);
  };

  const handleScrollToEvent = () => {
    scrollToRef(eventRef);
  };

  const handleScrollToSponsor = () => {
    scrollToRef(sponsorRef);
  };

  const handleScrollToContact = () => {
    scrollToRef(contactRef);
  };

  return (
    <>
      <Navbar
        onAboutClick={handleScrollToAbout}
        onSpeakerClick={handleScrollToSpeaker}
        onEventClick={handleScrollToEvent}
        onSponsorClick={handleScrollToSponsor}
        onContactClick={handleScrollToContact}
      />
      <Home />
      <About />
      <Speaker ref={speakerRef} />
      <Event ref={eventRef} />
      <Sponsor ref={sponsorRef} />
      <Contact ref={contactRef} />
      <Footer />
    </>
  );
}

export default App;
