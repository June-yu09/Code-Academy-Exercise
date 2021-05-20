import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


let 초기값 = [
  {id: 0 , name: '멋진신발' , quan: 2},
  {id: 1 , name: '멋진신발2' , quan: 3},
  {id: 2 , name: '멋진신발3' , quan: 4},
  {id: 3 , name: '멋진신발4' , quan: 5},
]
let alert초기값 = true;

let reducer2 = (state= alert초기값, action)=>{
  if( action.type === '끄기' ){
    return false
  }else{
    return state
  }
}



let reducer = (state= 초기값, action)=>{
  if ( action.type === '수량증가' ){
    let copy = [...state];
    copy[0].quan++;
    return copy
  }else if( action.type === '수량감소' ){
    let copy = [...state];
    if(copy[0].quan === 0){
      return copy
    } else{
      copy[0].quan--;
      return copy
    }
  } else if ( action.type === '수량추가' ) {
    let copy = [...state];
    copy.push(action.payload);
    return copy
  } else{
    return state
  }
}

let store = createStore(combineReducers({reducer, reducer2}))






ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
