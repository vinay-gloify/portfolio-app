import './App.css';
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Special from "./components/Special";
import Testimonials from "./components/Testimonials";
import Worked from "./components/Worked";
import YourTurn from "./components/YourTurn";

function App() {
  return (
    <>
      <a href="/" className="scrollToTop active bg-light"><i class="fas fa-angle-double-up"></i></a>
      <Navbar />
      <Hero />
      <Special />
      <Latest />
      <YourTurn />
      <Testimonials />
      <Worked />
      <Faq />
      <Footer />
    </>

  );
}

export default App;
