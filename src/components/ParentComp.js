import React, { Component } from 'react'
import Memocomp from './Memocomp'
import Purecomp from './Purecomp'
import Regcomp from './Regcomp'

 class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'ujjwal'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'ujjwal'
            })
        },2000)
    }
  render() {
    console.log('PPareure')

    return (
      <div>ParentComp 
        <Memocomp name={this.state.name}/>
        {/* <Regcomp name={this.state.name}/> */}
        {/* <Purecomp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp