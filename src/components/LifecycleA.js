import React, { Component } from 'react'

 class LifecycleA extends Component {
    constructor(props) {
      super(props)

      
    
      this.state = {
        name:'Ujjwal'
      }
      console.log('LifeCycleA const')
    }

    static getDerivedStateFromProps(props,state){
       console.log('LifecycleA getDerive')
       return null
    }

    componentDidMount(){
      console.log('LifecycleA didmount')
    }
  render() {
    console.log('LifecycleA render')
    return (
        
       
        <div>LifecycleA</div>

       
    )
  }
}

export default LifecycleA