import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Inicio from '../Inicio/Inicio.jsx';
import Mitologia from '../Mitologia/Mitologia.jsx';
import Monumentos from '../Monumentos/Monumentos.jsx';
import Realeza from '../Realeza/Realeza.jsx'
import Contato from '../Contato/Contato.jsx' 
import Arte from '../Arte/Arte.jsx';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App(props) {
  return (
    <div>
    <div>
        <main>
        <Router>
        <Switch>
          <Route exact path ="/">
            <Header />
            <Inicio/>

          </Route>
          <Route exact path="/arte">
            <Header />
            <Arte/>

          </Route>
          <Route exact path="/mitologia">
            <Header />
            <Mitologia/>

          </Route>
          <Route exact path="/realeza">
            <Header />
            <Realeza/>

          </Route>
          <Route exact path="/monumentos">
            <Header />
            <Monumentos/>

          </Route>
          <Route exact path="/contato">

            <Contato/>

          </Route>
        
        </Switch>
        </Router>
        
        </main>
    </div>
  </div>
  );
}

export default App;
