const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require("fs");
const axios = require("axios");

request("https://vietnamnet.vn/", (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    let data = [];

    // ShowCate1
    $(".ShowCate1").each((index, el) => {
      const topic = $(el).find(".ParentCate a").text();
      const link_item = $(el).find(".top-one a").attr("href");
      const title = $(el).find(".top-one a").attr("title");
      const thumbnail = $(el).find(".top-one a img").attr("src");
      // console.log(topic.toUpperCase());

      data.push({
        topic: topic,
        link_item: "https://vietnamnet.vn/" + link_item,
        thumbnail: thumbnail,
        title: title,
      });
    });

    // ShowCate2
    const topic = $(".ShowCate2").find(".ParentCate a").text();
    $(".ShowCate2 .widht-list-images .item").each((index, el) => {
      // const topic = $(el).find('.ParentCate a').text();
      const link_item = $(el).find(".item a").attr("href");
      const title = $(el).find(".item a img").attr("alt");
      const thumbnail = $(el).find(".item a img").attr("src");

      if (link_item !== undefined) {
        data.push({
          topic: topic,
          link_item: "https://vietnamnet.vn/" + link_item,
          thumbnail: thumbnail,
          title: title,
        });
      }
    });

    // ShowCate3
    $(".ShowCate3").each((index, el) => {
      const topic = $(el).find(".ParentCate a").text();
      const link_item = $(el).find(".top-one a").attr("href");
      const title = $(el).find(".top-one a").attr("title");
      const thumbnail = $(el).find(".top-one a img").attr("src");
      data.push({
        topic: topic,
        link_item: "https://vietnamnet.vn/" + link_item,
        thumbnail: thumbnail,
        title: title,
      });
    });

    axios
      .get("http://localhost:4000/api/v1/categories")
      .then((response) => {
        for (let i = 0; i < data.length; i++) {
          for (let j = 0; j < response.data.data.length; j++) {
            if (data[i].topic.toLowerCase() === response.data.data[j].name) {
              // console.log(data[i].topic, response.data.data[j].name);
              axios.post("http://localhost:4000/api/v1/articles", {
                link: data[i].link_item,
                title: data[i].title,
                sapo: data[i].title,
                status: "Hiện",
                sourceId: "61d80e96a08e243c83ae73b0",
                categoryIds: [response.data.data[j]._id],
              });
            }
            else if (!data[i].topic.includes("-")) {
              axios
                .post("http://localhost:4000/api/v1/categories", {
                  name: data[i].topic,
                })
                // .then((response) => {
                //   axios.post("http://localhost:4000/api/v1/articles", {
                //     link: data[i].link_item,
                //     title: data[i].title,
                //     sapo: data[i].title,
                //     status: "Hiện",
                //     sourceId: "61d80e96a08e243c83ae73b0",
                //     categoryIds: [response.data.data._id],
                //   });
                // });
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // fs.writeFileSync("data-vietnamnet.json", JSON.stringify(data));
  } else {
    console.log(error);
  }
});
