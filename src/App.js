import React, { Component } from 'react';
import axios from 'axios'




class App extends Component {
  state = {
    post: []
  }
  componentDidMount() {
    axios.get(process.env.REACT_APP_API)
      .then((res) => {
        this.setState({
          post: res.data.slice(0, 10),
        });
        console.log(this.state.post);
        
        
      });
  }
  render() {
    
    console.log(process.env.REACT_APP_HI);
    
    return (
      <div className="App">
        <h1>Abhijeet{process.env.REACT_APP_HI}</h1>
      </div>
    );
  }
}

export default App;
// class Github {
//   constructor() {
//     this.client_id = "4344cc18f43-2b5632ea4";
//     this.client_secret = "42bfa0ba6ca7e7e0c46239f65ccfa6eff41ef4dc";
//     this.repos_count = 5; //we dont wanna see all repos of an individual
//     this.repos_sort = "created: asc";
//   }
//   async getUser(user) {
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
//     );
//     const repoResponse = await fetch(
//       `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
//     );
//     const profile = await profileResponse.json();
//     const repos = await repoResponse.json();

//     return {
//       profile,
//       repos,
//     };
//   }
// }