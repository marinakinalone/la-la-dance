import React from 'react';
import './App.css';
import illustration from './resources/illus_lalaland.jpg';
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
      color: colors[0],
      result: 'chachacha',
      displayTest: false,
      displayIntro: true

    }

    this.next = this.next.bind(this)
    this.handleClickToTest = this.handleClickToTest.bind(this)
    this.handleClickToIntro = this.handleClickToIntro.bind(this)

  }

  next() {
    this.setState({ 
      questionNb: this.state.questionNb + 1,
      progress: ((this.state.questionNb + 1) * 100) / (questionsList.length - 1),
      color: colors[this.state.questionNb + 1 ]
    })
   
  }

  handleClickToTest() {
    this.setState({
      displayTest: true,
      displayIntro: false
    })
  }

  handleClickToIntro() {
    this.setState({
      displayTest: false,
      displayIntro: true
    })
  }



  render() {
    let mainContent = <Introduction style={{color: this.state.color, borderColor: this.state.color}} onClick={this.handleClickToTest}/>;

    if (this.state.displayTest) {
      mainContent = <div className="test">
      <Questionnaire question={questionsList[this.state.questionNb].question} />
      {questionsList[this.state.questionNb].answers.map(answer => (
      <button onClick={this.next} style={{color: this.state.color, borderColor: this.state.color}}>
        {answer}
      </button>
    ))}
      <ProgressBar now={this.state.progress} style={{backgroundColor: this.state.color, color: this.state.color, height: "4px"}}/>
      </div>
    }

    // if (this.state.questionNb == (questionsList.length)) {
    //   mainContent = <Result result={this.state.result} style={{color: this.state.color, borderColor: this.state.color}} onClick={this.handleClickToIntro}/>
    // }

    return (
      <div style={{color: this.state.color}}>
        <Header />
        {mainContent}
        <Footer />
      </div>
    )
  }
}


class Questionnaire extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.question}</h2>  
      </div>
    )
  }
}

class Introduction extends React.Component {
  render() {
    return (
      <div>
        <p>description</p>
        <button style={this.props.style} onClick={this.props.onClick}>I want to dance</button>
        <figure>
        <img src={illustration} alt="extract from the movie La La Land where a woman with a yellow dress dances with a man with a black and white costume in front of a night-time landscape with blue and purple colors"></img>
        <figcaption>source: wallpaperflare.com</figcaption>
        </figure>     
      </div>
    )
  }
}

class Result extends React.Component {
  render() {
    return (
      <div>
        <h2 style={this.props.color}>Your social dance style is: </h2>
        <p className="result">{this.props.result}</p>
        <button style={this.props.style} onClick={this.props.onClick}>take the questionnaire again</button>
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
