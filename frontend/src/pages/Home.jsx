import { Header } from "../components/Header";
import { AddIcon } from "../components/icons/AddIcon";

export default function Home() {
  return (
    <>
      <Header />
      <h1 className="text-center mt-4">Inicio</h1>
      <AddIcon className="size-9 fill-green-400" />
    </>
  );
}
