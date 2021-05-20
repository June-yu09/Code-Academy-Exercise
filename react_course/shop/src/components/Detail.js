import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Nav } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './Detail.css';
import { connect } from 'react-redux';

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
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

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
                    <button className="btn btn-danger" onClick={()=>{
                      props.재고변경([9,11,12])
                      props.dispatch({type:'수량추가', payload: { id: product.id, name: product.title, quan: 1 }})
                      history.push('/cart');
                      
                      }}>주문하기</button>
                    <button className="btn btn-success" onClick={()=>{
                        history.goBack();
                    }} >뒤로가기</button>
                  </div>
                </div>
                <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
                  <Nav.Item>
                    <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 누른탭변경(0) }}>Tab1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 누른탭변경(1) }}>
                      Tab2
                    </Nav.Link>
                  </Nav.Item>
                </Nav>

                <CSSTransition in={true} classNames='wow' timeout={300}>
                  <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
                </CSSTransition>
                
        </div>

        
    )
}

function state를props화(state){
  return (
    {
      state: state.reducer,
    }
  )
}

function TabContent(props){
  useEffect(()=>{
    props.스위치변경(true);
  })
  if(props.누른탭 === 0){
    return <div>0번을 누름</div>
  }else if(props.누른탭 === 1){
    return <div>1번을 누름</div>
  }else if(props.누른탭 === 2){
    return <div>2번을 누름</div>
  }
}

function Info(props){
  return (
    <p>재고 : {props.재고[0]}</p>
  )
}

export default connect(state를props화)(Detail);
