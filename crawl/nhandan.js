const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

request('https://nhandan.vn/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = []

        $('.box-widget').each((index, el) => {
            const topic = $(el).find('.box-header a').text().trim();
            const link_item = $(el).find('.box-widget .box-content a').attr('href');
            const title = $(el).find('.box-widget .box-content a').attr('title');
            const thumbnail = $(el).find('.box-widget .box-content a img').attr('src');

            data.push({ topic: topic, link_item: 'https://nhandan.vn/' + link_item, thumbnail: thumbnail, title: title })
        });

        fs.writeFileSync('data-nhandan.json', JSON.stringify(data));
    }
    else {
        console.log(error);
    }
});
