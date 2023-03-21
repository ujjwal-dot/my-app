import React, { Component } from 'react'

 class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments: '',
         topic:''
      }
    }

    handleUsernameChange=(event)=>{
        this.setState({
            username:event.target.value
        })

    }
    handleCommentChange=event=>{
      this.setState({
        comments:event.target.value
      })
    }
    handleTopicChange=event=>{
      this.setState({
        topic:event.target.value
      })
    }

    handleSubmit=event=>{
      alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
      event.preventDefault()
      
    }
  render() {

    const{username, comments ,topic}=this.state
    return (
        <form onSubmit={this.handleSubmit}>
        <div>
         <label>Username</label>
         <input type='text' value={username} onChange={this.handleUsernameChange}/>
        </div>
        <div>
          <label>Comments</label>
          <textarea value={comments} onChange={this.handleCommentChange}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
          </select>
        </div>
        <button type='submit'>Submit</button>
       
         </form>
    )
  }
}

export default Form