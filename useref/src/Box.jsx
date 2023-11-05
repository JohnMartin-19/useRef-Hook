import React, { useRef } from "react";

function Box(){
    const elementRef = useRef()

    function handleClick(){
        const div = elementRef.current
        console.log('Measurements:', div.getBoundingClientRect())
    }
    return(
        <div>
            <h1 ref={elementRef}>BOX</h1>
            <button onClick={handleClick}> Measure </button>
        </div>
    )
}
export default Box