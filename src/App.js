import Logo from "./components/Logo";
import './App.css';
import React, {useState} from "react";
import Header from "./components/Header";

  function App() {
    const [walletAddress, setwalletAddress] = useState("");
    const [readOnly, setreadOnly] = useState(false);
    const [numbers, setnumbers] = useState(0);
    const [electricity, setelectricity] = useState(0);
    const [setmilescar, milescar] = useState(0);
    const [setmilesmob, milesmob] = useState(0);
    const [setmilespt, milespt] = useState(0);
    const [setfnb, fnb] = useState(0);
    const [setpharma, pharma] = useState(0);
    const [setclothes, clothes] = useState(0);
    const [setcomp, comp] = useState(0);
    const [seteducation, education] = useState(0);
    const [setrcs, rcs] = useState(0);
    const [setcrbnftprnt,crbnftprnt] = useState(50); 

    const ConnectWallet = async () => {
      try {
        const { ethereum } = window;
        if (!ethereum) {
          console.log("Please install MetaMask");
          return;
        } else {
          const accounts = await ethereum.request({
            method: "eth_requestAccounts",
          });
          setwalletAddress(accounts[0]);
          console.log("Connected", walletAddress);
        }
        } catch (error) {
        console.log(error);
      }
      };

      const handleChange = (event) => {
        if (event.target.value !== "0") {
          setnumbers(event.target.value);
        }
  
        else {
          alert("Incorrect value for Household Members. Try again!");
        }
        
      };
  async function computefootprint() {
    return 0
  }

    return (
      <div className="App">
        <header className="center">
        <Logo />
        <Header title = "Carbon Footprint Calculator dApp" />
        <div className = "right">
        {walletAddress === "" ? (<button onClick={() => ConnectWallet()} > Metamask Connect Wallet </button>) :(<p> Wallet Address Connected </p>)}
        </div>
      <h3>House</h3>
      <label>
      Select Number of Household Members: &nbsp;
      <select value={numbers} onChange={handleChange}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      </select>
      </label>
      <br/>
      <label>Electricity Consumed (in kWh)? &nbsp;</label>
          <input onChange={(e)=>(setelectricity(e.target.value))} disabled = {readOnly} value = {electricity} type="text"/>
      <h3> Transport Used (in km)</h3>
      <label>By Car? &nbsp;</label>
          <input onChange={(e)=>(setmilescar(e.target.value))} disabled = {readOnly} value = {milescar} type="text"/>
          <br/>
      <label>By Motorbike? &nbsp;</label>
          <input onChange={(e)=>(setmilesmob(e.target.value))} disabled = {readOnly} value = {milesmob} type="text"/>
          <br/>
      <label>By Public Transport? &nbsp;</label>
          <input onChange={(e)=>(setmilespt(e.target.value))} disabled = {readOnly} value = {milespt} type="text"/>
          <br/>
      <h3> Money Spent On (in rupees)</h3>
      <label>Food & Beverages &nbsp;</label>
          <input onChange={(e)=>(setfnb(e.target.value))} disabled = {readOnly} value = {fnb} type="text"/>
          <br/>
      <label>Pharmaceuticals &nbsp;</label>
          <input onChange={(e)=>(setpharma(e.target.value))} disabled = {readOnly} value = {pharma} type="text"/>
          <br/>
      <label>Clothes &nbsp;</label>
          <input onChange={(e)=>(setclothes(e.target.value))} disabled = {readOnly} value = {clothes} type="text"/>
          <br/>
      <label>Computers & IT &nbsp;</label>
          <input onChange={(e)=>(setcomp(e.target.value))} disabled = {readOnly} value = {comp} type="text"/>
          <br/>
      <label>Education &nbsp;</label>
          <input onChange={(e)=>(seteducation(e.target.value))} disabled = {readOnly} value = {education} type="text"/>
          <br/>
      <label>Recreation, Cultural or Sporting activities &nbsp;</label>
          <input onChange={(e)=>(setrcs(e.target.value))} disabled = {readOnly} value = {rcs} type="text"/>
          <br/>
          <br/>
      <button disabled={readOnly} onClick={() => computefootprint()}>{readOnly ? "Computing..." : "Compute"}</button>
        </header>
        <p> <b>Your Carbon Footprint:</b>{crbnftprnt} metric tons of CO2e</p>
      </div>
  );
}

export default App;