import React from "react";

class Gif extends React.Component {
  handleClick = () => {
    this.props.selectGif(this.props.id);
  };
  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div className="row">
        <div className="col-xs-6 col-md-3">
          <img src={src} alt="gif" className="gif" onClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

export default Gif;
