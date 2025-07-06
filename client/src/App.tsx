import "./App.css"
import { AboutUsLoader } from "./pages/AboutUs/AboutUsLoader";
import { Blog } from "./pages/Blog/Blog";
import { Footer } from "./pages/Footer/Footer";
import { Gallery } from "./pages/Gallery/Gallery";
import { Guests } from "./pages/Guests/Guests";
import { Header } from "./pages/Header/Header";
import { Home } from "./pages/Home/Home";
import { Schedule } from "./pages/Schedule/Schedule";
import { SkillsLoader } from "./pages/Skills/SkillsLoader";
import { Contact } from "./pages/Сontact/Сontact";

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header />
      </header>
      <main>
        <div className="screens">
          <section id="home" className="screen screen--home">
            <Home />
          </section>
          <section id="about" className="screen screen--about">
            <AboutUsLoader />
          </section>
          <section className="screen screen--skills" id="skills">
            <SkillsLoader />
          </section>
          <section className="screen screen--blog" id="blog">
            <Blog />
          </section>
          <section className="screen screen--gallery" id="gallery">
            <Gallery />
          </section>
          <section className="screen screen--guests" id="guests">
            <Guests />
          </section>
          <section className="screen screen--schedule" id="schedule">
            <Schedule />
          </section>
          <section className="screen screen--contact" id="contact">
            <Contact />
          </section>
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
