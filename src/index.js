import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from './mediaCard';
import Gate from './gate';
import reportWebVitals from './reportWebVitals';

function Room() {
  const [isLit, setLit] = useState(true);
  const lightedness = isLit ? "lit" : "dark";


  return (
    <div className={`room ${lightedness}`}>The Room is {lightedness}
    <br/>
    <button onClick={() => setLit(!isLit)}>flip</button>
    <br/>
    </div>
  )
}
function ONOFF() {
  const [isGreen, setGreen] = useState();
  return(
    <div className={`ONOFF ${isGreen ? 'Green': 'notGreen'}`}>
      <button onClick={() => setGreen(true)}>ON</button>
      <button onClick={() => setGreen(false)}>OFF</button>
    </div>
  )
}

function Temprature() {
  const [temp , settemp] = useState(22);
  function inctemp() {
    settemp(prevtemp => prevtemp + 1)
  }

  function dectemp() {
    settemp(prevtemp => prevtemp - 1)
  }

  return(
    <div>
      <button onClick={dectemp}>-</button>
      &nbsp;&nbsp;&nbsp;
      <span>{temp}</span>
      &nbsp;&nbsp;&nbsp;
      <button onClick={inctemp}>+</button>   
    </div>
  )
}

ReactDOM.render(
  <div style={{margin:"auto", width:"50%"}}>
  <App name = "Asjad Alam" age = {21}/>
  <MediaCard title="Mediacard Task" body="This is the Body of mediacard task" imageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pakistan_Monument_Ibd.jpg" />
  <Gate isOpen={true} />
  <Gate isOpen={false} />
  <br/>
  <br/>
  <Room/>
  <br/>
  <ONOFF/>
  <br/>
  <br/>
  <Temprature/>
  </div>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
