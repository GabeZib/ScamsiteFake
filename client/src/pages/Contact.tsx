import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Marquee } from "@/components/ui/marquee";
import PopupAd from "@/components/PopupAd";
import Disclaimer from "@/components/Disclaimer";

export default function Contact() {
  const [popups, setPopups] = useState({
    popup1: false
  });
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const triggerPopup = () => {
    setPopups({ popup1: true });
  };

  useEffect(() => {
    // Show popup after some time
    const popupTimeout = setTimeout(() => {
      triggerPopup();
    }, 8000);
    
    return () => {
      clearTimeout(popupTimeout);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccessPopup(true);
    // Show disclaimer after user submits contact information
    setShowDisclaimer(true);
  };

  return (
    <div className="bg-[hsl(var(--scam-blue))] min-h-screen overflow-x-hidden">
      {/* Header with poor alignment */}
      <header className="bg-[hsl(var(--scam-purple))] p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img 
              src="https://pixabay.com/get/g133b9027452535f62939264005ec3af6c730bddd4afe83c32bd31d5336e44e58f1a8a0c2cb77427c1f8b063cdedaaef4_1280.jpg" 
              alt="SUPER TRUST SITE LOGO" 
              className="w-16 h-16 mr-3" 
              style={{ filter: "hue-rotate(90deg) contrast(200%)" }}
            />
            <h1 
              className="text-white text-2xl font-bold ml-2" 
              style={{ fontFamily: "'Comic Neue', cursive", textShadow: "3px 3px 0px #000" }}
            >
              SUPER TRUST SITE
            </h1>
          </a>
        </div>
        <nav className="mt-2 md:mt-0 flex gap-4">
          <a href="/" className="text-white hover:underline">HOME</a>
          <a href="/special-offers" className="text-white hover:underline">SPECIAL OFFERS!!!</a>
          <a href="/contact" className="text-white hover:underline font-bold">CONTACT</a>
        </nav>
      </header>

      {/* Fake security banner */}
      <Marquee className="bg-green-300 p-2">
        🔒 THIS WEBSITE IS 100% SECURE! YOUR INFORMATION IS SAFE WITH US! WE VALUE YOUR PRIVACY! TRUSTED BY MILLIONS! 🔒 THIS WEBSITE IS 100% SECURE!
      </Marquee>

      {/* Main content area */}
      <main className="p-4">
        {/* Contact Banner */}
        <div className="bg-[hsl(var(--scam-green))] text-white text-center p-6 mb-6">
          <h2 
            className="text-4xl font-bold" 
            style={{ fontFamily: "Impact" }}
          >
            CONTACT OUR SUPPORT TEAM
          </h2>
          <p className="text-xl mt-2">WE'LL GET BACK TO YOU WITHIN 24 HOURS!!!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Form */}
          <div className="md:col-span-2 bg-white p-6 border-4 border-[hsl(var(--scam-yellow))]">
            <h3 
              className="text-2xl text-[hsl(var(--scam-blue))] mb-4" 
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              SEND US A MESSAGE!!!
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-[hsl(var(--scam-blue))] mb-1">YOUR NAME*</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2" 
                  placeholder="Enter you're full name"
                  required
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
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-[hsl(var(--scam-blue))] mb-1">YOUR MESSAGE*</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-2" 
                  rows={5} 
                  placeholder="Type your message here..."
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    defaultChecked
                  />
                  <span className="text-sm">I agree to receive promotional emails, newsletters, and special offers</span>
                </label>
              </div>
              
              <div className="mb-4">
                <label className="flex items-center">
                  <input 
                    type="checkbox" 
                    className="mr-2" 
                    defaultChecked
                  />
                  <span className="text-sm">I agree to share my information with trusted third-party partners</span>
                </label>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-[hsl(var(--scam-green))] text-white py-3 px-6 text-xl font-bold rounded shadow-lg hover:bg-green-600 blink"
              >
                SEND MESSAGE NOW!!!
              </button>
              
              <p className="text-xs mt-2 text-gray-500">
                * By submitting, you agree to our terms and conditions and to receive future offers and promotions.
              </p>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="bg-white p-4 border-4 border-[hsl(var(--scam-purple))]">
              <h3 
                className="text-xl text-[hsl(var(--scam-red))] mb-4" 
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                OUR CONTACT INFO
              </h3>
              
              <div className="space-y-3">
                <p><strong>Email:</strong> support@supertrust-site.com</p>
                <p><strong>Phone:</strong> +1-888-555-1234</p>
                <p><strong>Address:</strong> 123 Fake Street, Scamville, Internet 54321</p>
                <p><strong>Hours:</strong> Monday-Friday, 9AM-5PM</p>
              </div>
            </div>
            
            <div className="bg-white p-4 border-4 border-[hsl(var(--scam-red))]">
              <h3 
                className="text-xl text-[hsl(var(--scam-blue))] mb-4" 
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                WHY CHOOSE US?
              </h3>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>24/7 Customer Support!!!</li>
                <li>100% Satisfaction Guaranteed!!!</li>
                <li>Trusted by 10 MILLION customers!!!</li>
                <li>FAST Shipping to ALL locations!!!</li>
                <li>EXCLUSIVE Deals you won't find anywhere else!!!</li>
              </ul>
            </div>
            
            <div className="bg-[hsl(var(--scam-pink))] p-4 animate-pulse">
              <h3 
                className="text-xl text-white mb-2" 
                style={{ fontFamily: "'Comic Neue', cursive" }}
              >
                URGENT MESSAGE!!!
              </h3>
              
              <p className="text-white">Contact us TODAY to receive an ADDITIONAL 20% OFF your next purchase!!!</p>
              
              <div className="mt-3 text-center">
                <span className="bg-white text-[hsl(var(--scam-red))] px-3 py-1 text-lg font-bold inline-block">
                  BONUS CODE: FREE20
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Random Popup Ads */}
      {popups.popup1 && (
        <PopupAd 
          id="popup-ad-1"
          type="offer"
          title="WIN A FREE LAPTOP!!!"
          message="Congratulations! You've been selected to win a brand new laptop for your school! Just complete a quick survey to verify your eligibility!"
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80"
          onClose={() => {
            setPopups({
              ...popups,
              popup1: false
            });
          }}
        />
      )}

      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 max-w-md relative">
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-green-500 text-6xl mb-4">✉️</div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">MESSAGE SENT!</h2>
              <p className="mb-4">Thank you for contacting us! Our team will respond to your inquiry within 24 hours.</p>
              <p className="text-sm mb-4">You'll also receive our exclusive newsletter with special deals!</p>
              <button 
                onClick={() => setShowSuccessPopup(false)}
                className="bg-blue-500 text-white px-4 py-2 w-full mb-2"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Educational Disclaimer */}
      {showDisclaimer && <Disclaimer onClose={() => setShowDisclaimer(false)} />}

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center text-xs">
        <p>© 2023 SUPER TRUST SITE INTERNATIOAL LTD. All right's reserved.</p>
        <p className="mt-1">This website is for educational purposes to demonstrate common scam tactics.</p>
        <p className="mt-1">No information submitted on this page is stored or processed.</p>
      </footer>
    </div>
  );
}