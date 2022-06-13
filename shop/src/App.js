import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';


function App() {

  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Finance</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Stock</Nav.Link>
            <Nav.Link href="#features">Real estate</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>

      <div className="container">
        <div className="row">
          {
            shoes.map(function (a, i) {
              return (
                <Card shoes={shoes[i]} i={i} />
              )
            })
          }
        </div>
      </div>
    </div >
  );
}

function Card(props) {
  console.log('props: ', props);
  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;
