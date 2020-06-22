import React, { Component } from 'react';
import axios from 'axios'
import "./App.css"




class App extends Component {
  state = {
    post: null,
    search: '',
  }
  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=computer&client_id=${process.env.REACT_APP_UNPLASH_API}`
      )
      .then((res) => {
        this.setState({
          post: res.data.results,
        });
        // console.log(this.state.post);
        // console.log(res.data.results);

      });
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })

  }
  handleSubmit = (e) => {
    e.preventDefault()
    document.querySelector('#search').value = ''
    this.setState({
      post: null
    })
    axios
      .get(
        `https://api.unsplash.com/search/photos?query=${this.state.search}&client_id=${process.env.REACT_APP_UNPLASH_API}`
      )
      .then((res) => {
        this.setState({
          post: res.data.results,
        });
        // console.log(this.state.post);
        // console.log(res);
      });

  }
  render() {  
    const images = this.state.post ? (this.state.post.map((pics) => {
      return (
        <div className="content" key={pics.id}>
          <img src={pics.urls.small} alt="" />
          <a href={pics.links.download_location}>link</a>
        </div>
      );
    }) ) : (
      <div className="content">
        <p>Loading images</p>
      </div>
    )
    return (
      <div className="App">
        <h1>Abhijeet.R. Kushwaha</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="search" onChange={this.handleChange} />
          <button type="submit">search</button>
        </form>
        {images}
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