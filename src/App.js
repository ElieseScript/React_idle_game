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
  const [upg11, setUpg11] = useState(0)
  const [upg12, setUpg12] = useState(0)
  const [upg13, setUpg13] = useState(0)
  const [upg14, setUpg14] = useState(0)
  const [upg15, setUpg15] = useState(0)
  const [upg16, setUpg16] = useState(0)
  const [upg17, setUpg17] = useState(0)
  const [upg18, setUpg18] = useState(0)
  const [upg19, setUpg19] = useState(0)
  const [upg20, setUpg20] = useState(0)
  const [upg21, setUpg21] = useState(0)
  const [upg22, setUpg22] = useState(0)
  const [upg23, setUpg23] = useState(0)
  const [stats, setStats] = useState(false)
  const [price, setPrice] = useState(false)
  const spaces =  <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
  const handleClick = () => setClick(click+1)
  const numSimp = (number) =>{
    return number.toLocaleString()
}
const abbreviateNumber=(value, bool)=> {
  
  if(bool === true && value>100){
    let newValue = value;
    const suffixes = ["","k", "M", "B","T"," quad"," Quin"," sext"," Sept"," Oct"," Non"," Dec"];
    let suffixNum = 0;
    while (newValue >= 1000) {
      newValue /= 1000;
      suffixNum++;
    }
    newValue = newValue.toPrecision(3);

    newValue += suffixes[suffixNum];
    return newValue;
  }else{
    return numSimp(value)
  }
  

  
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
        setValue((value)=>value+450)
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
      case 'upgrade11': 
      if(click >= upgCalc(25000000,upg11)){
        setUpg11((upg11)=>upg11+1)
        setValue((value)=>value+50000)
        setClick((click)=>click-(upgCalc(25000000,upg11)))
      }
      break;
      case 'upgrade12': 
      if(click >= upgCalc(200000000,upg12)){
        setUpg12((upg12)=>upg12+1)
        setValue((value)=>value+300000)
        setClick((click)=>click-(upgCalc(200000000,upg12)))
      }
      break;
      case 'upgrade13': 
      if(click >= upgCalc(1000000000,upg13)){
        setUpg13((upg13)=>upg13+1)
        setValue((value)=>value+650000)
        setClick((click)=>click-(upgCalc(1000000000,upg13)))
      }
      break;
      case 'upgrade14': 
      if(click >= upgCalc(10000000000,upg14)){
        setUpg14((upg14)=>upg14+1)
        setValue((value)=>value+2500000)
        setClick((click)=>click-(upgCalc(10000000000,upg14)))
      }
      break;
      case 'upgrade15': 
      if(click >= upgCalc(50000000000,upg15)){
        setUpg15((upg15)=>upg15+1)
        setValue((value)=>value+10000000)
        setClick((click)=>click-(upgCalc(50000000000,upg15)))
      }
      break;
      case 'upgrade16': 
      if(click >= upgCalc(350000000000,upg16)){
        setUpg16((upg16)=>upg16+1)
        setValue((value)=>value+35000000)
        setClick((click)=>click-(upgCalc(350000000000,upg16)))
      }
      break;
      case 'upgrade17': 
      if(click >= upgCalc(1000000000000,upg17)){
        setUpg17((upg17)=>upg17+1)
        setValue((value)=>value+65000000)
        setClick((click)=>click-(upgCalc(1000000000000,upg17)))
      }
      break;
      case 'upgrade18': 
      if(click >= upgCalc(50000000000000,upg18)){
        setUpg18((upg18)=>upg18+1)
        setValue((value)=>value+100000000)
        setClick((click)=>click-(upgCalc(50000000000000,upg18)))
      }
      break;
      case 'upgrade19': 
      if(click >= upgCalc(350000000000000,upg19)){
        setUpg19((upg19)=>upg19+1)
        setValue((value)=>value+350000000)
        setClick((click)=>click-(upgCalc(350000000000000,upg19)))
      }
      break;
      case 'upgrade20': 
      if(click >= upgCalc(1000000000000000,upg20)){
        setUpg20((upg20)=>upg20+1)
        setValue((value)=>value+650000000)
        setClick((click)=>click-(upgCalc(1000000000000000,upg20)))
      }
      break;
      case 'upgrade21': 
      if(click >= upgCalc(25000000000000000,upg21)){
        setUpg21((upg21)=>upg21+1)
        setValue((value)=>value+1000000000)
        setClick((click)=>click-(upgCalc(25000000000000000,upg21)))
      }
      break;
      case 'upgrade22': 
      if(click >= upgCalc(350000000000000000,upg22)){
        setUpg22((upg22)=>upg22+1)
        setValue((value)=>value+5000000000)
        setClick((click)=>click-(upgCalc(350000000000000000,upg22)))
      }
      break;
      case 'upgrade23': 
      if(click >= upgCalc(1000000000000000000,upg23)){
        setUpg23((upg23)=>upg23+1)
        setValue((value)=>value+10000000000)
        setClick((click)=>click-(upgCalc(1000000000000000000,upg23)))
      }
      break;
    }
    
  }
  

  const statNerd = ()=>{
    
      if(stats === false){
        setStats((stats)=>true);
      }else{
        setStats((stats)=>false);
      }
  }
 const priceNerd =()=>{

  if(price === false){
    setPrice((price)=>true);
  }else{
    setPrice((price)=>false);
  }
}

const amountDisplay = (upgrade, amount)=>{
  switch(upgrade){
    case 1:
      if(amount === true){
        
        return (`ammount: ${abbreviateNumber(upg1,stats)}`)
      }else{
        
        return (`population: +${abbreviateNumber(upg1,stats)}`)
      }
      
    break;
    case 2:
      if(amount === true){
        
        return (`ammount: ${abbreviateNumber(upg2,stats)}`)
      }else{
       
        return (`population: +${abbreviateNumber(upg2*3,stats)}`)
      }
    break;
    case 3:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg3,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg3*5,stats)}`)
      }
    break;
    case 4:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg4,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg4*10,stats)}`)
      }
    break;
    case 5:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg5,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg5*25,stats)}`)
      }
    break;
    case 6:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg6,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg6*100,stats)}`)
      }
    break;
    case 7:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg7,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg7*450,stats)}`)
      }
    break;
    case 8:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg8,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg8*1000,stats)}`)
      }
    break;
    case 9:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg9,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg9*5000,stats)}`)
      }
    break;
    case 10:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg10,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg10*15000,stats)}`)
      }
    break;
    case 11:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg11,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg11*50000,stats)}`)
      }
    break;
    case 12:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg12,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg12*300000,stats)}`)
      }
    break;
    case 13:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg13,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg13*560000,stats)}`)
      }
    break;
    case 14:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg14,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg14*2500000,stats)}`)
      }
    break;
    case 15:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg15,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg15*10000000,stats)}`)
      }
    break;
    case 16:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg16,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg16*35000000,stats)}`)
      }
    break;
    case 17:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg17,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg17*65000000,stats)}`)
      }
    break;
    case 18:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg18,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg18*100000000,stats)}`)
      }
    break;
    case 19:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg19,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg19*350000000,stats)}`)
      }
    break;
    case 20:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg20,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg20*650000000,stats)}`)
      }
    break;
    case 21:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg21,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg21*1000000000,stats)}`)
      }
    break;
    case 22:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg22,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg22*5000000000,stats)}`)
      }
    break;
    case 23:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg23,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg23*10000000000,stats)}`)
      }
    break;

    
    default:
    break;
  }
}

  
  useEffect(() => {
    const interval = setInterval(() => {
      
    
      setClick((click)=>click+value)
    }, 1000);
    
    document.title = (`Pop: ${abbreviateNumber(click,stats )}`)
    return () => clearInterval(interval);
    
  },[value]);

  return (
    <div className="main">
      
      <div className="countDisplay">
        <h1>Population: { abbreviateNumber(click,stats)}</h1>
        <h6>cps: { abbreviateNumber(value,stats)}</h6>

        <div >
          <button className="mainButton" onClick={handleClick}>click</button>
        </div>
        <div id="statTog">
            <button id="statTogButton" onClick={statNerd}>Toggle stats</button>
            <button  id="statTogButton" onClick={priceNerd}>Toggle amount</button>
          </div>

      </div>
       
      <div className="upgradesMenu">
        <h5>Upgrade Menu:</h5>
        <button className="upgrade" value='upgrade1' onClick={upgradeManager} >🏠 Houses: ${abbreviateNumber(upgCalc(20,upg1),stats)}{spaces}{amountDisplay(1,price)}</button>
        <button className="upgrade" value='upgrade2' onClick={upgradeManager} >🚲 Bike Lanes: ${abbreviateNumber(upgCalc(250,upg2),stats)}{spaces}{amountDisplay(2,price)}</button>
        <button className="upgrade" value='upgrade3' onClick={upgradeManager} >🚌 Bus Netowrk: ${abbreviateNumber(upgCalc(1000,upg3),stats)}{spaces}{amountDisplay(3,price)}</button>
        <button className="upgrade" value='upgrade4' onClick={upgradeManager} >🚊 Trams: ${abbreviateNumber(upgCalc(5000,upg4),stats)}{spaces}{amountDisplay(4,price)}</button>
        <button className="upgrade" value='upgrade5' onClick={upgradeManager} >🏫 Schools: ${abbreviateNumber(upgCalc(15000,upg5),stats)}{spaces}{amountDisplay(5,price)}</button>
        <button className="upgrade" value='upgrade6' onClick={upgradeManager} >🚕 Taxis: ${abbreviateNumber(upgCalc(50000,upg6),stats)}{spaces}{amountDisplay(6,price)}</button>
        <button className="upgrade" value='upgrade7' onClick={upgradeManager} >🛻 MotorWay: ${abbreviateNumber(upgCalc(150000,upg7),stats)}{spaces}{amountDisplay(7,price)}</button>
        <button className="upgrade" value='upgrade8' onClick={upgradeManager} >⛪ House of worship: ${abbreviateNumber(upgCalc(300000,upg8),stats)}{spaces}{amountDisplay(8,price)}</button>
        <button className="upgrade" value='upgrade9' onClick={upgradeManager} >🏢 Offices: ${abbreviateNumber(upgCalc(1000000,upg9),stats)}{spaces}{amountDisplay(9,price)}</button>
        <button className="upgrade" value='upgrade10' onClick={upgradeManager} >🚑 Emergency Response: ${abbreviateNumber(upgCalc(3500000,upg10),stats)}{spaces}{amountDisplay(10,price)}</button>
        <button className="upgrade" value='upgrade11' onClick={upgradeManager} >🚈 Rail Network: ${abbreviateNumber(upgCalc(25000000,upg11),stats)}{spaces}{amountDisplay(11,price)}</button>
        <button className="upgrade" value='upgrade12' onClick={upgradeManager} >🚢 Harbor: ${abbreviateNumber(upgCalc(200000000,upg12),stats)}{spaces}{amountDisplay(12,price)}</button>
        <button className="upgrade" value='upgrade13' onClick={upgradeManager} >🗽 Tourist attraction: ${abbreviateNumber(upgCalc(1000000000,upg13),stats)}{spaces}{amountDisplay(13,price)}</button>
        <button className="upgrade" value='upgrade14' onClick={upgradeManager} >🏨 Hotels: ${abbreviateNumber(upgCalc(10000000000,upg14),stats)}{spaces}{amountDisplay(14,price)}</button>
        <button className="upgrade" value='upgrade15' onClick={upgradeManager} >🧬 Scientific Research: ${abbreviateNumber(upgCalc(50000000000,upg15),stats)}{spaces}{amountDisplay(15,price)}</button>
        <button className="upgrade" value='upgrade16' onClick={upgradeManager} >🔭 Space Research: ${abbreviateNumber(upgCalc(350000000000,upg16),stats)}{spaces}{amountDisplay(16,price)}</button>
        <button className="upgrade" value='upgrade17' onClick={upgradeManager} >🤖 Artificial Inteligence: ${abbreviateNumber(upgCalc(1000000000000,upg17),stats)}{spaces}{amountDisplay(17,price)}</button>
        <button className="upgrade" value='upgrade18' onClick={upgradeManager} >🚀 Lunar Presence: ${abbreviateNumber(upgCalc(50000000000000,upg18),stats)}{spaces}{amountDisplay(18,price)}</button>
        <button className="upgrade" value='upgrade19' onClick={upgradeManager} >☀️ Local System Presence: ${abbreviateNumber(upgCalc(350000000000000,upg19),stats)}{spaces}{amountDisplay(19,price)}</button>
        <button className="upgrade" value='upgrade20' onClick={upgradeManager} >🦾 Singularity Event: ${abbreviateNumber(upgCalc(1000000000000000,upg20),stats)}{spaces}{amountDisplay(20,price)}</button>
        <button className="upgrade" value='upgrade21' onClick={upgradeManager} >🏛️ Philosophy: ${abbreviateNumber(upgCalc(25000000000000000,upg21),stats)}{spaces}{amountDisplay(21,price)}</button>
        <button className="upgrade" value='upgrade22' onClick={upgradeManager} >👽 Alien Contact: ${abbreviateNumber(upgCalc(350000000000000000,upg22),stats)}{spaces}{amountDisplay(22,price)}</button>
        <button className="upgrade" value='upgrade23' onClick={upgradeManager} >🌌 Galactic Presence: ${abbreviateNumber(upgCalc(1000000000000000000,upg23),stats)}{spaces}{amountDisplay(23,price)}</button>
      </div>
    </div>
  );
}

export default App;
