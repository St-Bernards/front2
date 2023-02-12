import logo from "./logo.png";
import shape from "./index.png";
import avax from "./avax.png";
import "./App.css";

function App() {
  return (
    <div className="LandingPage">
      <header className="TitleHeader">
        <image className="AppLogo" src={logo} alt="logo" />
        <header className="navbar">
          <text className="AppTitle">
            <text className="TextTitle">St Bernard</text>
            <image className="TextImage" src={avax} alt="avax" />
          </text>
          <button className="Button">
            <text className="TextButton">Connect Wallet</text>
          </button>
        </header>
      </header>
      <body className="BodyForText">
        <text className="TextForBodyBlack">
          Empowering Patients with Secure and Decentralized Health Information
          Access
        </text>
      </body>
      <body className="BodyForText2">
        <text className="TextForBody2">
          Health carely is a new way to get health insurance quotes. We offer
          tools similar to those provided by insurance companies for free and
          prices are based on donations and not restrictive health plan
          networks.
        </text>
      </body>

      <body className="ButtonSet">
        <button className="Button">
          <text className="TextButton">Doctor</text>
        </button>
        <button className="Button">
          <text className="TextButton">Patient</text>
        </button>
      </body>
      <body className="BodyForElypse">
        <image className="Elypse" src={shape} alt="shape" />
      </body>
    </div>
  );
}

export default App;
