import React, { useState } from "react";

function MenuItem({ item }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <button onClick={() => addToCart(item)}>Add to cart</button>
    </div>
  );
}

export default MenuItem;
