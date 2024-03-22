import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import ProductService from "../services/ProductService";
import { Card } from "../components/Card";
import { AddIcon } from "../components/icons/AddIcon";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import UsersProductsService from "../services/UsersProductsService";

export default function Products() {
  const rol = localStorage.getItem("rol");
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [titleProduct, setTitleProduct] = useState("");
  const [idProduct, setidProduct] = useState("");

  const navigate = useNavigate();

  const getAllProducts = async () => {
    const response = await ProductService.getAllProdructs();
    const data = response.data;

    if (Array.isArray(data)) {
      setProducts(data);
      setFilteredProducts(data);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  const handleOnSubmit = async (e) => {
    const response = await UsersProductsService.createOneUserProdructs({
      user_id: e.userId,
      product_id: e.productId,
      quantity_product: e.stock,
      type_process: e.type_process,
    });
    if (response.status === 200) {
      setIsOpen(!isOpen);
    }
  };

  const handleClick = async (e) => {
    if (e.type == "delete") {
      const response = await ProductService.deleteOneProdruct(e.id);
      if (response.status === 200) {
        getAllProducts();
      }
    }
    if (e.type == "update") {
      navigate("/product-manager", {
        state: {
          id: e.id,
          title: e.title,
          material: e.material,
          stock: e.stock,
          type: "update",
        },
      });
    }
    if (e.type == "open") {
      setidProduct(e.productId);
      setTitleProduct(e.productTitle);
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (searchQuery === "") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchQuery, products]);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Header onSearch={handleSearch} />
      <h1 className="text-center mt-4 font-bold text-4xl select-none">
        Productos
      </h1>
      <div className={`w-full relative ${rol !== "admin" ? "hidden" : ""}`}>
        <Link
          to={"/product-manager"}
          className="absolute -top-4 right-5 sm:right-2"
        >
          <AddIcon className="size-9 fill-green-400 " />
        </Link>
      </div>
      <div className="flex justify-center mt-10 w-full">
        <div className="flex justify-center w-[90%] flex-wrap gap-4">
          {products
            ? filteredProducts.map((product) => (
                <div key={product._id}>
                  <Card
                    title={product.title}
                    material={product.material}
                    stock={product.stock}
                    _id={product._id}
                    handleOnClick={handleClick}
                    rol={rol}
                  />
                  {isOpen ? (
                    <Modal
                      handleOnSubmit={handleOnSubmit}
                      handleOnClick={handleClick}
                      productName={titleProduct}
                      productId={idProduct}
                    />
                  ) : (
                    ""
                  )}
                </div>
              ))
            : ""}
        </div>
      </div>
    </>
  );
}
