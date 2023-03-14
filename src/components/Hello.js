import React from "react";

const Hello = () =>{
    // return(
    //     <div>
    //         <h1>
    //             Hello
    //         </h1>
    //     </div>
    // )

    return React.createElement('div',{id:'1',className:'dummy'},React.createElement('h1',null,'Hello '))
}

export default Hello