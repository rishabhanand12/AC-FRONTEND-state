import React from 'react'

let data =[
  {
    title: "HTML",
    text: "Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript, ASP and PHP.",
    isOpen: false,
    id: 0
  },
  {
    title: "CSS",
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    isOpen: false,
    id: 1
  },
  {
    title: "Javascript",
    text: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
    isOpen: false,
    id: 2
  }
];



var Accordion = (props) => {
  return (
    <>
      <p id = {props.id}>{props.title}</p>
      <button onClick = {props.clicked}>{(props.isOpen)?"Hide":"Show"}</button>
      {props.isOpen && <p>{props.data}</p>}
    </>
  )
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AccordionData : data,
    }
  }
handleClick = (id) => {
  var newstate = this.state.AccordionData.map(elem => {
    if(id === elem.id) {
      elem.isOpen = !elem.isOpen;
    } 
    return elem;
  });
  this.setState({AccordionData:newstate})
} 

  render() {
    return (
      <>
        {data.map(elem => {
          return (
            <li key ={elem.id}>
              <Accordion id = {elem.id} title = {elem.title} clicked = {()=> this.handleClick(elem.id)} isOpen = {elem.isOpen} data = {elem.text}/>
            </li>
          )
        })}
      </>
    )
  }
}






















