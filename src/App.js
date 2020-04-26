import React from 'react';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import MasInfo from './components/MasInfo';


function App() {
  return (
<BrowserRouter>
<Switch>
  <Route exact path="/" component={Container}/>
  <Route exact path="/mas" component={MasInfo}/>
</Switch>
</BrowserRouter>

      
    
  );
}

export default App;
