const vision = require("@google-cloud/vision");

async function runAPI(picture) {
  console.log("hit with: ", picture);
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "./api.json",
  });
  const [result] = await client.webDetection(picture);
  const urls = result.webDetection.pagesWithMatchingImages;
  let urlArr = [];
  urls.forEach((url) => {
    urlArr.push(url.url);
  });
  return urlArr;
}

module.exports = runAPI;
