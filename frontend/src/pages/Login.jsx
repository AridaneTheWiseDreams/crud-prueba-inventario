import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/AuthService";

export function Login() {
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailValue = emailRef.current.value;
    const passwordValue = passwordRef.current.value;

    const user = {
      email: emailValue,
      password: passwordValue,
    };
    const response = await AuthService.login(user);
    if (response.status === 200) {
      localStorage.setItem("username", emailValue.split("@")[0]);
      localStorage.setItem("rol", response.data.rol);
      navigate("/home");
    }
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col sm:flex-row justify-center align-middle items-center sm:h-[500px] sm:w-[800px] w-[350px] mx-auto  rounded-lg shadow-2xl overflow-hidden">
        <div className="flex flex-col justify-center items-center w-[400px] bg-orange-400/70 h-full">
          <h1 className="flex font-bold text-6xl h-24 justify-center mt-5 -rotate-12">
            StockUp
          </h1>
        </div>
        <form
          className="flex flex-col w-[400px] relative h-full bg-slate-300"
          onSubmit={handleSubmit}
        >
          <h1 className=" flex font-bold text-5xl h-24 justify-center mt-5">
            Login
          </h1>
          <div className="flex flex-col justify-center items-center gap-5 mb-12 sm:mt-12">
            <div className="flex flex-col w-72 gap-1">
              <label className="font-semibold">Correo electronico:</label>
              <input
                type="text"
                className="rounded py-1 px-2"
                placeholder="Introduce tu correo"
                ref={emailRef}
              />
            </div>
            <div className="flex flex-col w-72 gap-1">
              <label className="font-semibold">Contraseña:</label>
              <input
                type="password"
                className="rounded py-1 px-2"
                placeholder="Introduce tu contraseña"
                ref={passwordRef}
              />
            </div>
            <div className="flex flex-col w-72 justify-center items-center sm:mt-12">
              <button
                type="submit"
                className="bg-blue-400 px-4 py-2 rounded text-white"
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
