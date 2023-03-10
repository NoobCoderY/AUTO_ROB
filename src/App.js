import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Efficiency from "./component/efficiency.jsx"
import Home from './component/Home';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
    <Route path="/efficiency" element={<Efficiency></Efficiency>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
