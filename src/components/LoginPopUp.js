import React, { useRef, useState } from "react";
import { useAuth } from "../context/firebaseContext";
import '../components/LoginPopUp.css'
import { BoxIconElement } from "boxicons";

function LoginPopUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, signUp } = useAuth();
  const [isLoginMode, setIsLoginMode] = useState(true);

  const switchMode = () => {
    setIsLoginMode((prevMode) => !prevMode);
  };

  async function handleAuth() {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log("Email and Passwort:", email, password);

    try {
      if (isLoginMode) {
        await login(email, password);
      } else {
        await signUp(email, password);
      }
      // Wenn die Anmeldung oder Registrierung erfolgreich ist, kannst du das Popup schließen oder andere Aktionen durchführen
    } catch (error) {
      console.error('Fehler bei der Authentifizierung:', error.message);
      // Hier kannst du die Fehlermeldung behandeln, z.B. dem Benutzer mitteilen, dass die Anmeldung oder Registrierung fehlgeschlagen ist
    }
  }

  return (
    <div className="wrapper">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>{isLoginMode ? "Anmelden" : "Registrieren"}</h1>
        <div className="input-box">
          <input type="email" ref={emailRef} required placeholder="Email"/>
        </div>
        <div class="input-box">
          <input type="password" ref={passwordRef} required placeholder="Password"/>
        </div>
        <button onClick={handleAuth} className=" btn">
          {isLoginMode ? "Anmelden" : "Registrieren"}
        </button>
        <div className="register-link">
        <p>
          {isLoginMode
            ? "Noch keinen Account? "
            : "Bereits registriert? "}
          <span onClick={switchMode}>
            {isLoginMode ? "Registrieren" : "Anmelden"}
          </span>
        </p>
        </div>
      </form>
    </div>
  );
}

export default LoginPopUp;
