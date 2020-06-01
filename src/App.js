import React from 'react';
import axios from 'axios';
import './Style/table.css';
import './Style/font.css';

class App extends React.Component {

  state = {
    repos: []
  };

  componentDidMount() {
    axios.get('https://api.github.com/users/saket-shetty/repos').then(res => {
      console.log(res);
      this.setState({ repos: res.data });
    });
  }

  render() {
    return (
      <div>
        <p>Hi! My name is Saket Shetty.</p>
        <p>I have completed Engineering in Information Technology from Pillai College of Engineering (2016-2020).</p>
        <p>My final year project was building a <a href="https://github.com/saket-shetty/Human-Posture-Recognition">Human Posture Detection</a> program that will detect human posture from images and video using ML and Deep Learning.</p>
        <p>I like to work on mobile app technology like Flutter and Android(Java) and backend using Nodejs.</p>
        <p>Some of my projects :</p>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
              <th>Stars</th>
              <th>Forks</th>
            </tr>
            {this.state.repos.map(rep => (
              rep.description != null &&
                <tr key={rep.node_id}>
                  <td> <a href={rep.html_url}> {rep.name}</a></td>
                  <td>{rep.description}</td>
                  <td>{rep.language}</td>
                  <td>{rep.stargazers_count}</td>
                  <td>{rep.forks_count}</td>
                </tr>
            ))}
          </tbody>
        </table>
        <p>My <a href="https://saket-resume.herokuapp.com/cv.pdf">resume</a> if you want to take a look at it.</p>
      </div>
    );
  }

}

export default App;
