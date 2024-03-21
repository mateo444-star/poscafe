import React from "react";
import CombinedRectangles from "../src/component/CombinedRectangles";
import CombinedStyles from "../src/component/CombinedStyles";
import CustomText from "../src/component/CustomText";
import Leftbar from "./component/Leftbar";
import Rectangle19 from "../src/component/Rectangle19";
import Rectangle22 from "../src/component/Rectangle22";
import SearchBar from "./component/SearchBar";
import Categories from "../src/component/Categories";
import Fullbg from "./component/Fullbg";
import ProductCard from "./component/ProductCard";
import EllipseComponent from "../src/component/EllipseComponent";
import Cart from "../src/component/Cart";
function App() {
  return (
    <div className="App">
      {" "}
      <Fullbg />
      <Rectangle22 />
      <Rectangle19 />
      <CombinedRectangles />
      <CustomText />
      <CombinedStyles />
      <SearchBar />
      <ProductCard /> <Categories /> <Leftbar />
      <EllipseComponent />
      <Cart />
    </div>
  );
}

export default App;
