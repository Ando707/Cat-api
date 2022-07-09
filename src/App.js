import React, { useState } from 'react';
import Header from './Components/MyHeader/Header';
import './App.css';
import Container from './Components/MyContainer/Container';
import MyButton from './Components/MyButton/MyButton';

function App() {


  const [photos, setPhotos] = useState([])
  const [containers, setContainers] = useState([])

  const fetchPhotos = () => {
    fetch("https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=1")
    .then((res) => res.json())
    .then((photo) => {setPhotos(photo)})
  }

  const createContainer = () => {
      fetchPhotos()
      setContainers( [...containers, <Container key={Date.now()} photos={photos}/>] )
  }

  return (
    <div className="App">
        <Header/>
        { containers.map( ( container ) => ( container ) ) }
        <MyButton onClick={createContainer}>Add Cats</MyButton>
    </div>
  );
}

export default App;
