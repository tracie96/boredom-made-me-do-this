import './App.css';
import {useState} from 'react'
import Card from './components/card.component'
function App() {

  const [button , setButton]= useState([
    {
      id:1,
      name: "Card 1"
      },
      {
        id:2,
        name: "Card 2"
   
      },
      {
        id:3,
        name: "Card 3"
  
      },
  ])
  const onDelete=(id)=>{
    setButton(button.filter(button => button.id != id))
  }
  return (
    <div className="App">
     {button.map((button)=>(<Card button={button} key={button.id} onDelete={onDelete} title={button.name}></Card>) )} 
    </div>
  );
}

export default App;
