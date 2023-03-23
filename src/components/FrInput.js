import React from 'react'

// function FrInput() {
//   return (
//     <div>FrInput</div>
//   )
// }

const FrInput = React.forwardRef((props,ref)=>{
    return(
     <div>
        <input type='text' ref={ref}/>
     </div>    
    )
}) 

export default FrInput