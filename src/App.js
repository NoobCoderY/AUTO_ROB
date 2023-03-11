import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Efficiency from "./component/efficiency.jsx"
import Home from './component/Home';
import ContactPage from './component/ContactPage';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
    <Route path="/efficiency" element={<Efficiency></Efficiency>}></Route>
    <Route path="/contacts" element={<ContactPage></ContactPage>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
