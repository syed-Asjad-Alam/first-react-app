import logo from './logo.svg';

import './App.css';

 const App = ({name,age}) => {
  return <div>
            Hello World
            <br/>
            Hello World From <strong className="myName">{name}</strong>
            <ul className="fruits">
              <li>Orange</li>
              <li>Apple</li>
              <li>Banana</li>
            </ul>
            <br/>
            <p className="para">{name}'s age is {age}
            <br/>Add 4 to his age and his age becomes {age + 4}
            </p>
          </div>
}
export default App;
