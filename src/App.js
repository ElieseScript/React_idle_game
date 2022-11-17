import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
function App() {
  const [click, setClick] = useState(999)
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
  const [mainClick, setMainClick]=useState(1)
  const [pointers, setPointers] = useState([
    { id: 1, name: 'x2 click for:', imageUrl:'./images/Pointers/Pointer_1.png', price: 1000},
    { id: 2, name: 'x2 click for:', imageUrl:'./images/Pointers/Pointer_2.png', price: 15000},
    { id: 3, name: 'x2 click for:', imageUrl:'./images/Pointers/Pointer_3.png', price: 50000},
    { id: 4, name: 'x2 click for:', imageUrl:'./images/Pointers/Pointer_4.png', price: 150000},
    { id: 5, name: 'x2 click for:', imageUrl:'./images/Pointers/Pointer_5.png', price: 400000},
    { id: 6, name: 'x2 click for:', imageUrl:'./images/Pointers/Pointer_6.png', price: 800000},
  ]);
  
  const handleClick = () => setClick(click+mainClick)

  const upgradeMain = (id,price) =>{
    if(click >= price){
      const newPointer = pointers.filter(
        (pointers) => pointers.id !== id
      );
      setPointers(newPointer);
      setClick((click)-price)
      setMainClick((mainClick)=>mainClick*2)
    }
  }

  const numSimp = (number) =>{
    return number.toLocaleString()
}
  const ValueData = {
    baseVals: [20,250,1000,5000,15000,50000,150000,300000,1000000,3500000,25000000,200000000,1000000000,10000000000,50000000000,350000000000,1000000000000,50000000000000,350000000000000,1000000000000000,25000000000000000,350000000000000000,1000000000000000000],
    additionals:[1,3,5,10,25,100,450,1000,5000,15000,50000,300000,650000,2500000,10000000,35000000,65000000,100000000,350000000,650000000,1000000000,5000000000,10000000000]
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
      if(click >= upgCalc(ValueData.baseVals[0],upg1)){
        setUpg1((upg1)=>upg1+1)
        setValue((value)=>value+ValueData.additionals[0])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[0],upg1)))
      }
      break;
      case 'upgrade2': 
      if(click >= upgCalc(ValueData.baseVals[1],upg2)){
        setUpg2((upg2)=>upg2+1)
        setValue((value)=>value+ValueData.additionals[1])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[1],upg2)))
      }
      break;
      case 'upgrade3': 
      if(click >= upgCalc(ValueData.baseVals[2],upg3)){
        setUpg3((upg3)=>upg3+1)
        setValue((value)=>value+ValueData.additionals[2])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[2],upg3)))
      }
      break;
      case 'upgrade4': 
      if(click >= upgCalc(ValueData.baseVals[3],upg4)){
        setUpg4((upg4)=>upg4+1)
        setValue((value)=>value+ValueData.additionals[3])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[3],upg4)))
      }
      break;
      case 'upgrade5': 
      if(click >= upgCalc(ValueData.baseVals[4],upg5)){
        setUpg5((upg5)=>upg5+1)
        setValue((value)=>value+ValueData.additionals[4])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[4],upg5)))
      }
      break;
      case 'upgrade6': 
      if(click >= upgCalc(ValueData.baseVals[5],upg6)){
        setUpg6((upg6)=>upg6+1)
        setValue((value)=>value+ValueData.additionals[5])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[5],upg6)))
      }
      break;
      case 'upgrade7': 
      if(click >= upgCalc(ValueData.baseVals[6],upg7)){
        setUpg7((upg7)=>upg7+1)
        setValue((value)=>value+ValueData.additionals[6])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[6],upg7)))
      }
      break;
      case 'upgrade8': 
      if(click >= upgCalc(ValueData.baseVals[7],upg8)){
        setUpg8((upg8)=>upg8+1)
        setValue((value)=>value+ValueData.additionals[7])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[7],upg8)))
      }
      break;
      case 'upgrade9': 
      if(click >= upgCalc(ValueData.baseVals[8],upg9)){
        setUpg9((upg9)=>upg9+1)
        setValue((value)=>value+ValueData.additionals[8])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[8],upg9)))
      }
      break;
      case 'upgrade10': 
      if(click >= upgCalc(ValueData.baseVals[9],upg10)){
        setUpg10((upg10)=>upg10+1)
        setValue((value)=>value+ValueData.additionals[9])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[9],upg10)))
      }
      break;
      case 'upgrade11': 
      if(click >= upgCalc(ValueData.baseVals[10],upg11)){
        setUpg11((upg11)=>upg11+1)
        setValue((value)=>value+ValueData.additionals[10])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[10],upg11)))
      }
      break;
      case 'upgrade12': 
      if(click >= upgCalc(ValueData.baseVals[11],upg12)){
        setUpg12((upg12)=>upg12+1)
        setValue((value)=>value+ValueData.additionals[11])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[11],upg12)))
      }
      break;
      case 'upgrade13': 
      if(click >= upgCalc(ValueData.baseVals[12],upg13)){
        setUpg13((upg13)=>upg13+1)
        setValue((value)=>value+ValueData.additionals[12])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[12],upg13)))
      }
      break;
      case 'upgrade14': 
      if(click >= upgCalc(ValueData.baseVals[13],upg14)){
        setUpg14((upg14)=>upg14+1)
        setValue((value)=>value+ValueData.additionals[13])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[13],upg14)))
      }
      break;
      case 'upgrade15': 
      if(click >= upgCalc(ValueData.baseVals[14],upg15)){
        setUpg15((upg15)=>upg15+1)
        setValue((value)=>value+ValueData.additionals[14])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[14],upg15)))
      }
      break;
      case 'upgrade16': 
      if(click >= upgCalc(ValueData.baseVals[15],upg16)){
        setUpg16((upg16)=>upg16+1)
        setValue((value)=>value+ValueData.additionals[15])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[15],upg16)))
      }
      break;
      case 'upgrade17': 
      if(click >= upgCalc(ValueData.baseVals[16],upg17)){
        setUpg17((upg17)=>upg17+1)
        setValue((value)=>value+ValueData.additionals[16])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[16],upg17)))
      }
      break;
      case 'upgrade18': 
      if(click >= upgCalc(ValueData.baseVals[17],upg18)){
        setUpg18((upg18)=>upg18+1)
        setValue((value)=>value+ValueData.additionals[17])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[17],upg18)))
      }
      break;
      case 'upgrade19': 
      if(click >= upgCalc(ValueData.baseVals[18],upg19)){
        setUpg19((upg19)=>upg19+1)
        setValue((value)=>value+ValueData.additionals[18])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[18],upg19)))
      }
      break;
      case 'upgrade20': 
      if(click >= upgCalc(ValueData.baseVals[19],upg20)){
        setUpg20((upg20)=>upg20+1)
        setValue((value)=>value+ValueData.additionals[19])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[19],upg20)))
      }
      break;
      case 'upgrade21': 
      if(click >= upgCalc(ValueData.baseVals[20],upg21)){
        setUpg21((upg21)=>upg21+1)
        setValue((value)=>value+ValueData.additionals[20])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[20],upg21)))
      }
      break;
      case 'upgrade22': 
      if(click >= upgCalc(ValueData.baseVals[21],upg22)){
        setUpg22((upg22)=>upg22+1)
        setValue((value)=>value+ValueData.additionals[21])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[21],upg22)))
      }
      break;
      case 'upgrade23': 
      if(click >= upgCalc(ValueData.baseVals[22],upg23)){
        setUpg23((upg23)=>upg23+1)
        setValue((value)=>value+ValueData.additionals[22])
        setClick((click)=>click-(upgCalc(ValueData.baseVals[22],upg23)))
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
        
        return (`population: +${abbreviateNumber(upg1*ValueData.additionals[0],stats)}`)
      }
      
    break;
    case 2:
      if(amount === true){
        
        return (`ammount: ${abbreviateNumber(upg2,stats)}`)
      }else{
       
        return (`population: +${abbreviateNumber(upg2*ValueData.additionals[1],stats)}`)
      }
    break;
    case 3:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg3,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg3*ValueData.additionals[2],stats)}`)
      }
    break;
    case 4:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg4,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg4*ValueData.additionals[3],stats)}`)
      }
    break;
    case 5:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg5,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg5*ValueData.additionals[4],stats)}`)
      }
    break;
    case 6:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg6,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg6*ValueData.additionals[5],stats)}`)
      }
    break;
    case 7:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg7,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg7*ValueData.additionals[6],stats)}`)
      }
    break;
    case 8:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg8,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg8*ValueData.additionals[7],stats)}`)
      }
    break;
    case 9:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg9,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg9*ValueData.additionals[8],stats)}`)
      }
    break;
    case 10:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg10,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg10*ValueData.additionals[9],stats)}`)
      }
    break;
    case 11:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg11,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg11*ValueData.additionals[10],stats)}`)
      }
    break;
    case 12:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg12,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg12*ValueData.additionals[11],stats)}`)
      }
    break;
    case 13:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg13,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg13*ValueData.additionals[12],stats)}`)
      }
    break;
    case 14:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg14,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg14*ValueData.additionals[13],stats)}`)
      }
    break;
    case 15:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg15,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg15*ValueData.additionals[14],stats)}`)
      }
    break;
    case 16:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg16,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg16*ValueData.additionals[15],stats)}`)
      }
    break;
    case 17:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg17,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg17*ValueData.additionals[16],stats)}`)
      }
    break;
    case 18:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg18,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg18*ValueData.additionals[17],stats)}`)
      }
    break;
    case 19:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg19,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg19*ValueData.additionals[18],stats)}`)
      }
    break;
    case 20:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg20,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg20*ValueData.additionals[19],stats)}`)
      }
    break;
    case 21:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg21,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg21*ValueData.additionals[20],stats)}`)
      }
    break;
    case 22:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg22,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg22*ValueData.additionals[21],stats)}`)
      }
    break;
    case 23:
      if(amount === true){
        return (`ammount: ${abbreviateNumber(upg23,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upg23*ValueData.additionals[22],stats)}`)
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
    
    document.title = (`Population Pop`)
    return () => clearInterval(interval);
    
  },[value]);

  return (
    <div className="main">
      
      <div className="countDisplay">
        <h1 >Population: { abbreviateNumber(click,stats)}</h1>
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
        <h5 className='UpgradeBanner'>Upgrade Menu:</h5>
        <ul >
        {pointers.map((pointers) => (
        
          <li key={pointers.id}
            onClick={() => upgradeMain(pointers.id,pointers.price)}
          >
            <img src={require(`${pointers.imageUrl}`)} title={`${pointers.name} ${abbreviateNumber(pointers.price,stats)}`}/>
          </li>
        
        ))}
        </ul>
        <button className="upgrade" value='upgrade1' onClick={upgradeManager} ><span className='icon'>🏠</span><span className='upgradeName'> Houses: ${abbreviateNumber(upgCalc(ValueData.baseVals[0],upg1),stats)}</span><span className='upgradeAmount'>{amountDisplay(1,price)}</span></button>
        <button className="upgrade" value='upgrade2' onClick={upgradeManager} ><span className='icon'>🚲</span><span className='upgradeName'> Bike Lanes: ${abbreviateNumber(upgCalc(ValueData.baseVals[1],upg2),stats)}</span><span className='upgradeAmount'>{amountDisplay(2,price)}</span></button>
        <button className="upgrade" value='upgrade3' onClick={upgradeManager} ><span className='icon'>🚌</span><span className='upgradeName'> Bus Netowrk: ${abbreviateNumber(upgCalc(ValueData.baseVals[2],upg3),stats)}</span><span className='upgradeAmount'>{amountDisplay(3,price)}</span></button>
        <button className="upgrade" value='upgrade4' onClick={upgradeManager} ><span className='icon'>🚊</span><span className='upgradeName'> Trams: ${abbreviateNumber(upgCalc(ValueData.baseVals[3],upg4),stats)}</span><span className='upgradeAmount'>{amountDisplay(4,price)}</span></button>
        <button className="upgrade" value='upgrade5' onClick={upgradeManager} ><span className='icon'>🏫</span><span className='upgradeName'> Schools: ${abbreviateNumber(upgCalc(ValueData.baseVals[4],upg5),stats)}</span><span className='upgradeAmount'>{amountDisplay(5,price)}</span></button>
        <button className="upgrade" value='upgrade6' onClick={upgradeManager} ><span className='icon'>🚕</span><span className='upgradeName'> Taxis: ${abbreviateNumber(upgCalc(ValueData.baseVals[5],upg6),stats)}</span><span className='upgradeAmount'>{amountDisplay(6,price)}</span></button>
        <button className="upgrade" value='upgrade7' onClick={upgradeManager} ><span className='icon'>🛻</span><span className='upgradeName'> MotorWay: ${abbreviateNumber(upgCalc(ValueData.baseVals[6],upg7),stats)}</span><span className='upgradeAmount'>{amountDisplay(7,price)}</span></button>
        <button className="upgrade" value='upgrade8' onClick={upgradeManager} ><span className='icon'>⛪</span><span className='upgradeName'> House of worship: ${abbreviateNumber(upgCalc(ValueData.baseVals[7],upg8),stats)}</span><span className='upgradeAmount'>{amountDisplay(8,price)}</span></button>
        <button className="upgrade" value='upgrade9' onClick={upgradeManager} ><span className='icon'>🏢</span><span className='upgradeName'> Offices: ${abbreviateNumber(upgCalc(ValueData.baseVals[8],upg9),stats)}</span><span className='upgradeAmount'>{amountDisplay(9,price)}</span></button>
        <button className="upgrade" value='upgrade10' onClick={upgradeManager} ><span className='icon'>🚑</span><span className='upgradeName'> Emergency Response: ${abbreviateNumber(upgCalc(ValueData.baseVals[9],upg10),stats)}</span><span className='upgradeAmount'>{amountDisplay(10,price)}</span></button>
        <button className="upgrade" value='upgrade11' onClick={upgradeManager} ><span className='icon'>🚈</span><span className='upgradeName'> Rail Network: ${abbreviateNumber(upgCalc(ValueData.baseVals[10],upg11),stats)}</span><span className='upgradeAmount'>{amountDisplay(11,price)}</span></button>
        <button className="upgrade" value='upgrade12' onClick={upgradeManager} ><span className='icon'>🚢</span><span className='upgradeName'> Harbor: ${abbreviateNumber(upgCalc(ValueData.baseVals[11],upg12),stats)}</span><span className='upgradeAmount'>{amountDisplay(12,price)}</span></button>
        <button className="upgrade" value='upgrade13' onClick={upgradeManager} ><span className='icon'>🗽</span><span className='upgradeName'> Tourist attraction: ${abbreviateNumber(upgCalc(ValueData.baseVals[12],upg13),stats)}</span><span className='upgradeAmount'>{amountDisplay(13,price)}</span></button>
        <button className="upgrade" value='upgrade14' onClick={upgradeManager} ><span className='icon'>🏨</span><span className='upgradeName'> Hotels: ${abbreviateNumber(upgCalc(ValueData.baseVals[13],upg14),stats)}</span><span className='upgradeAmount'>{amountDisplay(14,price)}</span></button>
        <button className="upgrade" value='upgrade15' onClick={upgradeManager} ><span className='icon'>🧬</span><span className='upgradeName'> Scientific Research: ${abbreviateNumber(upgCalc(ValueData.baseVals[14],upg15),stats)}</span><span className='upgradeAmount'>{amountDisplay(15,price)}</span></button>
        <button className="upgrade" value='upgrade16' onClick={upgradeManager} ><span className='icon'>🔭</span><span className='upgradeName'> Space Research: ${abbreviateNumber(upgCalc(ValueData.baseVals[15],upg16),stats)}</span><span className='upgradeAmount'>{amountDisplay(16,price)}</span></button>
        <button className="upgrade" value='upgrade17' onClick={upgradeManager} ><span className='icon'>🤖</span><span className='upgradeName'> Artificial Inteligence: ${abbreviateNumber(upgCalc(ValueData.baseVals[16],upg17),stats)}</span><span className='upgradeAmount'>{amountDisplay(17,price)}</span></button>
        <button className="upgrade" value='upgrade18' onClick={upgradeManager} ><span className='icon'>🚀</span><span className='upgradeName'> Lunar Presence: ${abbreviateNumber(upgCalc(ValueData.baseVals[17],upg18),stats)}</span><span className='upgradeAmount'>{amountDisplay(18,price)}</span></button>
        <button className="upgrade" value='upgrade19' onClick={upgradeManager} ><span className='icon'>☀️</span><span className='upgradeName'> Local System Presence: ${abbreviateNumber(upgCalc(ValueData.baseVals[18],upg19),stats)}</span><span className='upgradeAmount'>{amountDisplay(19,price)}</span></button>
        <button className="upgrade" value='upgrade20' onClick={upgradeManager} ><span className='icon'>🦾</span><span className='upgradeName'> Singularity Event: ${abbreviateNumber(upgCalc(ValueData.baseVals[19],upg20),stats)}</span><span className='upgradeAmount'>{amountDisplay(20,price)}</span></button>
        <button className="upgrade" value='upgrade21' onClick={upgradeManager} ><span className='icon'>🏛️</span><span className='upgradeName'> Philosophy: ${abbreviateNumber(upgCalc(ValueData.baseVals[20],upg21),stats)}</span><span className='upgradeAmount'>{amountDisplay(21,price)}</span></button>
        <button className="upgrade" value='upgrade22' onClick={upgradeManager} ><span className='icon'>👽</span><span className='upgradeName'> Alien Contact: ${abbreviateNumber(upgCalc(ValueData.baseVals[21],upg22),stats)}</span><span className='upgradeAmount'>{amountDisplay(22,price)}</span></button>
        <button className="upgrade" value='upgrade23' onClick={upgradeManager} ><span className='icon'>🌌</span><span className='upgradeName'> Galactic Presence: ${abbreviateNumber(upgCalc(ValueData.baseVals[22],upg23),stats)}</span><span className='upgradeAmount'>{amountDisplay(23,price)}</span></button>
      </div>
    </div>
  );
}

export default App;
