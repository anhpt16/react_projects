import {AllRoute} from "./routes/AllRoute";
import { Header, Footer } from "./components";

import './App.css';

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