//import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Price from './Price'
import Description from './Description';
import Image from './Image';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  const nom = "Balde"
  return (
    <>
    
    <div className= " App"  style={{justifyContent:"left"}}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./parfum.jpeg" />
      
      <Card.Body>
      <Card.Title> <Name/> </Card.Title>

      <Card.Text style={{textAlign:"center",borderRadius:"20"}}>
      <Price/>
      <Description/>
      {nom === ""? <p>Bonjour la!</p> : <p>bonjour {nom}:<img src='./logo192.png'/> </p>}  
      </Card.Text>

    </Card.Body>
    </Card>
    <div>
        
    </div>
    </div>

    </>
  );
}

export default App;
