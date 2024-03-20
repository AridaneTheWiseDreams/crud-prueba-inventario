import { Link } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { AddIcon } from "../components/icons/AddIcon";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-center mt-4 font-bold text-4xl">Inicio</h1>
      <div className="w-full relative">
        <Link className="absolute -top-4 right-5 sm:right-2">
          <AddIcon className="size-9 fill-green-400 " />
        </Link>
      </div>
    </>
  );
}
