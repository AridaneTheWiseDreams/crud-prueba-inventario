import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { AddIcon } from "../components/icons/AddIcon";
import { useEffect, useState } from "react";
import UsersProductsService from "../services/UsersProductsService";

export default function Home() {
  const [usersProducts, setUsersProducts] = useState([]);

  const rol = localStorage.getItem("rol");

  const getUserProducts = async () => {
    if (rol === "admin") {
      const response = await UsersProductsService.getAllUserProdructs();
      setUsersProducts(response.data.data);
      return;
    }
    const response = await UsersProductsService.getAllUserProdructsByUserId();

    setUsersProducts(response.data.data);
  };
  useEffect(() => {
    getUserProducts();
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-center mt-4 font-bold text-4xl">Inicio</h1>
      <div className="w-full relative">
        <Link className="absolute -top-4 right-5 sm:right-2">
          <AddIcon className="size-9 fill-green-400 " />
        </Link>
      </div>
      <div className="mx-auto max-w-[90%] mt-5">
        <div className="flex justify-between gap-5 ">
          <div className="max-w-[30%] w-full">
            <p className="text-2xl font-bold mb-4 text-center">Pendiente</p>
            {usersProducts.map((userProduct) => (
              <div key={userProduct._id} className="mb-4  text-balance">
                {userProduct.type_process === "pending" && (
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold">
                      El usuario {userProduct.user_id.username} solicita{" "}
                      {userProduct.quantity_product} unidades del producto{" "}
                      {userProduct.product_id.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="max-w-[30%] w-full">
            <p className="text-2xl font-bold mb-4 text-center">Aceptado</p>
            {usersProducts.map((userProduct) => (
              <div key={userProduct._id} className="mb-4  text-balance">
                {userProduct.type_process === "accepted" && (
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold">
                      El usuario {userProduct.user_id.username} solicita{" "}
                      {userProduct.quantity_product} unidades del producto{" "}
                      {userProduct.product_id.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="max-w-[30%] w-full">
            <p className="text-2xl font-bold mb-4 text-center">Devuelto</p>
            {usersProducts.map((userProduct) => (
              <div key={userProduct._id} className="mb-4  text-balance">
                {userProduct.type_process === "finish" && (
                  <div className="bg-slate-100 p-4 rounded-lg">
                    <p className="text-lg font-semibold">
                      El usuario {userProduct.user_id.username} solicita{" "}
                      {userProduct.quantity_product} unidades del producto{" "}
                      {userProduct.product_id.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
