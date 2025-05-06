import React, { createContext, useState, useContext, useCallback } from "react";

interface PopupState {
  popup1: boolean;
  popup2: boolean;
  popup3: boolean;
}

interface PopupContextType {
  popups: PopupState;
  showGooglePopup: boolean;
  showSurveyForm: boolean;
  showSuccessPopup: boolean;
  showNotificationPopup: boolean;
  showDisclaimer: boolean;
  setShowGooglePopup: (show: boolean) => void;
  setShowSurveyForm: (show: boolean) => void;
  setShowSuccessPopup: (show: boolean) => void;
  setShowNotificationPopup: (show: boolean) => void;
  setShowDisclaimer: (show: boolean) => void;
  triggerRandomPopup: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [popups, setPopups] = useState<PopupState>({
    popup1: false,
    popup2: false,
    popup3: false
  });
  
  const [showGooglePopup, setShowGooglePopup] = useState(false);
  const [showSurveyForm, setShowSurveyForm] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showNotificationPopup, setShowNotificationPopup] = useState(false);
  const [showDisclaimer, setShowDisclaimer] = useState(false);

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

  return (
    <PopupContext.Provider value={{
      popups,
      showGooglePopup,
      showSurveyForm,
      showSuccessPopup,
      showNotificationPopup,
      showDisclaimer,
      setShowGooglePopup,
      setShowSurveyForm,
      setShowSuccessPopup,
      setShowNotificationPopup,
      setShowDisclaimer,
      triggerRandomPopup
    }}>
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
}
