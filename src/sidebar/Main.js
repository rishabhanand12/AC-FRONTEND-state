import React from 'react'

class Sidebar extends React.Component {
  render() {
    return (
      <>
        <button>Home</button>
        <button>Contact</button>
        <button>About</button>
      </>
    )
  }
}

class Main extends React.Component {
  render() {
    return (
      <p>SideBar</p>
    )
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBarVisible: true
    }
  }

  showSidebar = (visible) => {
    if(visible){
      return <Sidebar />

    } else {
      return null
    }
  }

  render() {
    return (
      <>
        <section>
          {this.showSidebar(this.state.sideBarVisible)}
          <Main />
        </section>
        <footer>
        <button onClick = {() => this.setState({sideBarVisible: !this.state.sideBarVisible})}>
          {(this.state.sideBarVisible)
          ?"Hide"
          :"Show" }
        </button>
        </footer>
      </>
    )
  }
}