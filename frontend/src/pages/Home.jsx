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
        <div className="flex flex-col gap-5">
          <div className="">
            <p className="text-4xl font-bold">Aceptado</p>
            {usersProducts.map((userProduct) => {
              return (
                <div key={userProduct._id}>
                  {userProduct.type_process === "accepted" ? (
                    <div className=" flex flex-col ">
                      <p>
                        Se a aceptado la solicitud del usurio{" "}
                        {userProduct.user_id.username}
                      </p>
                      <p>
                        Solicito {userProduct.quantity_product} del
                        {userProduct.product_id.title}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
          <div className="">
            <p className="text-4xl font-bold">Pendiente</p>
            {usersProducts.map((userProduct) => {
              return (
                <div key={userProduct._id}>
                  {userProduct.type_process === "pending" ? (
                    <div className=" flex flex-col ">
                      <p>El usuario {userProduct.user_id.username}</p>
                      <p>
                        Solicita {userProduct.quantity_product} del
                        {userProduct.product_id.title}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
