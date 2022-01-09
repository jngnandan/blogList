import './App.css';
import Contact from '../src/components/Contact'
import Header from './components/Header';
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom"

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="*" element={<NotFound />} />

        </Routes>
      </Router>
      {/* <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
