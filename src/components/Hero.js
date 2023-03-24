import React from 'react'

function Hero({hero}) {
    if(hero==='Joker'){
        throw new Error('Not a hero');
    }
  return (
    <div>
        {hero}
    </div>
  )
}

export default Hero