import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { Context1 } from './../App.js'
import { addItem } from './../store.js'
import { useDispatch } from 'react-redux';

// let YellowBtn = styled.button`
//     background: ${props => props.bg};
//     color: ${props => props.bg == 'blue' ? 'white' : 'black'};
//     padding: 10px;
// `

// let NewBtn = styled.button(YellowBtn)`

// `

// let Box = styled.div`
//     background: grey;
//     padding: 20px;
// `

function Detail(props) {

    let { 재고 } = useContext(Context1)
    let [count, setCount] = useState(0);
    // let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');
    let [탭, 탭변경] = useState(0);
    let dispatch = useDispatch()


    let { id } = useParams();
    let 찾은상품 = props.shoes.find(x => x.id == id);

    useEffect(() => {

        // localStorage.setItem('watched', [찾은상품.id])

        let arr = localStorage.getItem('watched')
        if (arr == null) {
            arr = []
        } else {
            arr = JSON.parse(arr)
        }

        // arr = JSON.parse(arr);
        arr.push(찾은상품.id);
        arr = new Set(arr)
        arr = Array.from(arr)
        localStorage.setItem('watched', JSON.stringify(arr))

    }, [])


    let findItem = props.shoes.find(function (item) {
        return item.id == id;
    })

    return (
        < div className="container" >
            {/* <Box>
                <YellowBtn bg='blue'>버튼</YellowBtn>
                <YellowBtn bg='orange'>버튼</YellowBtn>
            </Box> */}
            {
                alert == true
                    ? <div className='alert alert-warning'>
                        2초이내 구매 시 할인
                    </div> : null

            }

            <button onClick={() => {
                setCount(count + 1);
            }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <input onChange={((e) => {
                        setNum(e.target.value)
                    })} />
                    <h4 className="pt-5">{props.shoes[findItem.id].title}</h4>
                    <p>{props.shoes[findItem.id].content}</p>
                    <p>{props.shoes[findItem.id].price}</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addItem({ id: 1, name: 'Red Knit', count: 1 }))
                    }}>주문하기</button>
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { 탭변경(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { 탭변경(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { 탭변경(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} />
        </div >
    );

}

// function TabContent(props) {
//     if (props.탭 == 0) {
//         return <div>내용0</div>
//     } else if (props.탭 == 1) {
//         return <div>내용1</div>
//     } else if (props.탭 == 2) {
//         return <div>내용2</div>
//     }
// }


// props 바로 쓰기 및 바로 쓸 때 2개 이상일 때
// function TabContent({ 탭, props2 }) {
function TabContent({ 탭 }) {
    // if (탭 == 0) {
    //     return <div>내용0</div>
    // } else if (탭 == 1) {
    //     return <div>내용1</div>
    // } else if (탭 == 2) {
    //     return <div>내용2</div>
    // }

    let [fade, setFade] = useState('')
    let { 재고 } = useContext(Context1)

    useEffect(() => {
        let timeout = setTimeout(() => {
            setFade('end')
        }, 100)

        // 함수가 실행되기 전에 실행되는 부분 클린 업 함수?
        return () => {
            clearTimeout(timeout)
            setFade('')
        }
    }, [탭])

    return (<div className={`start ${fade}`}>
        {[<div>{재고}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>)
}

export default Detail;