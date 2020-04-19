import React from "react";
const vision = require("@google-cloud/vision");

export default function api(){
  async function quickstart(picture) {
    const client = new vision.ImageAnnotatorClient({
      keyFilename: "api.json",
    });
    const [result] = await client.webDetection(picture);
    const urls = result.webDetection.pagesWithMatchingImages;
    urls.forEach((url) => console.log(url.url));

  }
  return()
}