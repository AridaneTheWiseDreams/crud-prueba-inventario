import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import ProductService from "../services/ProductService";
import { Card } from "../components/Card";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const getAllProducts = async () => {
    const data = await ProductService.getAllProdructs();
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);

    if (searchQuery === "") {
      return setFilteredProducts(products);
    }

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <h1 className="text-center mt-4 font-bold text-4xl">Productos</h1>
      <div className="flex justify-center mt-10 w-full">
        <div className="flex justify-center w-[90%] flex-wrap gap-4">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              title={product.title}
              material={product.material}
              stock={product.stock}
            />
          ))}
        </div>
      </div>
    </>
  );
}
