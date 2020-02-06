import React, {Component}  from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import './App.css';


class App extends Component {
  render() {
      return (
          <div className="App">
              <Navbar dark color="danger" className= "Navbar">
              <div className="container">
                  <NavbarBrand href="/">Sail The Mouse</NavbarBrand>
              </div>
              </Navbar>
          </div>
      );
  }
}

export default App;
  