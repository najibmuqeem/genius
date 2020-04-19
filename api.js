const vision = require("@google-cloud/vision");
async function quickstart() {
  // Imports the Google Cloud client library

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "api.json",
  });

  // Performs label detection on the image file
  const [result] = await client.webDetection("./test_product.jpg");
  const urls = result.webDetection.pagesWithMatchingImages;
  urls.forEach((url) => console.log(url.url));
  //const labels = result.webAnnotations;
  //console.log("Labels:");
  //labels.forEach((label) => console.log(label.description));
}

quickstart();
