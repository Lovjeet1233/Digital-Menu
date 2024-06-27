//App.js
import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'; // Ensure the path is correct
import Homescreen from './screens/Homescreen';

import { BrowserRouter} from 'react-router-dom';
import { link} from 'react-router-dom';
import { Switch} from 'react-router-dom';
import { route} from 'react-router-dom';
import Cartscreen from './screens/Cartscreen'
function App() {
  return (
    <div className="App">
      <Navbar /> {/* Ensure the component name is correct */}
      

<BrowserRouter>
<Route path="/" exact component={Homescreen} />
<Route path="/cart" exact component={Cartscreen} />
</BrowserRouter>
      <Homescreen/>
    </div>
  );
}

export default App;
