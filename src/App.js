import React from 'react';
import logo from './logo.svg';
import './App.css';

// class Aggregate extends Component {
//   render () {
//     return (
//       <div><h2>Number and a text</h2></div>
//     );
//   }
// }

let defaultTextColor = '#ffffff';

let defaultStyle = {
  color: defaultTextColor
}

function Aggregate(){
  return(
    <div style={{width: "40%", display: "inline-block"}}>
      <h2 style={defaultStyle}>Number and a text</h2>
    </div>
  )
}

function Filter(){
  return(
    <div style={defaultStyle}>
      <img></img>
      <input type="text"/>
      Filter
    </div>
  )
}

function PlayList(){
  return(
    <div style={{...defaultStyle, width:"25%", display: "inline-block"}}>
      <img/>
      <h3>Playlist Name</h3>
      <ul><li>Song1</li><li>Song2</li><li>Song3</li></ul>

    </div>
  )
}

function App() {
  return (    
    <div className="App">
      <h1>Title</h1>
      <Aggregate></Aggregate>
      <Aggregate></Aggregate>
      <Filter></Filter>
      <PlayList/>
      <PlayList/>
      <PlayList/>
      <PlayList/>
    </div>
  );
}

export default App;
