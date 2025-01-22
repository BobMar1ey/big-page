import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Steps from "./components/Steps/Steps";
import Web from "./components/Web/Web";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <Web/>
        <Work/>
        <Steps/>
      </main>
    </div>
  );
}

export default App;
