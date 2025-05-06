import { useState } from "react";

interface FakeLoginProps {
  onClose: () => void;
  onNext: () => void;
}

export default function FakeLogin({ onClose, onNext }: FakeLoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-30">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full">
        <div className="flex justify-center mb-4">
          <img 
            src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40" 
            alt="Google" 
            className="w-10 h-10"
          />
        </div>
        <h2 className="text-2xl font-bold text-center mb-4">Sign in with Google</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email or phone</label>
            <input 
              type="email" 
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <div>
              <label className="flex items-center">
                <input 
                  type="checkbox" 
                  className="mr-2"
                  checked={staySignedIn}
                  onChange={(e) => setStaySignedIn(e.target.checked)}
                />
                <span className="text-sm">Stay signed in</span>
              </label>
            </div>
            <a href="#" className="text-blue-500 text-sm">Forgot password?</a>
          </div>
          <button 
            type="button" 
            onClick={onNext}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded"
          >
            Next
          </button>
          <p className="text-xs mt-4 text-gray-500 text-center">
            By clicking Next, you agree to Google's Terms and Privacy Policy
          </p>
        </form>
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-black font-bold text-xl"
        >
          &times;
        </button>
      </div>
    </div>
  );
}
