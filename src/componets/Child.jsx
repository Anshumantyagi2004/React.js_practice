import React, { useContext } from 'react'
import { Mycontext } from './Mycontext'

export default function Third() {
    let {detail,arr} = useContext(Mycontext)
    return (
        <div>
            <h1>Hello My City is  : {detail.city}</h1>
            <h1>Hello My Height is  : {detail.height}</h1>
            <h1>Hello My Weight is  : {detail.weight}</h1>
        </div>
    )
}
