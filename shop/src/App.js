import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Finance</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/detail') }}>Detail</Nav.Link>
            {/* <Link to='/'>홈</Link>
            <Link to='/detail'>상세페이지</Link> */}
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={
          <><div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>

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
            </div></>} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<About />} >
          <Route path='member' element={<div>멤버임</div>} />
          <Route path='location' element={<About />} />
        </Route>
        {/* <Route path='/about/member' element={<About />} />
        <Route path='/about' element={<About />} /> */}

        <Route path='/event' element={<EventPage />} >
          <Route path='one' element={<div>첫 주문 시 양배추즙 서비스</div>} />
          <Route path='two' element={<div>생일기념 쿠폰받기</div>} />
        </Route>
      </Routes>


    </div >
  );
}

function EventPage() {
  return (
    <div>
      <h4>
        오늘의 이벤트
      </h4>
      <Outlet></Outlet>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
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
