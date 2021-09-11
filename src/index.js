import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from './mediaCard';
import Gate from './gate';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <div>
  <App name = "Asjad Alam" age = {21}/>,
  <MediaCard title="Mediacard Task" body="This is the Body of mediacard task" imageUrl = "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pakistan_Monument_Ibd.jpg" />,
  <Gate isOpen={true} />,
  <Gate isOpen={false} />,
  </div>,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
