interface DisclaimerProps {
  onClose: () => void;
}

export default function Disclaimer({ onClose }: DisclaimerProps) {
  // Simple function to close without localStorage
  const handleClose = () => {
    onClose();
  };
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg max-w-2xl">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Internet Safety Educational Notice</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            &times;
          </button>
        </div>
        
        <div className="border-l-4 border-yellow-500 pl-4 mb-4 bg-yellow-50 p-3">
          <p className="font-medium text-yellow-700">
            You just took an action that could be risky on a real website!
          </p>
        </div>
        
        <h3 className="text-lg font-bold mb-2 text-blue-600">This Is A Simulation</h3>
        <p className="mb-4">
          This website is a <strong>simulation created for educational purposes only</strong>. It demonstrates common tactics used in 
          phishing and scam websites to help students recognize and avoid them in real situations.
        </p>
        
        <h3 className="text-lg font-bold mb-2 text-blue-600">What You Should Know</h3>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>No personal data is being collected - this is 100% safe for classroom use</li>
          <li>All buttons and forms are non-functional</li>
          <li>This site contains examples of deceptive design, false claims, and misleading content</li>
          <li>In real life, websites like this could be attempting to steal your personal information</li>
        </ul>
        
        <h3 className="text-lg font-bold mb-2 text-blue-600">Safety Tips</h3>
        <ul className="list-disc pl-5 mb-4 space-y-2">
          <li>Never share personal information on unfamiliar websites</li>
          <li>Check the URL (web address) before entering any information</li>
          <li>Be suspicious of websites with multiple pop-ups, flashing text, or urgent claims</li>
          <li>Legitimate companies don't ask for passwords or payment information through pop-ups</li>
          <li>If a deal seems too good to be true, it probably is</li>
        </ul>
        
        <div className="flex justify-center mt-4">
          <button 
            onClick={handleClose}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            I Understand - Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
}
