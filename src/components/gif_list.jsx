import React from "react";
import Gif from "./gif.jsx";

class GifList extends React.Component {
  render() {
    return (
      <div className="gif-list">
        {this.props.gifs.map(gif => (
          <Gif id={gif.id} key={gif.id} selectGif={this.props.selectGif} />
        ))}
      </div>
    );
  }
}

export default GifList;
