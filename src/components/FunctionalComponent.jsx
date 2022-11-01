import React, {useState} from "react";

const  FuntionalComponent = (props) => {

    const[count, setCount] = useState(0);
    const [changeName , setChangeName] = useState("");

    const substractConst = () => {
        setCount(count-1);
    };

    const {name, age,Company, setName } = props;

    return(
        <div>
            <p> This is Funtional Component</p>
            <button onClick={() => setCount(count + 1)}>Click me to add 1</button>
            <button onClick={substractConst }>
                Click me To Substract 1
            </button>
            <h1>{count}</h1>
            <h1>My Name is {name }, I am {age}, I work for {Company}</h1>
            
            <input onChange={(event) => setChangeName(event.target.value)}/>
            <button onClick={() => setName(changeName)}>Change Name</button>
        </div>
    );
};

export default FuntionalComponent;
