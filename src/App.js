import './App.css';
import Boton from './componentes/Boton'; 
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'



function App() {


  const [input, setInput] = useState('')

  const agregarInput = val => {
    setInput(input + val )
  }

  const resultado = () => {
   if (input){
    setInput(evaluate(input));
   } else{
    alert('por favor ingrese un numero')
   }
  };


  return (
    <div className="App">
      <div className='titulo'>
        <h1>Calculadora del joji</h1>

      </div>
      <div className='contenedor-calculadora'>
       <Pantalla input = {input} />
        <div className='fila'>
          <Boton manejarClick= {agregarInput}>1</Boton>
          <Boton manejarClick= {agregarInput}>2</Boton>
          <Boton manejarClick= {agregarInput}>3</Boton>
          <Boton manejarClick= {agregarInput}>+</Boton>

        </div>
        <div className='fila'>
          <Boton manejarClick= {agregarInput}>4</Boton>
          <Boton manejarClick= {agregarInput}>5</Boton>
          <Boton manejarClick= {agregarInput}>6</Boton>
          <Boton manejarClick= {agregarInput}>-</Boton>

          
        </div>
        <div className='fila'>
          <Boton manejarClick= {agregarInput}>7</Boton>
          <Boton manejarClick= {agregarInput}>8</Boton>
          <Boton manejarClick= {agregarInput}>9</Boton>
          <Boton manejarClick= {agregarInput}>*</Boton>

          
        </div>
        <div className='fila'>
          <Boton manejarClick= {resultado}>=</Boton>
          <Boton manejarClick= {agregarInput}>0</Boton>
          <Boton manejarClick= {agregarInput}>.</Boton>
          <Boton manejarClick= {agregarInput}>/</Boton>

        </div>
        <div className=''>
          <BotonClear manejarClear={()=> setInput ('')}>clear</BotonClear>


        </div>

      </div>
    </div>
  );
}

export default App;
