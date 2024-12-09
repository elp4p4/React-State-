import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "James Arthur Gosling",
        bio: [
          "Canadian computer scientist, best known as the founder and lead designer behind the Java programming language.",
          "Gosling was elected a member of the National Academy of Engineering in 2004 for the conception and development of the architecture for the Java programming language.",
          "He also contributed to window systems.",
        ],
        imgSrc:
          "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQNlnHai_MrsEvVEoEnWxFxPUITz8wVMYQ9WRAgVY71ZuOPKDJsSIFJT2O9bjtmfFMPFSMmdX2XXvLK6lWZYoEUHg",
        profession: "Computer Scientist",
      },
      show: false,
      timeElapsed: 0,
    };

    // Binding the toggle method
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    // Start the timer when the component mounts
    this.timer = setInterval(() => {
      this.setState((prevState) => ({
        timeElapsed: prevState.timeElapsed + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clean up the timer when the component unmounts
    clearInterval(this.timer);
  }

  toggleShow() {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  }

  render() {
    const { person, show, timeElapsed } = this.state;
    return (
      <div className="App">
        <h1>Person Profile</h1>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>

        {show && (
          <div className="profile">
            <h2>{person.fullName}</h2>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>
            <strong>Bio:</strong>{person.bio.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
            </p>

            <p>
              <strong>Profession:</strong> 
            </p>
            {person.profession}
          </div>
        )}

          <strong><p>Time since mounted: {timeElapsed} seconds</p></strong>
      </div>
    );
  }
}

export default App;
