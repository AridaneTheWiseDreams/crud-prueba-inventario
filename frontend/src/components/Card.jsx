import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

export const Card = ({ _id, title, stock, material, rol, handleOnClick }) => {
  const handleDeleteItem = () => {
    handleOnClick({ id: _id, type: "delete" });
  };

  const handleUpdateItem = () => {
    handleOnClick({
      id: _id,
      title: title,
      material: material,
      stock: stock,
      type: "update",
    });
  };
  const handleOpenModal = () => {
    if (rol === "admin") return;
    handleOnClick({
      productId: _id,
      productTitle: title,
      type: "open",
    });
  };

  return (
    <div
      className="w-72 border rounded-lg overflow-hidden select-none"
      onClick={handleOpenModal}
    >
      <div className="flex items-center justify-between px-3 py-2 bg-gray-200">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex gap-2">
          <div className="cursor-pointer" onClick={handleDeleteItem}>
            <DeleteIcon
              className={`h-5 w-5 text-red-400 hover:text-red-700 ${
                rol !== "admin" ? "hidden" : ""
              }`}
            />
          </div>
          <div className="cursor-pointer" onClick={handleUpdateItem}>
            <EditIcon
              className={`h-5 w-5 text-blue-500 hover:text-blue-700 ${
                rol !== "admin" ? "hidden" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">{stock} en stock</p>
          <p className="text-sm text-gray-600">Material: {material}</p>
        </div>
      </div>
    </div>
  );
};
