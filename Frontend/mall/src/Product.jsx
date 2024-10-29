import React, { useState } from 'react';
import productsData from './ProductData';

const ProductList = () => {
  const [products, setProducts] = useState(productsData);
  const [search, setSearch] = useState('');
  const [sortPrice, setSortPrice] = useState('lowToHigh');
  const [fastDelivery, setFastDelivery] = useState(false);
  const [inStock, setInStock] = useState(false);

  const handleSearch = (event) => setSearch(event.target.value);
  const handleSort = (event) => setSortPrice(event.target.value);
  const toggleFastDelivery = () => setFastDelivery(!fastDelivery);
  const toggleInStock = () => setInStock(!inStock);

  const filteredProducts = products
    .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => (sortPrice === 'lowToHigh' ? a.price - b.price : b.price - a.price))
    .filter((product) => (fastDelivery ? product.delivery === 'Same Day' : true))
    .filter((product) => (inStock ? product.stock === 'In-Stock' : true));

  return (
    <div className="main">
     
      <div className="rightSide">
        <div className="searchHead">
          <h3>Product</h3>
        </div>
        <div className="cardContainer" id="product-list">
          {filteredProducts.map((product) => (
            <div key={product.id} className="card in-stock">
              <img className="png" src={product.img} alt={product.name} />
              <div className="cardText">
                <strong className="photo">{product.name}</strong>
                <strong className="price">
                  ₹{product.price}
                  <p className="ps">₹{product.originalPrice}</p>
                </strong>
                <p>Delivery: {product.delivery}</p>
                <p>Stock: {product.stock}</p>
                <div className="addBtn">
                  <h2>Add to Cart</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
