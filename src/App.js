import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Gallery';
import ButtonBar from './ButtonBar';

function App() {
  let [artId, setArtId] = useState(12720);
  let [data,  setData] = useState({})

  useEffect(() => {
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`)
      .then(rawResponse => rawResponse.json())
      .then(data => setData(data))
  }, [artId])

  document.title = data.artistDisplayName + " - " + data.title
  
  const handleIterate = (e) => {
    setArtId(artId + Number(e.target.value))
  }

  return (
    <div className="App">
      <Gallery 
        objectImg={data.primaryImage}
        title={data.title}
        artist={data.artistDisplayName}  />
      <ButtonBar handleIterate={artId}/>
    </div>
  );
}

export default App;
