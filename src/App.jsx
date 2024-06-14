
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import IADS from "./pages/Analisis/IADS";
import ACOB from "./pages/Analisis/ACOB";
import DSMC from "./pages/Analisis/DSMC";
import DSMA from "./pages/Analisis/DSMA";

import T1 from "./pages/Teoria/T1";
import T2 from "./pages/Teoria/T2";
import T3 from "./pages/Teoria/T3";

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        //Zona de analisis
        <Route path="/IADS" element={<IADS />} />
        <Route path="/ACOB" element={<ACOB />} />
        <Route path="/DSMC" element={<DSMC />} />
        <Route path="/DSMA" element={<DSMA />} />
        //Zona de Teoria
        <Route path="/T1" element={<T1 />} />
        <Route path="/T2" element={<T2 />} />
        <Route path="/T3" element={<T3 />} />
      </Routes>
    </Router>
  );
}


export default App;
