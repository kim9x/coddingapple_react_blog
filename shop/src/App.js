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
          {/* <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + '/logo192.png'} width='80%' />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div> */}
          {
            shoes.map(function (a, i) {
              return (
                <Modal picUrl={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'} title={shoes[i].title} price={shoes[i].price} />
              )
            })
          }
          {/* <Modal picUrl={'/logo192.png'} titld={shoes[0].title} price={shoes[0].price} /> */}
          {/* <div className="col-md-4">
            <img src={process.env.PUBLIC_URL + 'https://codingapple1.github.io/shop/shoes2.jpg'} width='80%' />
            <h4>{shoes[1].title}</h4>
            <p>shoes[1].price</p></div>
          <div className="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width='80%' />
            <h4>shoes[2].title</h4>
            <p>shoes[2].price</p></div> */}
        </div>
      </div>
    </div >
  );
}

function Modal(props) {
  console.log('props: ', props);
  return (
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + props.picUrl} width='80%' />
      <h4>{props.title}</h4>
      <p>{props.price}</p>
    </div>
  )
}

export default App;
