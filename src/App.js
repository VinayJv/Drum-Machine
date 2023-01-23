import './App.css';
import './index.js';
import { useState } from 'react';
import classNames from 'classnames';
function App() {
  const[getToggle, setToggle] = useState(true);
  const[getVolume, setVolume] = useState(1);
  const[getName, setName] = useState("");
  let audioQ = new Audio('/Q.mp3');
  let audioW = new Audio('/W.mp3');
  let audioE = new Audio('/E.mp3');
  let audioA = new Audio('/A.mp3');
  let audioS = new Audio('/S.mp3');
  let audioD = new Audio('/D.mp3');
  let audioZ = new Audio('/Z.mp3');
  let audioX = new Audio('/X.mp3');
  let audioC= new Audio('/C.mp3');
  let clickHandler = () => { setToggle(!getToggle);} 
  let changeHandler = (e) => { 
    setVolume(e.target.value/10);
  }
  let audioplayQ = () => { audioQ.volume = getVolume; audioQ.play(); setName("Heater 1"); }
  let audioplayW = () => { audioW.volume = getVolume; audioW.play(); setName("Heater 2"); }
  let audioplayE = () => { audioE.volume = getVolume; audioE.play(); setName("Heater 3"); }
  let audioplayA = () => { audioA.volume = getVolume; audioA.play(); setName("Heater 4"); }
  let audioplayS = () => { audioS.volume = getVolume; audioS.play(); setName("Clap"); }
  let audioplayD = () => { audioD.volume = getVolume; audioD.play(); setName("Open-HH"); }
  let audioplayZ = () => { audioZ.volume = getVolume; audioZ.play(); setName("Kick-n'-Hat"); }
  let audioplayX = () => { audioX.volume = getVolume; audioX.play(); setName("Kick"); }
  let audioplayC = () => { audioC.volume = getVolume; audioC.play(); setName("Closed-HH"); }
  console.log("run");
  let listenKey = (e) => {  if(e.key==='q'){audioplayQ()}
                            else if(e.key==='w'){ audioplayW()}
                            else if(e.key==='e'){ audioplayE()}
                            else if(e.key==='a'){ audioplayA()}
                            else if(e.key==='s'){ audioplayS()}
                            else if(e.key==='d'){ audioplayD()}
                            else if(e.key==='z'){ audioplayZ()}
                            else if(e.key==='x'){ audioplayX()}
                            else if(e.key==='c'){ audioplayC()}
                          }
  document.addEventListener('keydown', listenKey);
  return ( 
    <div className="App">
        <div id="drum-machine">
          <div id="title">Drum Machine</div>
          <div id="display">
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayQ}>Q</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayW}>W</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayE}>E</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayA}>A</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayS}>S</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayD}>D</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayZ}>Z</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayX}>X</div>
            <div className={classNames("pad-bank", { "pad-bank-active": !getToggle })} onClick={audioplayC}>C</div>
          </div>
          <p className='powertext'>Power</p>
          <label class="switch">
            <input type="checkbox" defaultChecked></input>
            <span class="slider" onClick={clickHandler}></span>
          </label>
          <div className='DisplayKit'>{getName}</div>
          <div className='slider2Div'>
            <input type="range" id="volume" min="0" max="10" onChange={changeHandler} style={{ marginRight:"0.5rem", accentColor:"#d8323c"}}></input>
            <label for="volume" style={{ fontWeight: "bolder", color: "#eaebea"}}>Volume</label>
          </div>
        </div>
      </div>
  );
}

export default App;