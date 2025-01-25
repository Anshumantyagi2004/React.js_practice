import React, { useContext } from 'react'
import { Mycontext } from './Mycontext'
import Child from '../componets/Child'

export default function Third() {
    let { detail, arr } = useContext(Mycontext)
    return (
        <div>
            <h1>Hello My Name is  : {detail.name}</h1>
            <h1>Hello My Age is  : {detail.age}</h1>
            <Child></Child>
            <ul>
                {arr.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
        </div>
    )
}
