const cheerio = require('cheerio');
const request = require('request-promise');
const axios = require("axios");
const { CATEGORIES } = require('./CATEGORIES');
const { SOURCES } = require('./SOURCE');


const CATEGORY_DETAILS = [
    // Y te
    {
        url: SOURCES.vietnamnet.url + "/vn/suc-khoe",
        category: CATEGORIES.medicine.id,
    },
    // Giai tri
    {
        url: SOURCES.vietnamnet.url + "/vn/giai-tri",
        category: CATEGORIES.entertainment.id,
    },
    // The thao
    {
        url: SOURCES.vietnamnet.url + "/vn/the-thao",
        category: CATEGORIES.sport.id,
    },
    // Cong nghe
    {
        url: SOURCES.vietnamnet.url + "/vn/cong-nghe",
        category: CATEGORIES.technology.id,
    },
    // Kham pha Viet Nam
    {
        url: SOURCES.vietnamnet.url + "/vn/tuanvietnam",
        category: CATEGORIES.vietnam_travel.id,
    },
    // Kham pha the gioi
    {
        url: SOURCES.vietnamnet.url + "/vn/the-gioi",
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
        $('li').each((index, el) => {
            const thumbnail = $(el).find('img').attr("src")
            const link =  $(el).find('a.thumb').attr('href');
            const link1= SOURCES.vietnamnet.url +$(el).find('a.thumb').attr('href');
            const title = $(el).find('img').attr('alt');
            if (thumbnail && link && title && (!thumbnail.includes('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9JREFUeNpiuHHjBkCAAQAFFAKJ7S6GgQAAAABJRU5ErkJggg=='))) {
                axios.post(process.env.HOST+"api/v1/articles/crawl", {
                    thumbnail: thumbnail,
                    link: link1,
                    title: title,
                    releaseTime: Date.now(),
                    isShow: true,
                    category: CATEGORY_DETAILS[i].category,
                    source: SOURCES.vietnamnet.id,
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
