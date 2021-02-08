import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import Card from './components/Card';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
function App() {
  return (
    <div className="App">
      <Navbar />
      <br/>
      <h1> Higiene y Seguridad: Elementos de Proteccion Personal </h1>
      <div>
       
      <br></br>
            <Card className='cards' producto='Casco Electricista' precio='$5000' calidad='Electricidad'/>
            
            <br></br>

            <Card className='cards' producto='Casco Alturas' precio='$5500' calidad='Altura'/>

            <br></br>

            <ItemListContainer/>
            
            <br></br>

            <ItemCount  initial = {1} stock = {10} /> 
            
      </div>     

       
    </div>



  );
}

export default App;
