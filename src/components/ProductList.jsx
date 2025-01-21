
//Search 


import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Xəta:", error));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  
  

  return (
    <div>
      <h1>Məhsullar</h1>
      <input
        type="text"
        placeholder="Məhsul axtar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: "10px",
          marginBottom: "20px",
          width: "100%",
          maxWidth: "400px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "10px",
                width: "200px",
                textAlign: "center",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                style={{ width: "100px", height: "100px", objectFit: "contain" }}
              />
              <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
                {product.title}
              </h3>
              <p style={{ color: "green" }}>Qiymət: ${product.price}</p>
              <p style={{ fontSize: "14px" }}>{product.category}</p>
            </div>
          ))
        ) : (
          <p>Axtarışa uyğun məhsul tapılmadı.</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
