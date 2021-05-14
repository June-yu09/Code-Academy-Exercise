import React from 'react'

export default function Products(props) {
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
                              </div>
                          )
                          
                      })
            }
            </div>
        </div>
    )
}
