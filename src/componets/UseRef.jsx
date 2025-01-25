import { useRef } from 'react'

export default function UseRef() {
    let divRef = useRef(null)
    let divRef1 = useRef(null)

    function click() {
        if (divRef.current.style.backgroundColor == "black") {
            divRef.current.style.backgroundColor = "red"
        }
         else if(divRef.current.style.backgroundColor == "red"){
            divRef.current.style.backgroundColor = "green"
        }
        else {
            divRef.current.style.backgroundColor = "black"
        }
    }
    function click1() {
        if (divRef1.current.style.backgroundColor == "orange") {
            divRef1.current.style.backgroundColor = "green"
        }
        else if(divRef1.current.style.backgroundColor == "green"){
            divRef1.current.style.backgroundColor = "red"
        }
        else {
            divRef1.current.style.backgroundColor = "orange"
        }
    }

    return (
        <div>
            <div ref={divRef} style={{ height: 200, width: 200, backgroundColor: "black" }} onClick={click}></div>
            <br />
            <div ref={divRef1} style={{ height: 200, width: 200, backgroundColor: "orange" }} onClick={click1}></div>
        </div>
    )
}
