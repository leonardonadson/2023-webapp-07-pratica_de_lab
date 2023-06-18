import { useState } from 'react'
import './App.css'

const AppNavBar = () =>{
  return(
    <div>
      <h1>Lista de Tarefas</h1>
    </div>
  )
}

const AppEntrada = (props: any) => {
  
  return(
    <div className="card">
      <label>Tarefa:</label>
      <input 
        type="texto"
        placeholder='Digite uma tarefa'
        value={props.texto} 
        onChange={props.mudarTexto}/>
        <button>Enviar</button>
    </div>
  )
}

const AppCloneEntrada = (props: any) =>{
  return(
    <label>{props.texto}</label>
  )
}

function App() {

  const [entrada, setEntrada] = useState ("")

  return (
    <>
      <AppNavBar/>
      <AppEntrada texto={entrada} mudarTexto={(e: any) => setEntrada(e.target.value)}/>
      <AppCloneEntrada texto = {entrada}/>
    </>
  )
}

export default App