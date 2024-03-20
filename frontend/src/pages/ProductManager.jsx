import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Header } from "../components/Header/Header";
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
      <div className="fixed top-0 left-0 right-0 z-10 ">
        <Header visibility={true} />
      </div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="absolute top-20 text-4xl font-bold">Formulario</h1>
        <div className="w-full max-w-sm px-4 py-8  mt-20  border border-black rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <h1 className="text-xl font-semibold underline">
              {type === "update" ? "Actualizar" : "Añadir"} producto
            </h1>
            <div>
              <label className="flex flex-col">
                Nombre del producto
                <input
                  type="text"
                  ref={titleRef}
                  defaultValue={title || ""}
                  className="mt-1 border border-black rounded"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                Material del producto
                <input
                  type="text"
                  ref={materialRef}
                  defaultValue={material || ""}
                  className="mt-1 border border-black rounded"
                />
              </label>
            </div>
            <div>
              <label className="flex flex-col">
                Stock del producto
                <input
                  type="number"
                  ref={stockRef}
                  defaultValue={stock || 0}
                  className="mt-1 border border-black rounded"
                />
              </label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-300 rounded hover:bg-blue-400"
              >
                {type === "update" ? "Actualizar" : "Añadir"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
