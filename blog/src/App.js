import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [글제목, b] = useState('남자 코트 추천');
  let [logo, setLogo] = useState('ReactBlog');

  // const [first, setfirst] = useState(second);

  let num = [1, 2];

  let [a, c] = [1, 2];

  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{post}</h4>
      </div>
      <div className="list">
        <h4>{글제목}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div >
  );
}

export default App;
