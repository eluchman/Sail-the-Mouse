import React, {Component}  from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { CRUISESHIPS } from './shared/cruiseships';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        cruiseships: CRUISESHIPS
    };
}


  render() {
      return (
          <div className="App">
              <Navbar dark color="danger" className= "Navbar">
              <div className="container">
                  <NavbarBrand href="/">Sail The Mouse</NavbarBrand>
              </div>
              </Navbar>
              <Directory cruiseships={this.state.cruiseships} />
          </div>
      );
  }
}

export default App;
  