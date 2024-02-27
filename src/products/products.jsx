import React from "react";
import data from "../data/data";
import { Card } from "../componets/card/card";
import { ProductContainer } from "../store-card/store-products/product-container";

export const Products = () => {
  return (
    <div className="container">
      <ProductContainer />
      <div className="grid grid-cols-4 gap-5 pt-10">
        {data.map((product) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};
