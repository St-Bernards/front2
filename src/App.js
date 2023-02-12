import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <image className="App-logo" src={logo} alt="logo" />
        <header className="navbar">
          <text className="App-title">
            <text className="textTitle">St Bernard</text>
          </text>
          <button className="Button">
            <text className="textButton">Connect Wallet</text>
          </button>
        </header>
      </header>
      <body className="bodyFrame">
        <text className="bodyText">
          Empowering Patients with Secure and Decentralized Health Information
          Access
        </text>
        <text className="bodyText2">
          Health carely is a new way to get health insurance quotes. We offer
          tools similar to those provided by insurance companies for free and
          prices are based on donations and not restrictive health plan
          networks.
        </text>
        <body className="buttonSet">
          <button className="Button">
            <text className="textButton">Doctor</text>
          </button>
          <button className="Button">
            <text className="textButton">Patient</text>
          </button>
        </body>
      </body>
    </div>
  );
}

export default App;
