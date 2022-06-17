import React, { Fragment } from 'react';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Work from './components/Works/Work';


function App() {

    return (
        <div className="App">
<Fragment>
        <NavBar style={{overflowY:"scroll", height:"80px"}}/>
        <div ></div> 
</Fragment>


         <Home />

    
<Work />

        </div>
    );
}

export default App;
