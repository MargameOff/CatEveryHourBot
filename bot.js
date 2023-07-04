const Mastodon = require("mastodon-api");
const cron = require("node-cron");
const https = require("https");
const fs = require("fs");

const getCat = require("./getCat.js");

console.log(`${process.env.APP_NAME}`);
console.log(`Ready on ${process.env.NODE_ENV} mode`);

/**
 * Initialize Mastodon API with environment variables
 */
const M = new Mastodon({
  access_token: process.env.MASTODON_ACCESS_TOKEN,
  client_secret: process.env.MASTODON_CLIENT_SECRET,
  client_key: process.env.MASTODON_CLIENT_KEY,
  timeout_ms: 60 * 1000,
  api_url: process.env.MASTODON_INSTANCE_URL + "api/v1/",
});

/**
 * Get a random cat image and post it to Mastodon
 */
const postStatus = async () => {
  const url = await getCat.getRandomCatURL();
  await getCat.getCatImageFile(url);
  //wait for the file to be created
  await new Promise((resolve) => setTimeout(resolve, 3000));
  M.post("media", { file: fs.createReadStream("tmpcat.png") }).then((resp) => {
    const id = resp.data.id;
    M.post("statuses", { status: "✨ c a t ✨", media_ids: [id] });
  });
  console.log("Cat pic send");
};

console.log("Bot ready to post cat pics, starting cron job");
postStatus();
cron.schedule("0 * * * *", () => {
    postStatus();
  });