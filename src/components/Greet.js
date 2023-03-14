import React from "react";

// function Greet(){
//     return <h1>Hello ujjwal</h1>;
// }

const Greet = props =>{
   const {name,hero}=props
    return(
        <div>
            <h1>Hello {name} as {hero}</h1>
            {props.children}
        </div>
    )
}

export default Greet;