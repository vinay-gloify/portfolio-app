import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Special from "./components/Special";
import Testimonials from "./components/Testimonials";
import Worked from "./components/Worked";
import YourTurn from "./components/YourTurn";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
    <ScrollToTop/>
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
