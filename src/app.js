import {HashRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Housing from "./pages/housing";
import Error from "./pages/error";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    //HashRouter : permet la mise en ligne de l'appli React lorsque l'on utilise 'react-router-dom'
    <HashRouter>
      <Header />

      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="products/:productId" element={<Housing />}/>
          <Route path="*" element={<Error />}/>
      </Routes>
      
      <Footer />
    </HashRouter>
  )
}
export default App;
