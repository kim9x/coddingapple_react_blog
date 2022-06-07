/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  function modalSwitch() {
    if (modal == true) {
      setModal(false);
    } else {
      setModal(true);
    }
  }

  function clickDdabong(i) {
    console.log("i :", i);
    let copy = [...따봉];
    copy[i] = copy[i] + 1
    따봉변경(copy);
  }

  function addTitle(inputTitle) {
    let titleCopy = [...글제목];
    titleCopy.push(inputTitle)
    글제목변경(titleCopy);

    let 따봉Copy = [...따봉];
    따봉Copy.push(0);
    따봉변경(따봉Copy);
  }

  function removeTitle(idx) {
    let copy = [...글제목];
    copy.splice(idx, 1);
    글제목변경(copy);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>글수정</button>

      {
        글제목.map(function (a, i) {
          return (<div className="list" key={i}>
            {/* <h4>{ a }</h4> */}
            <h4 onClick={() => { setModal(!modal); setTitle(i); }}>
              {글제목[i]}
              <span onClick={(e) => { e.stopPropagation(); clickDdabong(i); }}>👍</span> {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button onClick={(e) => { e.stopPropagation(); removeTitle(i); }}>삭제</button>
          </div>)
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value)
        console.log(입력값);
      }
      }></input>

      <button onClick={() => { addTitle(입력값) }}>글발행</button>

      {
        modal == true ? <Modal title={title} color={'skyblue'} 글제목={글제목} 글제목변경={글제목변경} /> : null
      }
      <Profile />
    </div >
  );
}

// 아래처럼 컴포넌트를 만들어도 됨
const Modal2 = () => {
  return (
    <div></div>
  )
}

function Modal(props) {
  console.log('props: ', props);
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  )
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Kim', age: 30 }
  }

  changeName() {
    this.setState({ name: 'Park"' })
  }

  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name} 입니다.</p>
        <button onClick={() => this.changeName.bind(this)}>버튼</button>
      </div >
    )
  }
}

export default App;
