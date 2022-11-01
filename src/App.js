import './App.css';
import ClassComponent from './components/ClassComponent';
import FuntionalComponent from './components/FunctionalComponent';
import {useState} from "react";

function App() {

  const Company = "kb";

  const [name, setName] = useState("yashika");

  return (
    <div className="App">
      <h1> Class Component</h1>
      <ClassComponent></ClassComponent>
      <br />
      <h1> Functional Component</h1>
      <FuntionalComponent 
        name= { name } 
        age= {20}  
        Company= {Company} 
        setName= {setName}/>
    </div>
  );
}

export default App;
