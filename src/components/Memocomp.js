import React from 'react'

function Memocomp({name}) {
    console.log('Memo')
  return (
    <div>Memocomp {name}</div>
  )
}

export default React.memo(Memocomp) 