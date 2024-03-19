export const Card = (info) => {
  return (
    <div className="w-72">
      <div className="flex flex-col gap-3 border">
        <div className="text-lg">
          <h3 className="font-semibold">{info.title}</h3>
        </div>
        <div className=" flex gap-2">
          <p>{info.stock} en stock</p>
          <p>{info.material}</p>
        </div>
      </div>
    </div>
  );
};
