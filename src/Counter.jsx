import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    const handelAdd=()=>{
        const newCount = count +1;
        setCount(newCount)

    }


    const hendelAddRedues =()=>{
        const newRedusCount = count -1;
        setCount(newRedusCount)
    }
    return(
        <div>
            <h3>Counter : {count}</h3>
            <button onClick={handelAdd}>ADD</button>
            <button onClick={hendelAddRedues}>AddRedeus</button>
        </div>
    )
}