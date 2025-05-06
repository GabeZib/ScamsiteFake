import { useState, useEffect, useCallback } from "react";
import { Link } from "wouter";
import { Marquee } from "@/components/ui/marquee";
import FakeLogin from "@/components/FakeLogin";
import FakeSurvey from "@/components/FakeSurvey";
import PopupAd from "@/components/PopupAd";
import CountdownTimer from "@/components/CountdownTimer";
import Disclaimer from "@/components/Disclaimer";

interface PopupState {
  popup1: boolean;
  popup2: boolean;
  popup3: boolean;
}

export default function Home() {
  // All state is now local
  const [popups, setPopups] = useState<PopupState>({
    popup1: false,
    popup2: false,
    popup3: false
  });
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showCouponPopup, setShowCouponPopup] = useState(false);
  const [showDownloadPopup, setShowDownloadPopup] = useState(false);
  const [showPrizePopup, setShowPrizePopup] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  // Function to trigger random popups
  const triggerRandomPopup = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * 3) + 1;
    const popupKey = `popup${randomIndex}` as keyof PopupState;
    
    // Close any open popups first
    const updatedPopups = {
      popup1: false,
      popup2: false,
      popup3: false
    };
    
    // Set the random popup to true
    updatedPopups[popupKey] = true;
    
    setPopups(updatedPopups);
  }, []);

  useEffect(() => {
    // Show notification popup after a delay
    const notificationTimeout = setTimeout(() => {
      setShowNotificationPopup(true);
    }, 3000);
    
    // Show first random popup after some time
    const firstPopupTimeout = setTimeout(() => {
      triggerRandomPopup();
    }, 5000);
    
    // Show second random popup after more time
    const secondPopupTimeout = setTimeout(() => {
      triggerRandomPopup();
    }, 15000);
    
    // Show coupon popup after delay
    const couponPopupTimeout = setTimeout(() => {
      setShowCouponPopup(true);
    }, 8000);
    
    // Show download popup after delay
    const downloadPopupTimeout = setTimeout(() => {
      setShowDownloadPopup(true);
    }, 12000);
    
    // Show prize popup after delay
    const prizePopupTimeout = setTimeout(() => {
      setShowPrizePopup(true);
    }, 20000);

    // We'll only show the disclaimer after compromising actions
    // No automatic or timed disclaimer
    
    return () => {
      clearTimeout(notificationTimeout);
      clearTimeout(firstPopupTimeout);
      clearTimeout(secondPopupTimeout);
      clearTimeout(couponPopupTimeout);
      clearTimeout(downloadPopupTimeout);
      clearTimeout(prizePopupTimeout);
    };
  }, [setShowNotificationPopup, triggerRandomPopup]);

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

  const handleGoogleClick = () => {
    setShowGooglePopup(true);
  };

  const handleSurveySubmit = () => {
    setShowSurveyForm(false);
    setShowSuccessPopup(true);
    // Show disclaimer after user submits personal information
    setShowDisclaimer(true);
  };

  return (
    <div className="bg-[hsl(var(--scam-yellow))] overflow-x-hidden">
      {/* Header with poor alignment */}
      <header className="bg-[hsl(var(--scam-red))] p-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center">
          {/* A low-quality distorted company logo */}
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
        </div>
        <div className="flex flex-col md:flex-row gap-3 mt-2 md:mt-0">
          <nav className="flex gap-4 mb-2 md:mb-0 md:mr-4">
            <a href="/" className="text-white hover:underline font-bold">HOME</a>
            <a href="/special-offers" className="text-white hover:underline">SPECIAL OFFERS!!!</a>
            <a href="/contact" className="text-white hover:underline">CONTACT</a>
          </nav>
          <div className="flex gap-2">
            <button onClick={handleGoogleClick} className="bg-blue-500 text-white px-3 py-1 rounded blink">LOG IN</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded">SINE UP FREE!!!</button>
          </div>
        </div>
      </header>

      {/* Fake security banner */}
      <Marquee className="bg-green-300 p-2">
        🔒 SECURED BY MCAFEE & NORTON! 100% SAFE BROWSING! NO VIRUS! YOUR COMPUTER IS PROTECTED! CLICK OK TO CONTINUE PROTEKTION! 🔒 SECURED BY MCAFEE & NORTON! 100% SAFE BROWSING!
      </Marquee>

      {/* Main content area */}
      <main className="p-4">
        {/* Congrats Banner */}
        <div className="bg-[hsl(var(--scam-purple))] text-white text-center p-6 mb-6 blink">
          <h2 
            className="text-4xl font-bold" 
            style={{ fontFamily: "Impact" }}
          >
            CONGRATULATION'S!!! YOU ARE THE 1,000,000TH VISITOR!!!!
          </h2>
          <p className="text-2xl mt-2 shake">CLAIM YOU'RE FREE PRIZE NOW!!!</p>
        </div>

        {/* Timer */}
        <div className="bg-[hsl(var(--scam-red))] text-white text-center p-4 mb-6 float">
          <p className="text-xl">OFFER EXPIRES IN:</p>
          <CountdownTimer />
          <p className="text-sm">ACT NOW BEFORE ITS TO LATE!!!</p>
        </div>

        {/* Main Grid Layout with misaligned elements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Prize Column */}
          <div className="md:col-span-2 bg-white p-4 border-8 border-[hsl(var(--scam-green))]">
            <h3 
              className="text-3xl text-[hsl(var(--scam-red))] mb-4" 
              style={{ fontFamily: "'Comic Neue', cursive" }}
            >
              YOU'VE BEEN RANDOMLY SELECTED!!!
            </h3>
            
            {/* A poorly photoshopped prize image */}
            <div className="relative">
              {/* A fake prize image with excessive saturation */}
              <img 
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=80" 
                alt="New iPhone prize" 
                className="w-full mb-4" 
                style={{ filter: "saturate(300%)" }}
              />
              <div className="absolute top-0 right-0 bg-[hsl(var(--scam-red))] text-white p-2 rotate-12 transform">
                FREE!!!
              </div>
            </div>
            
            <p 
              className="text-lg mb-4" 
              style={{ color: "#0000FF", fontFamily: "Times New Roman" }}
            >
              YOUR iPhone 15 Pro is waiting for you! Just complete a quick survey and provide shipping details to claim your FREE PRIZE! NO CREDIT CARD NEEDED!
            </p>
            
            {/* Fake Download Button */}
            <button 
              onClick={handleClaimClick}
              className="w-full bg-[hsl(var(--scam-green))] text-white py-3 px-6 text-2xl font-bold rounded shadow-lg hover:bg-green-600 blink"
            >
              👇 CLICK HERE TO CLAIM NOW!!! 👇
            </button>
          </div>
          
          {/* Right Column */}
          <div className="space-y-4">
            {/* Fake Login Box */}
            <div className="bg-white p-4 border-4 border-[hsl(var(--scam-blue))]">
              <h3 className="text-xl mb-4 text-center">Login with Google to verify identity</h3>
              <button 
                onClick={handleGoogleClick}
                className="w-full flex items-center justify-center bg-white border border-gray-300 rounded px-4 py-2 mb-3"
              >
                <img 
                  src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=20&h=20" 
                  alt="G" 
                  className="mr-2"
                />
                Sign in with Google
              </button>
              <p className="text-xs text-gray-500">We use secure verification to protect your prize</p>
            </div>
            
            {/* Fake Testimonials with inconsistent styling */}
            <div className="bg-[hsl(var(--scam-pink))] p-3">
              <h3 
                className="text-xl font-bold mb-2" 
                style={{ fontFamily: "Arial" }}
              >
                HAPPY WINNER'S!!!
              </h3>
              <div className="flex mb-2">
                {/* A pixelated low-quality profile image */}
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=40" 
                  alt="Happy customer" 
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-bold" style={{ color: "#0000FF" }}>Sarah J.</p>
                  <p className="text-xs">I got my free iPhone yesterday!! So happy!!!</p>
                </div>
              </div>
              <div className="flex mb-2">
                {/* Another low-quality profile image */}
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=60&h=60&q=40" 
                  alt="Happy customer" 
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-bold" style={{ color: "#FF0000" }}>Mike T.</p>
                  <p className="text-xs">CANT BELIEVE IT WORKED!!! GOT MY PRIZE IN JUST 3 DAYS</p>
                </div>
              </div>
            </div>
            
            {/* Fake Advertisement */}
            <div className="bg-blue-200 p-3 border-2 border-[hsl(var(--scam-blue))] animate-pulse">
              {/* A blurry "miracle product" image */}
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=240&h=160&q=50" 
                alt="Special offer" 
                className="w-full mb-2"
              />
              <h4 className="text-lg font-bold text-[hsl(var(--scam-blue))]">DOCTORS HATE THIS ONE WEIRD TRICK!!</h4>
              <p className="text-sm">LOCAL MOM DISCOVERS $5 SOLUTION TO LOOK 20 YEARS YOUNGER!</p>
              <button 
                onClick={triggerRandomPopup} 
                className="mt-2 bg-[hsl(var(--scam-red))] text-white px-4 py-1 w-full"
              >
                LEARN MORE &gt;&gt;
              </button>
            </div>
          </div>
        </div>
        
        {/* Fake Survey */}
        {showSurveyForm && (
          <div id="survey-form" className="bg-white p-6 mt-6 border-4 border-[hsl(var(--scam-purple))]">
            <FakeSurvey onSubmit={handleSurveySubmit} />
          </div>
        )}
      </main>

      {/* Fake Google Login Popup */}
      {showGooglePopup && (
        <FakeLogin 
          onClose={() => {
            setShowGooglePopup(false);
            triggerRandomPopup();
          }}
          onNext={() => {
            setShowGooglePopup(false);
            // Show disclaimer after user submits login information
            setShowDisclaimer(true);
            triggerRandomPopup();
          }}
        />
      )}
      
      {/* Random Popup Ads */}
      {popups.popup1 && (
        <PopupAd 
          id="popup-ad-1"
          type="offer"
          title="!!!CONGRATULATIONS!!!"
          message="YOU'VE BEEN SELECTED FOR AN EXCLUSIVE OFFER!!!"
          image="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400&q=70"
          onClose={() => {
            setPopups({
              ...popups,
              popup1: false
            });
            if (Math.random() > 0.5) {
              triggerRandomPopup();
            }
          }}
        />
      )}
      
      {popups.popup2 && (
        <PopupAd 
          id="popup-ad-2"
          type="warning"
          title="WARNING: VIRUS DETECTED!"
          message="Your computer might be infected with 13 viruses! Click 'CLEAN NOW' to remove them instantly!"
          onClose={() => {
            setPopups({
              ...popups,
              popup2: false
            });
            if (Math.random() > 0.5) {
              triggerRandomPopup();
            }
          }}
        />
      )}
      
      {popups.popup3 && (
        <PopupAd 
          id="popup-ad-3"
          type="dating"
          title="HOT SINGLES IN YOUR AREA!"
          message="Click now to chat with lonely people just 3.2 miles away from you!"
          image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=200&q=60"
          onClose={() => {
            setPopups({
              ...popups,
              popup3: false
            });
            if (Math.random() > 0.5) {
              triggerRandomPopup();
            }
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
              <p className="mb-4">Your FREE iPhone 15 Pro will be shipped within 3-5 business days!</p>
              <p className="text-sm mb-4">(Note: Shipping fees of $9.99 may apply)</p>
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

      {/* Browser notification popup */}
      {showNotificationPopup && (
        <div className="fixed top-0 right-0 m-4 bg-white shadow-lg rounded p-4 max-w-xs z-40">
          <div className="flex items-start">
            <img 
              src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-1.2.1&auto=format&fit=crop&w=32&h=32" 
              alt="Notification" 
              className="mr-2"
            />
            <div>
              <p className="font-bold">This website wants to:</p>
              <p className="text-sm mb-2">- Show notifications</p>
              <p className="text-sm mb-2">- Access your location</p>
              <p className="text-sm mb-2">- Send data to marketing partners</p>
              <div className="flex space-x-2 mt-2">
                <button 
                  onClick={() => {
                    setShowNotificationPopup(false);
                    // Show disclaimer when user allows browser permissions
                    setShowDisclaimer(true);
                    triggerRandomPopup();
                  }}
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm"
                >
                  Allow
                </button>
                <button 
                  onClick={() => setShowNotificationPopup(false)}
                  className="bg-gray-300 text-gray-700 px-3 py-1 rounded text-sm"
                >
                  Block
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Coupon Popup */}
      {showCouponPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 max-w-md relative border-8 border-[hsl(var(--scam-green))]">
            <button 
              onClick={() => setShowCouponPopup(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-green-500 text-6xl mb-4 animate-bounce">🎁</div>
              <h2 className="text-2xl font-bold text-[hsl(var(--scam-red))] mb-2 blink">EXCLUSIVE COUPON!!!</h2>
              <p className="mb-4">Enter your email now to receive a 90% DISCOUNT on your next purchase!</p>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full border border-gray-300 p-2 mb-2"
                />
                <button 
                  onClick={() => {
                    setShowCouponPopup(false);
                    // Show disclaimer when user submits email information
                    setShowDisclaimer(true);
                  }}
                  className="bg-[hsl(var(--scam-green))] text-white px-4 py-2 w-full mb-2 font-bold"
                >
                  GET MY COUPON NOW!
                </button>
              </div>
              <p className="text-xs text-gray-500">Limited time offer. Expires in 5 minutes!</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Download Popup */}
      {showDownloadPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 max-w-md relative border-8 border-[hsl(var(--scam-blue))]">
            <button 
              onClick={() => setShowDownloadPopup(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-blue-500 text-6xl mb-4">💾</div>
              <h2 className="text-2xl font-bold text-[hsl(var(--scam-blue))] mb-2">UPDATE REQUIRED!</h2>
              <p className="mb-4">Your Flash Player needs updating to view this content! Click below to download now!</p>
              <button 
                onClick={() => {
                  setShowDownloadPopup(false);
                  // Show disclaimer when user attempts a download
                  setShowDisclaimer(true);
                }}
                className="bg-[hsl(var(--scam-blue))] text-white px-4 py-2 w-full mb-2 font-bold"
              >
                DOWNLOAD UPDATE NOW
              </button>
              <p className="text-xs text-gray-500">Adobe Flash Player (2023) - Secure Download</p>
            </div>
          </div>
        </div>
      )}
      
      {/* Prize Popup */}
      {showPrizePopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-20">
          <div className="bg-white p-6 max-w-md relative border-8 border-[hsl(var(--scam-purple))]">
            <button 
              onClick={() => setShowPrizePopup(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              &times;
            </button>
            <div className="text-center">
              <div className="text-yellow-500 text-6xl mb-4 animate-spin">🏆</div>
              <h2 className="text-2xl font-bold text-[hsl(var(--scam-purple))] mb-2 blink">YOU'VE WON A PRIZE!!!</h2>
              <p className="mb-4">Spin the wheel to see what you've won! Prizes include MacBooks, iPhones, and Amazon Gift Cards!</p>
              <div className="mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560073744-7643b964bdf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=300&q=80" 
                  alt="Prize wheel" 
                  className="w-full mb-2"
                  style={{ filter: "saturate(200%)" }}
                />
                <button 
                  onClick={() => {
                    setShowPrizePopup(false);
                    // Show disclaimer when user attempts to claim a prize
                    setShowDisclaimer(true);
                  }}
                  className="bg-[hsl(var(--scam-purple))] text-white px-4 py-2 w-full mb-2 font-bold"
                >
                  SPIN NOW TO CLAIM!
                </button>
              </div>
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
