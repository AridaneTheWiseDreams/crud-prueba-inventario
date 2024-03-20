import { Link } from "react-router-dom";
import "./index.css";
import { LogOutIcon } from "../icons/LogOutIcon";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";

export const Header = ({ onSearch, visibility = false }) => {
  const navigate = useNavigate();

  const handleSearch = (event) => {
    const query = event.target.value;
    onSearch(query);
  };

  const handleClick = async () => {
    await AuthService.logout();
    navigate("/login");
  };

  return (
    <>
      <div className="h-16 bg-slate-600 shadow-md select-none">
        <div className="container mx-auto flex items-center justify-between h-full px-4">
          <div className="flex items-center">
            <Link
              to={"/home"}
              className="flex items-center text-white text-lg transition "
            >
              <img
                src="https://img.freepik.com/vector-premium/paquete-entrega-abierto-icono-caja-carton-vacia-aislado-sobre-fondo-blanco_53562-14296.jpg"
                alt="logo"
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="nav-link">StockUp</span>
            </Link>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className={`h-8 px-3 bg-gray-700 text-white rounded placeholder-gray-400 ${
                visibility ? "hidden" : ""
              }`}
              placeholder="Buscar..."
              onChange={handleSearch}
            />
          </div>
          <div className="flex items-center">
            <nav className="sm:flex space-x-4 text-white hidden">
              <Link
                to="/home"
                className="nav-link text-white text-lg transition"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="nav-link text-white text-lg transition"
              >
                Productos
              </Link>
              <button className="text-lg transition" onClick={handleClick}>
                <LogOutIcon className="size-5 fill-white" />
              </button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
