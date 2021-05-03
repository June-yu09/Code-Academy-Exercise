import {useState} from 'react';
import './App.css';

function App() {
  let [글제목, 글제목변경]= useState(['남자 코트 추천','강남 고기 맛집', '파이선 장고 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');
  let [새제목, 새제목변경] = useState('');

  return (

    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={()=>{
        let newArray = [...글제목];
        newArray[0]= '여자 코트 추천';
        글제목변경(newArray);
        }}>버튼</button>
      

      {

        글제목.map((e,index)=>{
          return (
            <div className="list" key={index}>
              <h3><span onClick={()=>{누른제목변경(index)}}>{e}</span>

              <span onClick={()=>{
                let newArr = [...따봉];
                newArr[index] += 1;
                따봉변경(newArr);
              }}>👍</span>
              
              {따봉[index]}</h3>
              <p>2월 19일 발행</p>
              <hr/>
            </div>
          )
        })
      }



      <button onClick={()=>{modal변경(!modal)}}>BUTTON</button>
      
      {
        modal === true
        ?<Modal 글제목 = {글제목} 누른제목={누른제목}/>
        : null
      }

      <br></br>

      <div className="publish">
        <input onChange={(e)=>{ 새제목변경(e.target.value) }}/>
        <button onClick={()=>{ 
          let newTitle = [...글제목];
          newTitle.push(새제목);
          글제목변경(newTitle);
          let newTta = [...따봉];
          newTta.push(0);
          따봉변경(newTta);
         }}>저장</button>
      </div>
      



    </div>
  );
}
function Modal(props){
  return (
    <div className="modal">
        <h2> {props.글제목[props.누른제목]} </h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
