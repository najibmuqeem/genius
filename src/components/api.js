import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import axios from "axios";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
    };
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("myImage", this.state.file);
    console.log("this.state.file", this.state.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("/picture", formData, config)
      .then((result) => {
        const urlArr = result.data;
        const urlList = urlArr.forEach((url) => {
          console.log(url);
          return <a href={url}>{url}</a>;
        });
      }) // Try now. This is where you should get it
      .catch((error) => console.error("Error is: ", error));
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }

  render() {
    return (
      <>
        <Header />
        <form onSubmit={this.onFormSubmit}>
          <h1>File Upload</h1>
          <input type="file" name="myImage" onChange={this.onChange} />
          <button type="submit">Upload</button>
          <div>{this.urlList}</div>
        </form>
        <Footer />
      </>
    );
  }
}

export default Api;
