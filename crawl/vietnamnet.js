const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

request('https://vietnamnet.vn/vn/the-thao/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = []
        $('.box-subcate-style4').each((index, el) => {
          const thumbnail = $(el).find("img").attr();
          const link = "https://vietnamnet.vn" + $(el).find("a.thumb").attr("href");
          const title = $(el).find("img").attr("alt");
          console.log(link)
            // const topic = $(el).find('.box-header a').text().trim();
            // const link_item = $(el).find('.box-widget .box-content a').attr('href');
            // const title = $(el).find('.box-widget .box-content a').attr('title');
            // const thumbnail = $(el).find('.box-widget .box-content a img').attr('src');
            // data.push({ topic: topic, link_item: 'https://nhandan.vn/' + link_item, thumbnail: thumbnail, title: title })
        });

        // fs.writeFileSync('data-nhandan.json', JSON.stringify(data));
    }
    else {
        console.log(error);
    }
});
