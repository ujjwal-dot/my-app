import React, { PureComponent } from 'react'

 class Purecomp extends PureComponent {
  render() {
    console.log('Pure')
    return (
      <div>Purecomp {this.props.name}</div>
    )
  }
}

export default Purecomp