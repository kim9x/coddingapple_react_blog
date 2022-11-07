import logo from './logo.svg';
import './App.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';
import bg from './img/bg.png'
import { createContext, useState } from 'react';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail.js';
import axios from 'axios'
import Cart from './routes/Cart.js';

export let Context1 = createContext();

function App() {

  let obj = { name: 'kim' }
  localStorage.setItem('data', JSON.stringify(obj))
  let getItem = localStorage.getItem('data')

  console.log(JSON.parse(getItem))
  // console.log(getItem)

  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10, 11, 12])

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
            </div>
            <button onClick={() => {
              // 로딩중UI 띄우기~
              axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((datas) => {
                  // console.log(datas.data)
                  let copy = [...shoes, ...datas.data];
                  setShoes(copy);
                  // console.log(shoes)
                  // 로딩중UI 숨기기~
                })
                .catch(() => {
                  console.log('실패함ㅅㄱ')
                  // 로딩중UI 숨기기~
                })


              // ajax로 post 요청 보내기
              axios.post('/test', { name: 'kim' })

              // 한번에 2개의 url에 ajax 요청하기
              Promise.all([axios.get('/url1'), axios.get('/url2')])
                .then(() => {

                })
              // 아래처럼 따옴표로 감싼 후 요청 시
              // array, object도 주고받기 가능 (json 형식임)
              // axios가 json 형식을 자동변환 해줌.
              // "{"name" : "kim"}"

              // JS 기본 문법인 fetch로 요청하기
              fetch('https://codingapple1.github.io/shop/data2.json')
                // fetch를 사용하면 json을 array 혹은 object로 변환하는 코드 필요
                .then(datas => datas.json)
                .then(data => { })
            }}>더보기</button>
          </>
        } />
        <Route path='/detail/:id' element={
          <Context1.Provider value={{ 재고, shoes }}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />
        <Route path="/cart" element={<Cart />} />
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
