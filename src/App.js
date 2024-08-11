import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';

const App = () => {
  return (
    <Theme accentColor="purple" grayColor="sand" radius="large" scaling="95%" >
      <Router>
        <Navbar />
        <Header />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </Theme>
  );
}

export default App;
