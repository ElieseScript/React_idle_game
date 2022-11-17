import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
function App() {
  const [click, setClick] = useState(999)
  const [value, setValue] = useState(0)
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
  const [upgs, setUpgs] = useState([
    {id: 1, name: 'upg1', basePrice: 20, icon:'🏠',info:'Houses',ammount:0,adds: 1},
    {id: 2, name: 'upg2', basePrice: 250, icon:'🚲',info:'Bike Lanes',ammount:0,adds: 3},
    {id: 3, name: 'upg3', basePrice: 1000, icon:'🚌',info:'Bus Netowrk',ammount:0,adds: 5},
    {id: 4, name: 'upg4', basePrice: 5000, icon:'🚊',info:'Trams',ammount:0,adds: 10},
    {id: 5, name: 'upg5', basePrice: 15000, icon:'🏫',info:'Schools',ammount:0,adds: 25},
    {id: 6, name: 'upg6', basePrice:50000, icon:'🚕',info:'Taxis',ammount:0,adds: 100},
    {id: 7, name: 'upg7', basePrice: 150000, icon:'🛻',info:'MotorWay',ammount:0,adds: 450},
    {id: 8, name: 'upg8', basePrice: 300000, icon:'⛪',info:'House of worship',ammount:0,adds: 1000},
    {id: 9, name: 'upg9', basePrice: 1000000, icon:'🏢',info:'Offices',ammount:0,adds: 5000},
    {id: 10, name: 'upg10', basePrice: 3500000, icon:'🚑',info:'Emergency Response',ammount:0,adds: 15000},
    {id: 11, name: 'upg11', basePrice: 25000000, icon:'🚈',info:'Rail Network',ammount:0,adds: 50000},
    {id: 12, name: 'upg12', basePrice: 200000000, icon:'🚢',info:'Harbor',ammount:0,adds: 300000},
    {id: 13, name: 'upg13', basePrice: 1000000000, icon:'🗽',info:'Tourist attraction',ammount:0,adds: 650000},
    {id: 14, name: 'upg14', basePrice: 10000000000, icon:'🏨',info:'Hotels',ammount:0,adds: 2500000},
    {id: 15, name: 'upg15', basePrice: 50000000000, icon:'🧬',info:'Scientific Research',ammount:0,adds: 10000000},
    {id: 16, name: 'upg16', basePrice: 350000000000, icon:'🔭',info:'Space Research',ammount:0,adds: 35000000},
    {id: 17, name: 'upg17', basePrice: 1000000000000, icon:'🤖',info:'Artificial Inteligence',ammount:0,adds: 65000000},
    {id: 18, name: 'upg18', basePrice: 50000000000000, icon:'🚀',info:'Lunar Presence',ammount:0,adds: 100000000},
    {id: 19, name: 'upg19', basePrice: 350000000000000, icon:'☀️',info:'Local System Presence',ammount:0,adds: 350000000},
    {id: 20, name: 'upg20', basePrice: 1000000000000000, icon:'🦾',info:'Singularity Event',ammount:0,adds: 650000000},
    {id: 21, name: 'upg21', basePrice: 25000000000000000, icon:'🏛️',info:'Philosophy',ammount:0,adds: 1000000000},
    {id: 22, name: 'upg22', basePrice: 350000000000000000, icon:'👽',info:'Alien Contact',ammount:0,adds: 5000000000},
    {id: 23, name: 'upg23', basePrice: 1000000000000000000, icon:'🌌',info:'Galactic Presence',ammount:0,adds: 10000000000},
  ])
  
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

  const upgradeManager=(e,base,adds,curAmm)=>{
    switch(e){
      case 'upg1': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg2': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg3': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg4': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg5': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg6': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg7': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg8': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg9': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg10': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg11': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg12': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg13': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg14': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg15': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg16': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg17': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg18': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg19': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg20': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg21': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg22': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
      }
      break;
      case 'upg23': 
      if(click >= upgCalc(base,curAmm)){
        setValue((value)=>value+adds)
        setClick((click)=>click-(upgCalc(base,curAmm)))
        upgs.map(obj => {
          if(obj.name === e){
            return{...obj, ammount: obj.ammount++}
          }
        }) 
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
    setPrice(true);
  }else{
    setPrice(false);
  }
}

const amountDisplay = (id, priceTog, upgAmm, adds)=>{
  
  switch(id){
    case 1:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 2:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 3:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 4:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 5:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 6:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 7:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 8:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 9:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 10:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 11:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 12:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 13:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 14:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 15:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 16:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 17:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 18:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 19:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 20:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 21:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 22:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    case 23:
      if(priceTog === false){
        return (`ammount: ${abbreviateNumber(upgAmm,stats)}`)
      }else{
        return (`population: +${abbreviateNumber(upgAmm*adds,stats)}`)
      }
    
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
        <ul className='pointers'>
        {pointers.map((pointers) => (
        
          <li key={pointers.id}
            onClick={() => upgradeMain(pointers.id,pointers.price)}
          >
            <img src={require(`${pointers.imageUrl}`)} title={`${pointers.name} ${abbreviateNumber(pointers.price,stats)}`}/>
          </li>
        
        ))}
        </ul>
        <ul className='upgraders' >
        {upgs.map((upgs) => (
        
          <li key={upgs.id} value={upgs.name} onClick={() => {upgradeManager(upgs.name,upgs.basePrice,upgs.adds,upgs.ammount)}}>
            <span className='icon'>{upgs.icon}</span>
            <span className='upgradeName'> {upgs.info}: ${abbreviateNumber(upgCalc(upgs.basePrice,upgs.ammount),stats)}</span>
            <span className='upgradeAmount'>{amountDisplay(upgs.id,price,upgs.ammount,upgs.adds)}</span>
          </li>
        
        ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
