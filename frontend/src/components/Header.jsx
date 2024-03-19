import { Link } from "react-router-dom";

export const Header = ({ onSearch, visibility = false }) => {
  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  return (
    <>
      <div className="h-10 bg-slate-400 flex justify-center">
        <div className="flex items-center justify-between h-full w-[90%]">
          <div className="size-8">
            <Link to={"/home"}>
              <img
                src="https://img.freepik.com/vector-premium/paquete-entrega-abierto-icono-caja-carton-vacia-aislado-sobre-fondo-blanco_53562-14296.jpg"
                alt="logo"
                className="size-full rounded-full"
              />
            </Link>
          </div>
          <div>
            <input
              type="text"
              className={`h-4 rounded placeholder:text-[.7rem] ${
                visibility ? "hidden" : ""
              }`}
              placeholder="Search..."
              onChange={handleSearch}
            />
          </div>
          <div className="flex gap-x-4">
            <div>
              <Link to="/">Home</Link>
            </div>
            <div>
              <Link to="/products">Productos</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
