import { Table, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props) {
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.state.map((a,i)=>{
                            return (
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td>
                                    <button onClick={()=>{ props.dispatch({type: '수량증가'}) }}>+</button>
                                    <button onClick={()=>{ props.dispatch({ type: '수량감소' }) }} >-</button>
                                </td>
                            </tr>
                            )
                        
                        })
                    }       
                </tbody>
                </Table>
                {
                    props.alertCheck && (
                    <Alert variant='success'>
                        <p>
                            new customer 20% off
                        </p>
                        <button onClick={()=>{ props.dispatch({ type: '끄기' }) }}>X</button>
                    </Alert>
                    )
                }
                
            
        </div>
    )
}
function state를props화(state){
    return {
        state: state.reducer,
        alertCheck: state.reducer2
    }
}


export default connect(state를props화)(Cart);