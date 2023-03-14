import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route ,Routes} from 'react-router-dom';
import Efficiency from "./component/efficiency/efficiency.jsx"
import Home from './component/home/Home';
import ContactPage from "./component/contact/ContactPage.jsx";
import ResourcesPage from './component/ResourcePage/ResourcesPage';

function App() {
  return (
    <>
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<Home/>}></Route>
    <Route path="/efficiency" element={<Efficiency></Efficiency>}></Route>
    <Route path="/contacts" element={<ContactPage></ContactPage>}></Route>
    <Route path="/resourcepage" element={<ResourcesPage/>}></Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
