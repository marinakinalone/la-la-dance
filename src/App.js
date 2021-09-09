import React from 'react';
import './App.css';
import {questionsList} from './questions.js';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Questionnaire />
      <Footer />
    </div>
  );
}
class Questionnaire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNb: 0,
      progress: 5,
      score: 0
    }

    this.next = this.next.bind(this)

  }

  next() {
    this.setState({
      questionNb: this.state.questionNb + 1,
      progress: ((this.state.questionNb + 1) * 100) / (questionsList.length - 1)
    })
  }


  render() {
    return (
      <div>
        <h2>{questionsList[this.state.questionNb].question}</h2>
        <button onClick={this.next}>{questionsList[this.state.questionNb].answerOne}</button>
        <button onClick={this.next}>{questionsList[this.state.questionNb].answerTwo}</button>
        <button onClick={this.next}>{questionsList[this.state.questionNb].answerThree}</button>
        <button onClick={this.next}>{questionsList[this.state.questionNb].answerFour}</button>
        {/*!let's not forget progress bar!*/}
        <ProgressBar now={this.state.progress} />
      </div>
      

    )
  }
}
class Header extends React.Component{
  render() {
    return (
      <header className="title">
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
