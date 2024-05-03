import { useEffect } from "react";
import { useState } from "react";
import Navbar from "./Navbar";

const Shop = function () {
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
    <div className="products">
      {products?(
      products.map((product) => (
        <div key={product.id} className="product">
            <h3 className="producttitle">{product.title}</h3>
            <img src={product.image} alt="" className="productimg"/>
            <p className="productprice">${product.price}</p>
        </div>
      ))
    ): 
    <p>Loading</p>
    }
    </div>
    </>
  );
};

export default Shop;
