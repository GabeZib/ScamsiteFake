import { useState } from "react";

interface FakeSurveyProps {
  onSubmit: () => void;
}

export default function FakeSurvey({ onSubmit }: FakeSurveyProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    creditCard: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Don't actually submit the data anywhere
    onSubmit();
  };

  return (
    <>
      <h3 
        className="text-2xl text-center mb-4" 
        style={{ fontFamily: "'Comic Neue', cursive", color: "#9900FF" }}
      >
        QUICK SURVEY TO VERIFY ELIGIBILITY
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[hsl(var(--scam-blue))] mb-1">FULL NAME*</label>
          <input 
            type="text" 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2" 
            placeholder="Enter you're full name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[hsl(var(--scam-blue))] mb-1">EMAIL ADDRESS*</label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2" 
            placeholder="Enter you're email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[hsl(var(--scam-blue))] mb-1">PHONE NUMBER*</label>
          <input 
            type="tel" 
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2" 
            placeholder="For delivery notifications ONLY"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[hsl(var(--scam-blue))] mb-1">SHIPPING ADDRESS*</label>
          <textarea 
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2" 
            rows={3} 
            placeholder="Where to send you're FREE prize"
          />
        </div>
        <div className="mb-4">
          <label className="block text-[hsl(var(--scam-pink))] mb-1">CREDIT CARD NUMBER (OPTIONAL FOR FASTER SHIPPING)</label>
          <input 
            type="text" 
            name="creditCard"
            value={formData.creditCard}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2" 
            placeholder="Not required, only for expedited shipping"
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-[hsl(var(--scam-green))] text-white py-3 px-6 text-2xl font-bold rounded shadow-lg hover:bg-green-600 blink"
        >
          SUBMIT NOW TO CLAIM PRIZE!!!
        </button>
        <p className="text-xs mt-2 text-gray-500">
          * By submitting, you agree to our terms and conditions and to receive future offers and promotions.
        </p>
      </form>
    </>
  );
}
