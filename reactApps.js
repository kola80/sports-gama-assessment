class Team extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shots: 0,
      score: 0,
    };
    this.shotSound = new Audio("");
    this.scoreSound = new Audio("");
  }

  shotHandler = () => {
    let score = this.state.score;
    this.shotSound.play();

    if (Math.random() > 0.5) {
      score += 1;

      setTimeout(() => {
        this.scoreSound.play();
      }, 100);
    }

    this.setState((state, props) => ({
      shots: state.shots + 1,
      score,
    }));
  };

  render() {
    let shotPercentageDiv;
    if (this.state.shots) {
      const shotPercentage = Math.round(
        (this.state.score / this.state.shots) * 100
      );
      shotPercentageDiv = (
        <div>
          <strong>shooting %: shotPercentage</strong>
        </div>
      );
    }

    return (
      <div className="Team">
        <h2>{this.props.name}</h2>

        <div className="identity">
          <img src={this.props.logo} alt={this.props.name} />
        </div>
        <div>
          <strong>shots:</strong> {this.state.shots}
        </div>
        <div>
          <strong>score:</strong> {this.state.score}
        </div>

        {shotPercentageDiv}
        <button onClick={this.shotHandler}>shoot!</button>
      </div>
    );
  }
}
function Game(props) {
  return (
    <div className="Game">
      <h1>Welcome to {props.venue}</h1>
      <div className="stats">
        <Team
          name={props.visitingTeam.name}
          logo={props.visitingTeam.logoSrc}
        />

        <div className="versus">
          <h1>VSC</h1>
        </div>

        <Team name={props.homeTeam.name} logo={props.homeTeam.logoSrc} />
      </div>
    </div>
  );
}

function App(props) {
  const Lumber = {
    name: "Lumber Folk",
    logoSrc: "",
  };

  const Dover = {
    name: "Dover Peeps",
    logoSrc: "",
  };

  const Rabbit = {
    name: "Rabbit Root",
    logoSrc: "",
  };

  const Fox = {
    name: "Sheep Guard",
    logoSrc: "",
  };

  return (
    <div className="App">
      <Game
        venue="Newark Liberty centre"
        homeTeam={Dovers}
        visitingTeam={Lumber}
      />
      <Game venue="Newyork Stadium" homeTeam={Root} visitingTeam={Guard} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
