export const ProcessSection = ({ title, type, usersProducts }) => {
  const filteredProducts = usersProducts.filter(
    (userProduct) => userProduct.type_process === type
  );

  return (
    <div className="max-w-[30%] w-full">
      <p className="text-2xl font-bold mb-4 text-center">{title}</p>
      {filteredProducts.map((userProduct) => (
        <div key={userProduct._id} className="mb-4  text-balance">
          <div className="bg-slate-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">
              {`El usuario ${userProduct.user_id.username} ${
                type === "pending"
                  ? "solicita"
                  : type === "accepted"
                  ? "solicita"
                  : "ha devuelto"
              } ${userProduct.quantity_product} unidades del producto ${
                userProduct.product_id.title
              }`}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
