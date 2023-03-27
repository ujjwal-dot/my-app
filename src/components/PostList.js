import React, { Component } from 'react'
import axios from 'axios'

 class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errorm:''
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
          console.log(response)
          this.setState({posts:response.data})
        })
        .catch(error=>{
           console.log(error)
           this.setState({errorm:'Cant Load Data'})
        })
    }
  render() {
    const{posts,errorm}=this.state
    return (
      <div>
        PostList
        {
            posts.length?
            posts.map(post=><div key={post.id}>{post.title}</div>):null
        }
        {
            errorm?<div>{errorm}</div>:null
        }
      </div>
    )
  }
}

export default PostList