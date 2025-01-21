import './App.css';
import { Header, Footer } from './components';
import { AllRoute } from './routes/AllRoute';

function App() {
  return (
    <div className="App">
      <Header />
      <AllRoute />
      <Footer />
    </div>
  );
}

export default App;
