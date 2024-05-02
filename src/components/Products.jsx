import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Products = function () {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchData = async function () {
      try {
        const response = await fetch("https://fakestoreapi.com/products", {
          mode: "cors",
        });
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
    <Navbar />
    <div className="product">
      {products?(
      products.map((product) => (
        <div key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <img src={product.image} alt="" />
            <p>{product.price}</p>
        </div>
      ))
    ): 
    <p>Loading</p>
    }
    </div>
    </>
  );
};

export default Products;
