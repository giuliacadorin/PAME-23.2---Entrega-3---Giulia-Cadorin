import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <p>{item.name}</p>
            <p>Quantidade: {item.quantity}</p>
            <p>Preço: {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
