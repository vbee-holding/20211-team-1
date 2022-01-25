const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

request('https://vnexpress.net/bong-da', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = []

        $('article').each((index, el) => {
            const thumbnail = $(el).find("img").attr("data-src");
            const link = $(el).find(".thumb-art a").attr("href");
            const title = $(el).find("img").attr("alt");
            console.log(link)
        });
    }
    else {
        console.log(error);
    }
});
