import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import ErrorPage from "./Pages/ErrorPage";
import Navbar from "./components/NavBar/Navbar";
import Recipe from "./Pages/Recipe";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Home />} />

          <Route path="/catalogo/:categoryName">
            <Route index element={<Category />} />

            <Route path=":recipeName/:id" element={<Recipe />}>
              <Route path="" element={'Sei nella index della ricetta'} />
         
            </Route>
          </Route>

          <Route
            path="/catalogo/:categoryName/new"
            element={<ErrorPage status={500} />}
          />
       
          <Route path="*" element={<ErrorPage name="prova" status={404} />} />
        </Routes>
    </Router>
  );
}

export default App;
