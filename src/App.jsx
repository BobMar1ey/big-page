import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Web from "./components/Web/Web";
import Work from "./components/Work/Work";
import Testimonials from "./components/Testimonials/Testimonials";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Marquee from "./components/Marquee/Marquee";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Web />
        <Work />
        <Steps />
        <Testimonials />
        <About />
        <Blog />
        <Marquee />
        <Footer />
      </main>
    </div>
  );
}

export default App;
