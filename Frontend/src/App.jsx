import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Service from "./pages/Service";
import {Routes,Route} from 'react-router-dom';
import Hooks from "./hooks/Hooks";
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/services" element={<Service/>}></Route>
      <Route path="/useState" element={<State/>}/>
      <Route path="/hooks" element={<Hooks/>}/> 

      {/* <Route path="/state" element={<St} */}
    </Routes>
    </>
  )
}
export default App