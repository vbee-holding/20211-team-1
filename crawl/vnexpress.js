const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs');

request('https://vnexpress.net/', (error, response, html) => {
    if (!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        let data = []

        $('.item-news').each((index, el) => {
            const link_item = $(el).find('.item-news .title-news a').attr('href');
            const title = $(el).find('.item-news .title-news a').text();
            const thumbnail = $(el).find('.item-news .thumb-art a').attr('href');
            const description = $(el).find('.item-news .description a').text();

            data.push({ link_item: 'https://vnexpress.net/' + link_item, thumbnail: thumbnail, title: title, description: description })
        });

        fs.writeFileSync('data-vnexpress.json', JSON.stringify(data));
    }
    else {
        console.log(error);
    }
});
