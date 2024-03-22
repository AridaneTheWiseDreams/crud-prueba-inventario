// import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
// import { AddIcon } from "../components/icons/AddIcon";
import { useEffect, useState } from "react";
import UsersProductsService from "../services/UsersProductsService";
import { ProcessSection } from "../components/ProcessSection";

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
      {/* <div className="w-full relative">
        <Link className="absolute -top-4 right-5 sm:right-2">
          <AddIcon className="size-9 fill-green-400 " />
        </Link>
      </div> */}
      <div className="mx-auto max-w-[90%] mt-5">
        <div className="flex justify-between gap-5 ">
          <div className="flex flex-wrap justify-center  w-full">
            <ProcessSection
              title="Pendiente"
              type="pending"
              usersProducts={usersProducts}
            />
            <ProcessSection
              title="Aceptado"
              type="accepted"
              usersProducts={usersProducts}
            />
            <ProcessSection
              title="Devuelto"
              type="finish"
              usersProducts={usersProducts}
            />
          </div>
        </div>
      </div>
    </>
  );
}
