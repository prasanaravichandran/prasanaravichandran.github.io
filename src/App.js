import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Technologies from './components/technologies/technologies';
import Experience from './components/experience/experience';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="">
        <Header/>
      </header>
      <main>
        <Home/>
        <About/>
        <Skills/>
        <Technologies/>
        <Experience/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
