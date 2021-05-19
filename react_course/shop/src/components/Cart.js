import { Table } from 'react-bootstrap';

function Cart() {
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
                    <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                    
                    </tr>
                </tbody>
                </Table>
            
        </div>
    )
}
export default Cart;