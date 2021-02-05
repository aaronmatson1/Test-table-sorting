import logo from './logo.svg';
import './App.css';
import JSONDATA from './MOCK_DATA.json';
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="App">
      <input type="test" placeholder="Search..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }} />
      {JSONDATA.filter((val) => {
        if (searchTerm == "") {
          return val
        }else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) { //converting our search input from lowercase 
          return val //and returning a string with the values in the name from our input
        }
      }).map((val, key) => {
        return (
          <div className='user' key={key}>
            <p>{val.first_name} {val.last_name}</p>
            <p></p>  
          </div>
        )
      })}
    </div>
  );
}

export default App;
