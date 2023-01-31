import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Housing from "./pages/housing";
import Error from "./pages/error";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    //BrowserRouter basename = "/P7-Kasa" : permet la mise en ligne de l'appli React lorsque l'on utilise 'react-router-dom'
    <BrowserRouter basename = "/P7-Kasa">
      <Header />

      <Routes>
          <Route path = "/" element = { <Home /> } />
          <Route path = "/about" element = { <About /> } />
          <Route path = "products/:productId" element = { <Housing /> } />
          <Route path = "*" element = { <Error /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App;
