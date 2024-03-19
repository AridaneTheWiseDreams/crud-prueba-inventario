import { DeleteIcon } from "./icons/DeleteIcon";
import { EditIcon } from "./icons/EditIcon";

export const Card = ({ _id, title, stock, material, handleOnClick }) => {
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

  return (
    <div className="w-72">
      <div className="flex flex-col gap-3 border">
        <div className="relative w-full">
          <div className="flex gap-2 absolute right-2 top-2">
            <div className="cursor-pointer" onClick={handleDeleteItem}>
              <DeleteIcon className="size-3" />
            </div>
            <div className="cursor-pointer" onClick={handleUpdateItem}>
              <EditIcon className="size-3" />
            </div>
          </div>
        </div>
        <div className="text-lg">
          <h3 className="font-semibold">{title}</h3>
        </div>
        <div className=" flex gap-2">
          <p>{stock} en stock</p>
          <p>Material: {material}</p>
        </div>
      </div>
    </div>
  );
};
