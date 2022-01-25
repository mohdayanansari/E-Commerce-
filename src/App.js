import { Header } from "./components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Page Not Found!</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
