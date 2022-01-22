const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require("fs");
const axios = require("axios");

// Xa hoi - Chinh tri
request(
  "https://dantri.com.vn/xa-hoi/chinh-tri.htm",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const data = [];

      $(".news-item").each((index, el) => {
        const link_item = $(el).find(".news-item__avatar").attr("href");
        const title = $(el).find(".news-item__avatar").attr("title");
        const thumbnail = $(el).find(".dt-thumbnail img").attr("src");

        const categoryIds = [
          "61d824e94dac6055c893727e",
          "61d824fd4dac6055c8937282",
        ];
        const sourceId = "61c5f4cf16b101b4101d8093";

        if (link_item !== undefined) {
          data.push({
            link: "https://dantri.com.vn/" + link_item,
            title: title,
            status: "Hiện",
            thumbnail: thumbnail,
            categoryIds: categoryIds,
            sourceId: sourceId,
          });
        }
      });
      data.map((x) => {
        //console.log(x);
        axios.post("http://localhost:4000/api/v1/articles", x);
      });
      // fs.writeFileSync("data-dan-tri.json", JSON.stringify(data));
    } else {
      console.log(error);
    }
  }
);

// Xa hoi - Giao thong
request(
  "https://dantri.com.vn/xa-hoi/chinh-tri.htm",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const data = [];
      $(".news-item").each((index, el) => {
        const link_item = $(el).find(".news-item__avatar").attr("href");
        const title = $(el).find(".news-item__avatar").attr("title");
        const thumbnail = $(el).find(".dt-thumbnail img").attr("src");

        const categoryIds = [
          "61d824e94dac6055c893727e",
          "61d8250b4dac6055c8937286",
        ];
        const sourceId = "61c5f4cf16b101b4101d8093";

        if (link_item !== undefined) {
          data.push({
            link: "https://dantri.com.vn/" + link_item,
            title: title,
            status: "Hiện",
            thumbnail: thumbnail,
            categoryIds: categoryIds,
            sourceId: sourceId,
          });
        }
      });

      data.map((x) => {
        axios.post("http://localhost:4000/api/v1/articles", x);
      });
      // fs.writeFileSync("data-dan-tri.json", JSON.stringify(data));
    } else {
      console.log(error);
    }
  }
);

// Xa hoi - Moi truong
request(
  "https://dantri.com.vn/xa-hoi/moi-truong.htm",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      const data = [];
      $(".news-item").each((index, el) => {
        const link_item = $(el).find(".news-item__avatar").attr("href");
        const title = $(el).find(".news-item__avatar").attr("title");
        const thumbnail = $(el).find(".dt-thumbnail img").attr("src");

        const categoryIds = [
          "61d824e94dac6055c893727e",
          "61d825154dac6055c893728a",
        ];
        const sourceId = "61c5f4cf16b101b4101d8093";

        if (link_item !== undefined) {
          data.push({
            link: "https://dantri.com.vn/" + link_item,
            title: title,
            status: "Hiện",
            thumbnail: thumbnail,
            categoryIds: categoryIds,
            sourceId: sourceId,
          });
        }
      });

      data.map((x) => {
        axios.post("http://localhost:4000/api/v1/articles", x);
      });
    } else {
      console.log(error);
    }
  }
);
