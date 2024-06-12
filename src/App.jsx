
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import IADS from "./pages/Analisis/IADS";
import ACOB from "./pages/Analisis/ACOB";
import DSMC from "./pages/Analisis/DSMC";
import DSMA from "./pages/Analisis/DSMA";

import P1 from "./pages/Preguntas/P1";
import P2 from "./pages/Preguntas/P2";
import P3 from "./pages/Preguntas/P3";
import P4 from "./pages/Preguntas/P4";

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
        //Zona de preguntas
        <Route path="/P1" element={<P1 />} />
        <Route path="/P2" element={<P2 />} />
        <Route path="/P3" element={<P3 />} />
        <Route path="/P4" element={<P4 />} />
        //Zona de Teoria
        <Route path="/T1" element={<T1 />} />
        <Route path="/T2" element={<T2 />} />
        <Route path="/T3" element={<T3 />} />
      </Routes>
    </Router>
  );
}


export default App;
