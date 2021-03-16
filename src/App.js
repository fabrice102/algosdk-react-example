import logo from './logo.svg';
import './App.css';
import algosdk from 'algosdk';
import { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState();
  useEffect(async () => {
    const algodClient = new algosdk.Algodv2("", "https://api.testnet.algoexplorer.io", 443);
    setStatus(await algodClient.status().do());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Here is the Algorand status:
        </p>
        <pre style={{textAlign: "left", fontSize: "large"}}>
          {JSON.stringify(status, null, 2)}
        </pre>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
