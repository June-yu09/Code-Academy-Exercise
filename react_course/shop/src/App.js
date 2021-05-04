import {Navbar, Nav, NavDropdown , Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import data from './data.js';
import Products from './components/Products.js';
import { Route, Link, Switch } from 'react-router-dom';
import Detail from './components/Detail.js';

function App() {

  let [myData, setMyData] = useState(data);


  return (
    <div className="App"><Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link><Link to='/'>Home</Link></Nav.Link>
              <Nav.Link><Link to='/detail'>Detail</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>


        <Switch>
        <Route exact path='/' >
          <Jumbotron className="jumboBackground">
          <h1>Season Off</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
          </Jumbotron>
          <div className="container">
            <Products myData={myData} />
          </div>
        </Route>
 
        <Route path='/detail' >
          <Detail />
        </Route>
        </Switch>
        



        



    </div>

      
  );
}

export default App;
