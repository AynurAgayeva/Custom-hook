
//useLayoutEffect

import { useEffect, useRef } from "react";

function ColorChange(){

const divRef= useRef(null)

useLayoutEffect(()=>{

   divRef.current.style.backgroundColor = "yellow"
}, [])
 return(
    <div ref ={divRef}>Hello world</div>
 )

}

export default ColorChange;