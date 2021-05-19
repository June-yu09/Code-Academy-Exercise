import React, { useContext } from 'react'
import {재고context} from '../App.js'

export default function Products(props) {
    let 재고 = useContext(재고context);
    // props전송없이 재고라는 context사용가능
    return (
        <div>
            <div className='row'>

            {
                    props.myData.map((d,i)=>{
                          return (
                              <div className="col-md-4">
                                  <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width='100%'></img>
                                  <h4>{ d.title }</h4>
                                  <p>{ d.content } & { d.price }</p>
                                  { 재고[i] }
                              </div>
                          )
                          
                      })
            }
            </div>
        </div>
    )
}
