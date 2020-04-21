import React from "react";
import Header from "./Header.js";
import Footer from "./Footer.js";
import axios from "axios";
import "./components_styles/api.css";

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
        console.log(urlArr);
        window.open(urlArr, "_blank");
      })
      .catch((error) => console.error("Error is: ", error));
  }
  onChange(e) {
    this.setState({ file: e.target.files[0] });
  }
  loading() {
    document.querySelector(".ctn").classList.replace("button", "show-nothing");
    document
      .querySelector(".buttonload")
      .classList.replace("buttonload", "show-load");
    setTimeout(function () {
      document
        .querySelector(".show-load")
        .classList.replace("show-load", "buttonload");
      document
        .querySelector(".show-nothing")
        .classList.replace("show-nothing", "button");
    }, 5000);
  }

  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <Header logout={this.props.logout} />
        <div class="upload-main">
          <form class="upload" onSubmit={this.onFormSubmit}>
            <h1>File Upload</h1>
            <input
              id="file-upload"
              class="visually-hidden"
              type="file"
              name="myImage"
              onChange={this.onChange}
            />
            <label class="button btn-rose" for="file-upload">
              Upload Image
            </label>
            <button
              onClick={() => this.loading()}
              class="button btn-rose icon-btn sold-btn ctn"
              type="submit"
            >
              Upload
            </button>
            <p class="buttonload">
              Loading
              <i class="fa fa-spinner fa-spin"></i>
            </p>
          </form>
        </div>
        <Footer />
      </>
    );
  }
}

export default Api;
