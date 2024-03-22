export const Popup = ({ onAccept, onDeny }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6">
        <p className="mb-4">¿Deseas aceptar la solicitud?</p>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded mr-2"
          onClick={onAccept}
        >
          Aceptar
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          onClick={onDeny}
        >
          Denegar
        </button>
      </div>
    </div>
  );
};
