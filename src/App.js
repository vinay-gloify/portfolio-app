// import './App.css';
import Hero from "./components/Hero";
import Latest from "./components/Latest";
import Navbar from "./components/Navbar";
import Special from "./components/Special";
import Testimonials from "./components/Testimonials";
import YourTurn from "./components/YourTurn";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Special />
      <Latest />
      <YourTurn />
      <Testimonials />
    </>

  );
}

export default App;
