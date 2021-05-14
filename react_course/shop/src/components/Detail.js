import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

let MyBox = styled.h2`
    font-size: 30px;
    color: ${props=> props.색상};
    padding: 25px;
    `;

let AlertBox = styled.div`
    font-size: 20px;
    padding: 20px;
    background-color: yellow;
    
    `


function Detail(props) {
    let history = useHistory();
    let {id} =useParams();
    let product = props.shoes.find((d)=>{
      return d.id == id;
    })
    let [show, setShow] = useState(true);

    useEffect(() => {
      let timer = setTimeout(()=>{
        setShow(false);
      }, 3000);
      return ()=>{ clearTimeout(timer) }
    },[])
    
    return (
        <div className="container">
          <MyBox 색상={'blue'}>More details</MyBox>
          {
            show === true && <AlertBox> Now this item is low in stock </AlertBox>
          }
          
          

                <div className="row">
                  <div className="col-md-6">
                    <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="100%" />
                  </div>
                  <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{product.title}</h4>
                    <p>{ product.content }</p>
                    <p>{ product.price }</p>

                    <Info 재고={props.재고}></Info>
                    <button className="btn btn-danger" onClick={()=>{props.재고변경([9,11,12])}}>주문하기</button>
                    <button className="btn btn-success" onClick={()=>{
                        history.goBack();
                    }} >뒤로가기</button>
                  </div>
                </div>
        </div>
    )
}

function Info(props){
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

export default Detail;
