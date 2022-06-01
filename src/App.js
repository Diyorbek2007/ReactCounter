// import './App.css';
// import Book from './Book';
// import Loader from './Loader';

// function App(props) {
//   return props.isLoading ? (
//     <Loader />
//   ) : (
//     <div style={{ marginLeft: "5px" }}>
//       <Book name="JS" year="2022" price="200">
//         Extra info
//       </Book>
//       <Book name="React" year="2021" price="150" />
//       <Book name="Vue" year="2020" price="100" />

//     </div>
//   )
// }

// export default App

// import { Component } from "react"

// class App extends Component {
//   constructor () {
//     super()
//     this.state = {
//       count: 0
//     }
//   }

//   incr = () => {
//     this.setState({ count: this.state.count + 1 })
//   }

//   decr = () => {
//     this.setState({ count: this.state.count - 1 })
//   }

//   reset = () => {
//     this.setState({count: 0})
//   }

//   render() {
//     return (
//       <div style={{ width: "200px", margin: "auto" }}>
//         <div style={{ width: "123px", margin: "auto" }}>
//           <button>{this.state.count}</button>
//         </div>
//         <button onClick={this.incr}>+</button>
//         <button onClick={this.reset}>Reset</button>
//         <button onClick={this.decr}>-</button>
//       </div>
//     )
//   }
// } 

// export default App

// import { Component } from "react"

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       favouriteColor: 'crimson'
//     }
//   }

  // getData() {
  //   setTimeout(() => {
  //     console.log('Our data is updated')
  //     this.setState({ data: "Thomas Shelby" })
  //   }, 3000)
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => response.json())
  //   .then(json => this.setState({ posts: json, loading: false }))

  //   this.timerId = setInterval(() => {
  //     fetch('https://jsonplaceholder.typicode.com/comments')
  //     .then(response => response.json())
  //     .then(json => this.setState({ comments: json }))
  //   }, 3000)
  // }

  // componentDidUpdate(){
  //   console.log('componentDidUpdate')
  // }

//   componentDidMount(){
//     console.log("componentDidMount")
//     setTimeout(() => {
//       this.setState({ favouriteColor: 'yellow' })
//     }, 3000)
//   }

//   componentDidUpdate(){
//     console.log('componentDidUpdate')
//     document.querySelector('p').innerHTML = "The updated favourite is " + this.state.favouriteColor
//   }

//   render(){
//     console.log('render')
//     return (
//       <div className="App">
//         <p>My favourite color is {this.state.favouriteColor}</p>
//       </div>
//     )
//   }
// }

// export default App

import React from "react"
import './App.css'
export default class App extends React.Component {
  state = {
    count: 0,
    isCounting: false
  }

  componentDidMount() {
    console.log('component did mount')
    const userCount = localStorage.getItem('timer')
    if(userCount){
      this.setState({ count: +userCount })
    }
  }

  componentDidUpdate() {
    console.log('component did update')
    localStorage.setItem("timer", this.state.count)
  }

  componentWillUnmount() {
    console.log("component will unmount")
    clearInterval(this.counterId)
  }

  handleStart = () => {
    this.setState({ isCounting: true })

    this.counterId = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  handleStop = () => {
    this.setState({ isCounting: false })
    clearInterval(this.counterId)
  }

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 })
    clearInterval(this.counterId)
  }

  render() {
    return(
      <div className="App">
        <p className="text">React counter</p>
        <p className="count">{this.state.count}</p>
        {!this.state.isCounting ? (
          <button className="start" onClick={this.handleStart}>
            Start
          </button>
        ): (
          <button className="stop" onClick={this.handleStop}>
            Stop
          </button>
        )}
        <button className="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}