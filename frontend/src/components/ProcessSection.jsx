import { useState } from "react";
import { Popup } from "./Popup"; // Asegúrate de importar el componente Popup

export const ProcessSection = ({ title, type, usersProducts }) => {
  const filteredProducts = usersProducts.filter(
    (userProduct) => userProduct.type_process === type
  );

  const [showPopup, setShowPopup] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAccept = () => {
    setShowPopup(false);
  };

  const handleDeny = () => {
    setShowPopup(false);
  };

  return (
    <div className="w-full md:max-w-[30%] select-none">
      <p className="text-2xl font-bold mb-4 text-center">{title}</p>
      {filteredProducts.map((userProduct) => (
        <div key={userProduct._id} className="mb-4 text-balance">
          <div
            className="bg-slate-100 p-4 rounded-lg"
            onClick={() => {
              setSelectedProduct(userProduct);
              setShowPopup(true);
            }}
          >
            <p className="text-lg font-semibold">
              {`El usuario ${userProduct.user_id.username} ${
                type === "pending"
                  ? "solicita"
                  : type === "accepted"
                  ? "solicita"
                  : "ha devuelto"
              } ${userProduct.quantity_product} unidades del producto ${
                userProduct.product_id.title +
                `${
                  type === "pending"
                    ? ` quedan ${userProduct.product_id.stock}`
                    : ""
                }`
              }`}
            </p>
          </div>
        </div>
      ))}

      {showPopup && <Popup onAccept={handleAccept} onDeny={handleDeny} />}
    </div>
  );
};
