import './App.css';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Member from './Components/Member';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Portfolio/>
      <Member/>
      <Footer/>
    </div>
  );
}

export default App;
