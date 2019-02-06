import React from "react";
import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list";
import giphy from "giphy-api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: [],
      selectedGifId: "xUPJPhnAzy86MR7WmI"
    };
    // this.search("kimchi")
    // this.select("PJctDxxDeHWQo")
  }

  search = query => {
    giphy("vIvI4Ex7TVZwindnk6IAtasJ3OmlV1dc").search(
      {
        q: query,
        rating: "g",
        limit: 12
      },
      (err, res) => {
        this.setState({
          gifs: res.data
        });
      }
    );
  };

  selectGif = id => {
    this.setState({
      selectedGifId: id
    });
  };

  render() {
    const gifs = [
      { id: "xUPJPhnAzy86MR7WmI" },
      { id: "3ogwFVA3v6rYcnO5cA" },
      { id: "3ogwG8thqDwgoxc6hq" }
    ];
    return (
      <div>
        <div className="left-scene">
          <h1>Search</h1>
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <h1>Results</h1>
          <GifList gifs={this.state.gifs} selectGif={this.selectGif} />
        </div>
      </div>
    );
  }
}

export default App;
