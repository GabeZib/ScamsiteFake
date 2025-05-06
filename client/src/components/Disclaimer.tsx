interface DisclaimerProps {
  onClose: () => void;
}

export default function Disclaimer({ onClose }: DisclaimerProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-md">
        <h2 className="text-xl font-bold mb-4">Educational Purpose Disclaimer</h2>
        <p className="mb-4">
          This website is a simulation created for educational purposes only. It demonstrates common tactics used in 
          phishing and scam websites to help people recognize and avoid them in real situations.
        </p>
        <p className="mb-4">
          No personal data is being collected. All buttons and forms are non-functional.
        </p>
        <button 
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          I understand
        </button>
      </div>
    </div>
  );
}
