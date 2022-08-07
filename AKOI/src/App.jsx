import { ProductPage } from "./Components/Product.jsx";
import "./App.css";
import Tab from "./Components/Image";
import { Header } from "./Components/Header";
import { SideNavbar } from "./Components/SideNavbar";

function App() {
  return (
    <div>
      <Header />
      <Tab />
      <SideNavbar />
      <ProductPage />
      <Tab />
    </div>
  );
}

export default App;
