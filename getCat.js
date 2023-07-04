const axios = require("axios");
const fs = require("fs");

/**
 * Get a random cat image URL from the Cat API
 * @see https://thecatapi.com/
 * @see https://axios-http.com/docs/
 * @returns {Promise<string>} URL of a random cat image
 */
async function getRandomCatURL() {
  const url = "https://api.thecatapi.com/v1/images/search";
  try {
    const { data } = await axios.get(url, {
      withCredentials: true,
      headers: {
        "X-API-KEY": process.env.THE_CAT_API_KEY,
      },
      timeout: 5000,
    });
    return data[0].url;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Get a cat image file from the Cat API
 * @see https://axios-http.com/docs/
 * @param {string} url URL of a cat image
 * @returns {Promise<void>} A cat image file
 */
async function getCatImageFile(url) {
  axios({ url, responseType: "stream", timeout: 5000 }).then(
    (response) =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(fs.createWriteStream("tmpcat.png"))
          .on("finish", () => resolve())
          .on("error", (e) => reject(e));
      })
  );
}

module.exports = { getRandomCatURL, getCatImageFile };