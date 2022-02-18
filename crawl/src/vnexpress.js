const cheerio = require('cheerio');
const request = require('request-promise');
const axios = require("axios");
const { CATEGORIES } = require('./CATEGORIES');
const { SOURCES } = require('./SOURCE');


const CATEGORY_DETAILS = [
    // Y te
    {
        url: SOURCES.vnexpress.url + "/suc-khoe",
        category: CATEGORIES.medicine.id,
    },
    // Giai tri
    {
        url: SOURCES.vnexpress.url + "/giai-tri",
        category: CATEGORIES.entertainment.id,
    },
    // The thao
    {
        url: SOURCES.vnexpress.url + "/the-thao",
        category: CATEGORIES.sport.id,
    },
    // Cong nghe
    {
        url: SOURCES.vnexpress.url + "/khoa-hoc",
        category: CATEGORIES.technology.id,
    },
    // Kham pha Viet Nam
    {
        url: SOURCES.vnexpress.url + "/du-lich",
        category: CATEGORIES.vietnam_travel.id,
    },
    // Kham pha the gioi
    {
        url: SOURCES.vnexpress.url + "/the-gioi",
        category: CATEGORIES.world_travel.id,
    },

]



for (let i = 0; i < CATEGORY_DETAILS.length; i++) {
    var options = {
        uri: CATEGORY_DETAILS[i].url,
        transform: function (body) {
            return cheerio.load(body);
        },
    };
    request(options).then(($) => {
        $('article').each((index, el) => {
            const thumbnail = $(el).find('img').attr("data-src")
            const link = $(el).find('.thumb-art a').attr('href');
            const title = $(el).find('img').attr('alt');
            if (thumbnail && link && title && (!thumbnail.includes('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9JREFUeNpiuHHjBkCAAQAFFAKJ7S6GgQAAAABJRU5ErkJggg=='))) {
                axios.post(process.env.HOST+ "api/v1/articles/crawl", {
                    thumbnail: thumbnail,
                    link: link,
                    title: title,
                    releaseTime: Date.now(),
                    isShow: true,
                    category: CATEGORY_DETAILS[i].category,
                    source: SOURCES.vnexpress.id,
                }).then((result) => {
                    if (result.data.success == true) {
                        console.log(result.data.data)
                    } else {
                        console.log(result.data)
                    }
                }).catch(error => {
                    console.log(error)
                })

            } else {
                console.log("Invalid data")
            }
        });
    }).catch(error => {
        console.log(error)
    });
}
