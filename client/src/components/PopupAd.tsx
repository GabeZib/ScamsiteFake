interface PopupAdProps {
  id: string;
  type: "offer" | "warning" | "prize";
  title: string;
  message: string;
  image?: string;
  onClose: () => void;
}

export default function PopupAd({ id, type, title, message, image, onClose }: PopupAdProps) {
  const handleClose = () => {
    onClose();
  };

  const getBackground = () => {
    switch (type) {
      case "offer":
        return "bg-white";
      case "warning":
        return "bg-red-100 border-4 border-red-600";
      case "prize":
        return "bg-yellow-100 border-4 border-yellow-500";
      default:
        return "bg-white";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
      <div className={`${getBackground()} p-4 max-w-md relative`}>
        <button 
          onClick={handleClose}
          className="absolute top-2 right-2 text-black font-bold text-xl"
        >
          &times;
        </button>
        
        {type === "warning" && (
          <div className="flex items-center mb-2">
            <span className="text-red-600 text-4xl mr-2">⚠️</span>
            <h2 className="text-xl font-bold text-red-600">{title}</h2>
          </div>
        )}
        
        {type !== "warning" && (
          <>
            {image && <img src={image} alt={title} className="w-full mb-2" />}
            <h2 className={`text-2xl font-bold ${type === "prize" ? "text-yellow-600" : "text-red-600"} mb-2`}>{title}</h2>
          </>
        )}
        
        <p className="mb-4">{message}</p>
        
        {type === "offer" && (
          <div className="flex justify-between">
            <button 
              onClick={handleClose}
              className="bg-green-500 text-white px-4 py-2 w-1/2 mr-2"
            >
              YES PLEASE!
            </button>
            <button 
              onClick={handleClose}
              className="bg-gray-400 text-white px-4 py-2 w-1/2"
            >
              No Thanks
            </button>
          </div>
        )}
        
        {type === "warning" && (
          <>
            <button 
              onClick={handleClose}
              className="bg-green-500 text-white px-4 py-2 w-full mb-2"
            >
              CLEAN NOW
            </button>
            <button 
              onClick={handleClose}
              className="bg-gray-400 text-white px-4 py-2 w-full text-sm"
            >
              Ignore (Not Recommended)
            </button>
          </>
        )}
        
        {type === "prize" && (
          <button 
            onClick={handleClose}
            className="bg-yellow-500 text-white px-4 py-2 w-full font-bold"
          >
            CLAIM MY PRIZE!
          </button>
        )}
      </div>
    </div>
  );
}
