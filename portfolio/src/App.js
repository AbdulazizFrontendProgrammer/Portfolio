import React, { useState } from 'react';
import products from "./assets/fake-data/products";
import { Col } from 'reactstrap';
import ProductCard from "./Components/ProductCard";
function App() {
  const [allProducts, setAllProducts] = useState(products);
  return (
    <div>
      {allProducts.map((item) => (
        <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
          <ProductCard item={item} />
        </Col>
      ))}
    </div>
  )
}
export default App;