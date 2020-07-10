import React from 'react';
import Wrapper from './components/Wrapper';
import Nav from './components/Nav';
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
import characters from './characters.json';

class App extends React.Component {
  state={
    score: 0,
    highScore: 0,
    message: "Click an image to begin!",
    characters
  };

  restart = () => {
    this.state.characters.forEach((character) => (
      character.clicked = false
    ));
    this.setState({
      score: 0,
      message: "You have not mastered the 4 elements!"
    });
  };

  winner = () => {
    this.state.characters.forEach((character) => (
      character.clicked = false
    ));
    this.setState({
      score: 0,
      message: "You are an elemental master!"
    });
  };

  handleClick = id => {
    const found = this.state.characters.find((character) => character.id === id)
    if (found.clicked === false) {
      found.clicked = true;
      this.state.characters.sort(() => Math.random() - 0.5);
      if (this.state.score + 1 > this.state.highScore) {
        this.setState({
          highScore: this.state.highScore + 1
        });
      }
      if(this.state.score +1 === 12) {
        this.winner();
      } else {
        this.setState({
          score: this.state.score + 1,
          message: "Well Done!"
        });
      }
    } else {
      this.state.characters.sort(() => Math.random() - 0.5);
      this.restart();
    }
  }


  render() {
    return (
      <div>
        <Nav message={this.state.message} score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <Wrapper>
          {this.state.characters.map((character) => (
            <Card 
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              click={this.handleClick}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
