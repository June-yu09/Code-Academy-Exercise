import {Navbar, Nav , Jumbotron, Button} from 'react-bootstrap';
import './App.css';
import  React, { useState, useEffect } from 'react';
import data from './data.js';
import { Route, Link, Switch } from 'react-router-dom';
import Detail from './components/Detail.js';
import axios from 'axios';
import Products from './components/Products';
import Cart from './components/Cart';

export let 재고context = React.createContext();

function App() {

  let [myData, setMyData] = useState(data);
  let [재고, 재고변경] = useState([10,11,12]);



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
              {/* 값공유를 원하는 태그를 감싼다 */}
              <재고context.Provider value={재고}>
                <Products myData={myData} />
              </재고context.Provider>
              <button className="btn btn-primary" onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((result)=>{
                  setMyData([...myData, ...result.data])
                })
              }}>더보기</button>
            </div>
          </Route>

          <Route path='/cart'>
              <Cart />
          </Route>
          
  
          <Route path='/detail/:id' >
            <Detail shoes={myData} 재고={재고} 재고변경={재고변경}/>
          </Route>
        </Switch>
        



        



    </div>

      
  );
}

export default App;
