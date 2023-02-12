import React from "react";
import logo from "../logo.png";
import "./Doctor.css";

export default function Doctor() {
  return (
    <div className="App">
      <header className="Header">
        <image className="Logo" src={logo} alt="logo" />
        <header className="SmallHeader">
          <text className="TitleFrame">
            <text className="Title">Doctor</text>
          </text>
          <button className="WalletConnectButton">
            <text className="WalletConnectText">Connect Wallet</text>
          </button>
        </header>
      </header>

      <body className="Body">
        <body className="MedicalCardFrame">
          <body className="MedicalCardTextFrame">
            <body className="MedicalCardText">Medical Card</body>
          </body>
          <body className="InfoDisplay"></body>
        </body>
        <body className="SearchBarFrame">
          <body className="SmallerSearchBarFrame">
            <button className="SearchPatientButton">
              <text className="SearchPatientButtonText">Search Patient</text>
            </button>
            <body className="SearchPatient"></body>
            <button className="Arrow">
              <image className="ArrowLines"></image>
            </button>
          </body>
        </body>
      </body>
    </div>
  );
}
