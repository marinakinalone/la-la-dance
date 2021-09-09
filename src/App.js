import React from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

import {questionsList} from './questions.js';
const colors = ["#FF001E", "#FF6200", "#00DFDC", "#FF2E8A", "#00FF7F", "#FFE641", "#F278FF",]
{/* //!accessibility of contrasts to review!*/}

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      questionNb: 0,
      progress: 5,
      score: 0,
      color: colors[0]
    }

    this.next = this.next.bind(this)

  }

  next() {
    this.setState({
      questionNb: this.state.questionNb + 1,
      progress: ((this.state.questionNb + 1) * 100) / (questionsList.length - 1),
      color: colors[this.state.questionNb + 1 ]
    })
  }

  render() {
    return (
      <div style={{color: this.state.color}}>
        <Header style={{color: this.state.color}} />
        <Questionnaire question={questionsList[this.state.questionNb].question} />

        {questionsList[this.state.questionNb].answers.map(answer => (
        <button onClick={this.next} style={{color: this.state.color, borderColor: this.state.color}}>
          {answer}
        </button>
      ))}

        <ProgressBar now={this.state.progress} style={{backgroundColor: this.state.color, color: this.state.color, height: "4px"}}/>
        <Footer />
      </div>
    )
  }
}
class Questionnaire extends React.Component {
  render() {
    return (
      <div>
        <h2 style={this.props.color}>{this.props.question}</h2>  
      </div>
    )
  }
}


class Header extends React.Component{
  render() {
    return (
      <header className="header">
        <h1>La La Dance</h1>
        <p className="header_quote">"Dance, dance, otherwise we are lost" (Pina Bausch)</p>
      </header>
    )
  }
}
class Footer extends React.Component{
  render() {
    return (
      <footer>
        <p className="copyright">Made while dancing by <a href="https://kinalone.dev" target="_blank" rel="noopener noreferrer">MKS</a> | <a href="../license.txt" target="_blank" rel="noopener noreferrer">license</a></p>
      </footer>
    )
  }
}

export default App;
