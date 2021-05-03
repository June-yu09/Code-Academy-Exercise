import {Navbar, Nav, NavDropdown , Jumbotron, Button} from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App"><Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

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
          <div className="row">
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width='100%'></img>
              <h4>Product Name</h4>
              <p>Details & Price</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes2.jpg" width='100%'></img>
              <h4>Product Name</h4>
              <p>Details & Price</p>
            </div>
            <div className="col-md-4">
              <img src="https://codingapple1.github.io/shop/shoes3.jpg" width='100%'></img>
              <h4>Product Name</h4>
              <p>Details & Price</p>
            </div>
          </div>
        </div>



    </div>

      
  );
}

export default App;
