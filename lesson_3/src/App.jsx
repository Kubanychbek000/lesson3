
import './App.css'
import {useState} from "react";

function App() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState('')

    function addTasks(){
        setTasks([...tasks, input])
        setInput('')
        console.log(tasks)
    }


    // const arr = ['a','b','c']


    return(
        <>
            <input type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value) }/>
            <button onClick={addTasks}>Добавить задачу</button>

            <ul>
                {tasks.map((task, index) =>(
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </>
  )
}

export default App
