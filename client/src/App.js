import Categories from "./components/sidebar";
import PlusMinus from "./components/AddMinus";
import Home from "./components/pages/Home"
import MainCourse from "./components/pages/MainCourse";
import Beverages from "./components/pages/Beverages";
import Dessert from "./components/pages/Desserts";
import {Router, Routes, Route} from "react-router-dom"


function App() {
  return (
    <div className="app">
      <Categories/>
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Main Course" element={<MainCourse/>} />
        <Route path = "/Beverages" element={<Beverages/>} />
        <Route path="/Desserts" element={<Dessert/>}/>
      </Routes>
      


            
    </div>
  );
}

export default App;
