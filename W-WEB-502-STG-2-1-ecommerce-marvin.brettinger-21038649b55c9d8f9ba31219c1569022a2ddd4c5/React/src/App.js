import Header from "./components/Header";
import HeaderCategorie from "./components/HeaderCategorie";
import Footer from "./components/Footer";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <HeaderCategorie />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
