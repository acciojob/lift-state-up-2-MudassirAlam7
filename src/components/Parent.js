import React, { useState } from "react";
import Child from "./Child";
const Parent = ()=>{
    const[inputValue, setInputvalue] = useState("")

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <p>{inputValue}</p>
            <Child inputValue = {inputValue} setInputvalue = {setInputvalue}/>
        </div>
    )

}
export default Parent