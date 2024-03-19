import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import ProductService from "../services/ProductService";

export function ProductManager() {
  const navigate = useNavigate();
  const location = useLocation();

  const titleRef = useRef();
  const materialRef = useRef();
  const stockRef = useRef();

  const { id, title, material, stock, type } = location.state || {};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {};

    let valueTitle = titleRef.current.value;
    let valueMaterial = materialRef.current.value;
    let valueStock = stockRef.current.value;

    if (!valueTitle && title) {
      valueTitle = title;
    }
    if (!valueMaterial && material) {
      valueMaterial = material;
    }
    if (!valueStock && stock) {
      valueStock = stock;
    }

    product.title = valueTitle;
    product.material = valueMaterial;
    product.stock = valueStock;

    if (type === "update") {
      const response = await ProductService.updateProdruct(id, product);
      if (response.status == 200) {
        navigate("/products");
      }
      return;
    }
    const response = await ProductService.addProdruct(product);
    if (response.status == 200) {
      navigate("/products");
    }
  };

  return (
    <>
      <div className="fixed w-full z-10">
        <Header visibility={true} />
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-center mt-4 font-bold text-4xl absolute top-10">
          Formulario
        </h1>
        <div className="flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="border border-black w-fit mx-auto p-4 rounded flex flex-col gap-8"
          >
            <h1 className="text-xl font-semibold underline">
              {type == "update" ? "Actualizar" : "Añadir"} producto
            </h1>
            <div className="flex flex-col gap-5">
              <div className="">
                <label className="flex flex-col">
                  Nombre del producto
                  <input
                    type="text"
                    ref={titleRef}
                    defaultValue={title || ""}
                    className="border border-black rounded"
                  />
                </label>
              </div>
              <div className="">
                <label className="flex flex-col">
                  Material del producto
                  <input
                    type="text"
                    ref={materialRef}
                    defaultValue={material || ""}
                    className="border border-black rounded"
                  />
                </label>
              </div>
              <div className="">
                <label className="flex flex-col">
                  Stock del producto
                  <input
                    type="number"
                    ref={stockRef}
                    defaultValue={stock || 0}
                    className="border border-black rounded"
                  />
                </label>
              </div>
              <div className="flex justify-center ">
                <button type="submit" className="bg-blue-300 px-4 py-1 rounded">
                  {type == "update" ? "Actualizar" : "Añadir"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
