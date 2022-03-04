import React, { useState, useEffect } from 'react';
import Select from 'react-select';
///
import logo from './logo.svg';
import './App.css';
//
import caqui from './issets/caqui.jpg';
import manzana from './issets/manzana.webp';
import piña from './issets/piña.jpg';
import fresa from './issets/fresa.jpg';








function App() {
  const [gato, setgato] = useState("teko");
  const [fruits, setFruits] = useState("");
  const [loading, setloading] = useState("true");
  const [intro, setintro] = useState("");


  const saludar = () => {
    alert("Hola")
  }

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    fetch("http://localhost:8080/fruits")
      .then(response => response.json())
      .then((responseJson) => {
        console.log('getting data from fetch', responseJson);
        setFruits(responseJson);
        setloading(false);
      })
      .catch(error => console.log(error));
  }, [])

  if (loading) {
    return (
      <div>Loading ...</div>)
  } else

    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aprende React {gato}
          </a>
          <button onClick={saludar}> SOY UN BOTON</button>


          <input type="submit" value="Submit" />
          {JSON.stringify(fruits, null, 2)}

          {fruits.map(item => (
            <div key={item.id}> id={item.id}
            <img src={caqui}/>
              <li >{item.name}</li></div>
          ))}

       
          
          


        </header>

      </div>

    );
}


export default App;
