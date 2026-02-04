import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Chart from './components/Chart';
import Calculator from './components/Calculator';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Navbar />
      <Hero />
      <Features />
      <Chart />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
