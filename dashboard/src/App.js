import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ViewBooks from "./pages/ViewBooks";
import AddBooks from "./pages/AddBooks";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<ViewBooks />} />
      <Route path="/addbooks" element={<AddBooks />} />
    
    
    
   
 
    </Routes>
  </BrowserRouter>
  );
}

export default App;
