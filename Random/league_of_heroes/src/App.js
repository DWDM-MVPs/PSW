import React from 'react';
import './App.css';





class App extends React.Component {
  
  contructor(props){
    super(props);

    this.state = {
      myname : 'Ted Blackburn'
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <div className="root">
      <div className="header">
      <h1>League of Herões</h1>
      <h3>by Gonçalo Rodrigues</h3>
      </div>
      </div>
      </header>
      <body>
      <div className="row">
      <div className="content">
      <h1>Top-3 Héróis</h1>
  
  <div class="responsive">
    <div class="gallery">
        <img src="batman.png" alt="Batman" width="600" height="400"></img>
      <div class="desc">BATMAN</div>
    </div>
  </div>
  
  
  <div class="responsive">
    <div class="gallery">
        <img src="superman.png" alt="SuperMan" width="600" height="400"></img>
      <div class="desc">SUPERMAN</div>
    </div>
  </div>
  
  <div class="responsive">
    <div class="gallery">
        <img src="flash.png" alt="Flash" width="600" height="400"></img>
      <div class="desc">FLASH</div>
    </div>
  </div>
  
  <div class="clearfix"></div>
  
  </div>
  </div>
  <br></br>
  <br></br>
  <br></br>
  </body>
     
   <footer>
      <p>League of Herões - Copyright © 2019 by Gonçalo Rodrigues.</p>
  
      </footer>
  
      </div>
    );
  }
 
}



export default App;
