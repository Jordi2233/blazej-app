import React, { Fragment } from 'react';
import './App.css';
import Main from './components/Main/Main';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {

    return (
        <div className="App">
<Fragment>
        <NavBar style={{overflowY:"scroll", height:"80px"}}/>
        <div ></div> 
</Fragment>

        <Main />

<Footer />
        </div>
    );
}

export default App;
