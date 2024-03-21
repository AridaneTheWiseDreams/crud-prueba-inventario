import { useRef } from "react";
import { CrossMark } from "./icons/CrossMark";

export const Modal = ({ handleOnClick, productName }) => {
  const userNameRef = useRef();
  const productNameRef = useRef();
  const stockRef = useRef();
  const closeModal = () => {
    handleOnClick({
      type: "open",
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-10">
      <div className="bg-white p-5 rounded flex flex-col justify-center items-center gap-5 relative border border-black shadow-md">
        <div className="absolute right-2 top-2" onClick={closeModal}>
          <CrossMark className="size-6" />
        </div>
        <form className="mt-2 flex flex-col gap-y-2">
          <div className="flex gap-x-2">
            <label className="font-semibold text-black">Username:</label>
            <input
              ref={userNameRef}
              defaultValue={localStorage.getItem("username") || ""}
              disabled
            />
          </div>
          <div className="flex flex-col">
            <label className="font-semibold text-black">Producto:</label>
            <input
              ref={productNameRef}
              defaultValue={productName || ""}
              disabled
            />
          </div>
          <div className="flex  gap-x-2">
            <label className="font-semibold text-black">Cantidad:</label>
            <input
              ref={stockRef}
              defaultValue={0}
              type="number"
              className="w-42"
            />
          </div>
          <div className="flex justify-center mt-2">
            <button className="bg-blue-400 hover:bg-blue-600 px-3 py-1 rounded text-white">
              Solicitar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
