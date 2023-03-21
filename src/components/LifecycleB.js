import React, { Component } from 'react'

 class LifecycleB extends Component {
    constructor(props) {
      super(props)

      
    
      this.state = {
        name:'Ujjwal'
      }
      console.log('LifecycleB const')
    }

    static getDerivedStateFromProps(props,state){
       console.log('LifecycleB getDerive')
       return null
    }

    componentDidMount(){
      console.log('LifecycleB didmount')
    }
  render() {
    console.log('LifecycleB render')
    return (
        <div>LifecycleB</div>
      
    )
  }
}

export default LifecycleB