import logo from './logo.svg';
import './App.css';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Courses from './components/layouts/Courses';

function App() {
  return (
    <div className="App">
       <Header />
       <Courses />
       <Footer />
    </div>
  );
}

export default App;
