import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

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

    let [count, setCount] = useState(0);
    // let [alert, setAlert] = useState(true);
    let [num, setNum] = useState('');

    useEffect(() => {
        if (isNaN(num) == true) {
            alert('그러지마세요')
        }

    }, [num])

    // useEffect(() => {
    //     let a = setTimeout(() => {
    //         setAlert(false);
    //         console.log(1);
    //     }, 2000)

    //     return (() => {
    //         clearTimeout(a);

    //     })
    //     // setTimeout(() => {
    //     //     setAlert(false);
    //     //     console.log(1);
    //     // }, 2000);
    // }, [])


    let { id } = useParams();

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
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div >
    );

}

export default Detail;