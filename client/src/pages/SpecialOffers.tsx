import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Marquee } from "@/components/ui/marquee";
import CountdownTimer from "@/components/CountdownTimer";
import FakeSurvey from "@/components/FakeSurvey";
import PopupAd from "@/components/PopupAd";
import Disclaimer from "@/components/Disclaimer";

export default function SpecialOffers() {
  const [popups, setPopups] = useState({
    popup1: false,
    popup2: false
  });
  
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  const triggerRandomPopup = () => {
    const randomPopup = Math.floor(Math.random() * 2) + 1;
    setPopups(prev => ({
      ...prev,
      [`popup${randomPopup}`]: true
    }));
  };

  useEffect(() => {
    // Show popup after some time
    const popupTimeout = setTimeout(() => {
      triggerRandomPopup();
    }, 3000);
    
    return () => {
      clearTimeout(popupTimeout);
    };
  }, []);

  const handleClaimClick = () => {
    setShowSurveyForm(true);
    setTimeout(() => {
      const surveyElement = document.getElementById('survey-form');
      if (surveyElement) {
        window.scrollTo({
          top: surveyElement.offsetTop,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleSurveySubmit = () => {
    setShowSurveyForm(false);
    setShowSuccessPopup(true);
    // Show disclaimer after user submits personal information
    setShowDisclaimer(true);
  };

  return (
    <div className="bg-[hsl(var(--scam-pink))] min-h-screen overflow-x-hidden">
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
          <a href="/special-offers" className="text-white hover:underline font-bold">SPECIAL OFFERS!!!</a>
          <a href="/contact" className="text-white hover:underline">CONTACT</a>
        </nav>
      </header>

      {/* Fake security banner */}
      <Marquee className="bg-green-300 p-2">
        🔒 ALL OFFERS TODAY ONLY! LIMITED TIME SALE! FLASH DEAL! EXCLUSIVE ACCESS! MEMBERS ONLY! CLEARANCE SALE! 🔒 ALL OFFERS TODAY ONLY! LIMITED TIME SALE!
      </Marquee>

      {/* Main content area */}
      <main className="p-4">
        {/* Special Offers Banner */}
        <div className="bg-[hsl(var(--scam-blue))] text-white text-center p-6 mb-6 blink">
          <h2 
            className="text-4xl font-bold" 
            style={{ fontFamily: "Impact" }}
          >
            EXCLUSIVE SPECIAL OFFERS JUST FOR YOU!!!
          </h2>
          <p className="text-2xl mt-2 shake">LIMITED TIME ONLY! HURRY!!!</p>
        </div>

        {/* Timer */}
        <div className="bg-[hsl(var(--scam-red))] text-white text-center p-4 mb-6 float">
          <p className="text-xl">SALE ENDS IN:</p>
          <CountdownTimer />
          <p className="text-sm">THESE DEALS WONT LAST!!!</p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Offer 1 */}
          <div className="bg-white p-4 border-8 border-[hsl(var(--scam-green))] relative overflow-hidden">
            <div className="absolute -right-10 top-5 bg-[hsl(var(--scam-red))] text-white py-1 px-10 transform rotate-45 text-sm font-bold">
              75% OFF!!!
            </div>
            <h3 
              className="text-2xl text-[hsl(var(--scam-red))] mb-4" 
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              AMAZING SMART WATCH!!!
            </h3>
            
            <img 
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Smart Watch" 
              className="w-full mb-4" 
              style={{ filter: "saturate(200%)" }}
            />
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg line-through text-gray-500">$199.99</span>
              <span className="text-2xl text-[hsl(var(--scam-red))] font-bold">$49.99!!!</span>
            </div>
            
            <p 
              className="text-base mb-4" 
              style={{ color: "#0000FF", fontFamily: "Arial" }}
            >
              LUXURY SMART WATCH with heart rate monitor, text messaging, phone calls, fitness tracking, and MORE! Compatible with ALL phones!
            </p>
            
            <button 
              onClick={handleClaimClick}
              className="w-full bg-[hsl(var(--scam-green))] text-white py-3 px-6 text-xl font-bold rounded shadow-lg hover:bg-green-600 blink"
            >
              👉 CLAIM THIS DEAL NOW! 👈
            </button>
          </div>
          
          {/* Offer 2 */}
          <div className="bg-white p-4 border-8 border-[hsl(var(--scam-purple))] relative overflow-hidden">
            <div className="absolute -right-10 top-5 bg-[hsl(var(--scam-red))] text-white py-1 px-10 transform rotate-45 text-sm font-bold">
              90% OFF!!!
            </div>
            <h3 
              className="text-2xl text-[hsl(var(--scam-blue))] mb-4" 
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              PREMIUM WIRELESS EARBUDS!!
            </h3>
            
            <img 
              src="https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Wireless Earbuds" 
              className="w-full mb-4" 
              style={{ filter: "saturate(200%) brightness(120%)" }}
            />
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg line-through text-gray-500">$149.99</span>
              <span className="text-2xl text-[hsl(var(--scam-red))] font-bold">$14.99!!!</span>
            </div>
            
            <p 
              className="text-base mb-4" 
              style={{ color: "#0000FF", fontFamily: "Arial" }}
            >
              PREMIUM WIRELESS EARBUDS with noise cancellation, waterproof design, 40-hour battery life, and crystal clear sound! Better than AirPods!!
            </p>
            
            <button 
              onClick={handleClaimClick}
              className="w-full bg-[hsl(var(--scam-blue))] text-white py-3 px-6 text-xl font-bold rounded shadow-lg hover:bg-blue-600 blink"
            >
              👉 GET YOURS NOW! 👈
            </button>
          </div>
          
          {/* Offer 3 */}
          <div className="bg-white p-4 border-8 border-[hsl(var(--scam-yellow))] relative overflow-hidden">
            <div className="absolute -right-10 top-5 bg-[hsl(var(--scam-red))] text-white py-1 px-10 transform rotate-45 text-sm font-bold">
              FREE!!!
            </div>
            <h3 
              className="text-2xl text-[hsl(var(--scam-red))] mb-4" 
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              LUXURY SKINCARE SET!!!
            </h3>
            
            <img 
              src="https://images.unsplash.com/photo-1556760544-74068565f05c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Skincare Set" 
              className="w-full mb-4" 
              style={{ filter: "saturate(150%) brightness(110%)" }}
            />
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg line-through text-gray-500">$299.99</span>
              <span className="text-2xl text-[hsl(var(--scam-red))] font-bold">FREE!!!</span>
              <span className="text-xs">(just pay shipping)</span>
            </div>
            
            <p 
              className="text-base mb-4" 
              style={{ color: "#0000FF", fontFamily: "Arial" }}
            >
              CELEBRITY-ENDORSED skincare set with anti-aging serum, moisturizer, face mask, and cleansing foam! Made with secret formula from exotic plants!
            </p>
            
            <button 
              onClick={handleClaimClick}
              className="w-full bg-[hsl(var(--scam-green))] text-white py-3 px-6 text-xl font-bold rounded shadow-lg hover:bg-green-600 blink"
            >
              👉 CLAIM FREE SET NOW! 👈
            </button>
          </div>
          
          {/* Offer 4 */}
          <div className="bg-white p-4 border-8 border-[hsl(var(--scam-red))] relative overflow-hidden">
            <div className="absolute -right-10 top-5 bg-[hsl(var(--scam-purple))] text-white py-1 px-10 transform rotate-45 text-sm font-bold">
              LAST 3!!!
            </div>
            <h3 
              className="text-2xl text-[hsl(var(--scam-blue))] mb-4" 
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              POWER BANK 100,000mAh!!!
            </h3>
            
            <img 
              src="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
              alt="Power Bank" 
              className="w-full mb-4" 
              style={{ filter: "saturate(180%)" }}
            />
            
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg line-through text-gray-500">$129.99</span>
              <span className="text-2xl text-[hsl(var(--scam-red))] font-bold">$29.99!!!</span>
            </div>
            
            <p 
              className="text-base mb-4" 
              style={{ color: "#0000FF", fontFamily: "Arial" }}
            >
              MASSIVE 100,000mAh power bank can charge your phone 20 times! Fast charging, slim design, with built-in flashlight and phone stand!
            </p>
            
            <button 
              onClick={handleClaimClick}
              className="w-full bg-[hsl(var(--scam-red))] text-white py-3 px-6 text-xl font-bold rounded shadow-lg hover:bg-red-600 blink"
            >
              👉 ORDER BEFORE SOLD OUT! 👈
            </button>
          </div>
        </div>

        {/* Fake Survey */}
        {showSurveyForm && (
          <div id="survey-form" className="bg-white p-6 mt-6 border-4 border-[hsl(var(--scam-purple))]">
            <FakeSurvey onSubmit={handleSurveySubmit} />
          </div>
        )}
      </main>

      {/* Random Popup Ads */}
      {popups.popup1 && (
        <PopupAd 
          id="popup-ad-1"
          type="offer"
          title="FLASH SALE!!!"
          message="GET 95% OFF ALL PRODUCTS FOR THE NEXT 10 MINUTES!!!"
          image="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=70"
          onClose={() => {
            setPopups({
              ...popups,
              popup1: false
            });
          }}
        />
      )}
      
      {popups.popup2 && (
        <PopupAd 
          id="popup-ad-2"
          type="warning"
          title="YOUR COMPUTER NEEDS CLEANING!"
          message="We detected 27 unnecessary files slowing down your browser! Click 'OPTIMIZE NOW' to speed up your device!"
          onClose={() => {
            setPopups({
              ...popups,
              popup2: false
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
              <div className="text-green-500 text-6xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold text-green-600 mb-2">SUBMISSION SUCCESS!</h2>
              <p className="mb-4">Your order has been confirmed! Your items will be shipped within 2-3 business days!</p>
              <p className="text-sm mb-4">(Note: Shipping fees of $12.99 may apply)</p>
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