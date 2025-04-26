import React from "react";

const Child = ({inputValue, setInputvalue})=>{
    return(
        <div className="child">
            <h2>Child Component</h2>
            <input type="text" name="" id="" value={inputValue} onChange = {(e)=>setInputvalue(e.target.value)} />
        </div>
    )
}
export default Child