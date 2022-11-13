import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
function App() {
  const [click, setClick] = useState(0)
  const [value, setValue] = useState(0)
  const [upg1, setUpg1] = useState(0)
  const [upg2, setUpg2] = useState(0)
  const [upg3, setUpg3] = useState(0)
  const [upg4, setUpg4] = useState(0)
  const [upg5, setUpg5] = useState(0)
  const [upg6, setUpg6] = useState(0)
  const [upg7, setUpg7] = useState(0)
  const [upg8, setUpg8] = useState(0)
  const [upg9, setUpg9] = useState(0)
  const [upg10, setUpg10] = useState(0)
  
  const handleClick = () => setClick(click+1)

  const numSimp = (number) =>{
    return number.toLocaleString()
}

  const upgCalc = (base, curAmm) =>{
    return Math.floor(base * (1.25**curAmm))
  }

  const upgradeManager=(e)=>{
    
    switch(e.target.value){
      case 'upgrade1': 
      if(click >= upgCalc(20,upg1)){
        setUpg1((upg1)=>upg1+1)
        setValue((value)=>value+1)
        setClick((click)=>click-(upgCalc(20,upg1)))
      }
      break;
      case 'upgrade2': 
      if(click >= upgCalc(250,upg2)){
        setUpg2((upg2)=>upg2+1)
        setValue((value)=>value+3)
        setClick((click)=>click-(upgCalc(250,upg2)))
      }
      break;
      case 'upgrade3': 
      if(click >= upgCalc(1000,upg3)){
        setUpg3((upg3)=>upg3+1)
        setValue((value)=>value+5)
        setClick((click)=>click-(upgCalc(1000,upg3)))
      }
      break;
      case 'upgrade4': 
      if(click >= upgCalc(5000,upg4)){
        setUpg4((upg4)=>upg4+1)
        setValue((value)=>value+10)
        setClick((click)=>click-(upgCalc(5000,upg4)))
      }
      break;
      case 'upgrade5': 
      if(click >= upgCalc(15000,upg5)){
        setUpg5((upg5)=>upg5+1)
        setValue((value)=>value+25)
        setClick((click)=>click-(upgCalc(15000,upg5)))
      }
      break;
      case 'upgrade6': 
      if(click >= upgCalc(50000,upg6)){
        setUpg6((upg6)=>upg6+1)
        setValue((value)=>value+100)
        setClick((click)=>click-(upgCalc(50000,upg6)))
      }
      break;
      case 'upgrade7': 
      if(click >= upgCalc(150000,upg7)){
        setUpg7((upg7)=>upg7+1)
        setValue((value)=>value+250)
        setClick((click)=>click-(upgCalc(150000,upg7)))
      }
      break;
      case 'upgrade8': 
      if(click >= upgCalc(300000,upg8)){
        setUpg8((upg8)=>upg8+1)
        setValue((value)=>value+1000)
        setClick((click)=>click-(upgCalc(300000,upg8)))
      }
      break;
      case 'upgrade9': 
      if(click >= upgCalc(1000000,upg9)){
        setUpg9((upg9)=>upg9+1)
        setValue((value)=>value+5000)
        setClick((click)=>click-(upgCalc(1000000,upg9)))
      }
      break;
      case 'upgrade10': 
      if(click >= upgCalc(3500000,upg10)){
        setUpg10((upg10)=>upg10+1)
        setValue((value)=>value+15000)
        setClick((click)=>click-(upgCalc(3500000,upg10)))
      }
      break;
    }
    
  }
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      
    
      setClick((click)=>click+value)
    }, 1000);
    
    document.title = (`Clicks: ${numSimp(click )}`)
    return () => clearInterval(interval);
    
  },[click,value]);

  return (
    <div className="main">
      
      <div className="countDisplay">
        <h1>Clicks: { numSimp(click)}</h1>
        <h6>cps: { numSimp(value)}</h6>

        <div>
          <button className="mainButton" onClick={handleClick}>click</button>
        </div>

      </div>
       
      <div className="upgradesMenu">
        <h5>Upgrade Menu:</h5>
        <button className="upgrade" value='upgrade1' onClick={upgradeManager} >Upgrade 1: {numSimp(upgCalc(20,upg1))}</button>
        <button className="upgrade" value='upgrade2' onClick={upgradeManager} >Upgrade 2: {numSimp(upgCalc(250,upg2))}</button>
        <button className="upgrade" value='upgrade3' onClick={upgradeManager} >Upgrade 3: {numSimp(upgCalc(1000,upg3))}</button>
        <button className="upgrade" value='upgrade4' onClick={upgradeManager} >Upgrade 4: {numSimp(upgCalc(5000,upg4))}</button>
        <button className="upgrade" value='upgrade5' onClick={upgradeManager} >Upgrade 5: {numSimp(upgCalc(15000,upg5))}</button>
        <button className="upgrade" value='upgrade6' onClick={upgradeManager} >Upgrade 6: {numSimp(upgCalc(50000,upg6))}</button>
        <button className="upgrade" value='upgrade7' onClick={upgradeManager} >Upgrade 7: {numSimp(upgCalc(150000,upg7))}</button>
        <button className="upgrade" value='upgrade8' onClick={upgradeManager} >Upgrade 8: {numSimp(upgCalc(300000,upg8))}</button>
        <button className="upgrade" value='upgrade9' onClick={upgradeManager} >Upgrade 9: {numSimp(upgCalc(1000000,upg9))}</button>
        <button className="upgrade" value='upgrade10' onClick={upgradeManager} >Upgrade 10: {numSimp(upgCalc(3500000,upg10))}</button>
      </div>
    </div>
  );
}

export default App;
