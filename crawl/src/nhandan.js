const cheerio = require('cheerio');
const request = require('request-promise');
const axios = require("axios");
const { CATEGORIES } = require('./CATEGORIES');
const { SOURCES } = require('./SOURCE');


const CATEGORY_DETAILS = [
    // Y te
    {
        url: SOURCES.nhan_dan.url + "/y-te",
        category: CATEGORIES.medicine.id,
    },
    // Giai tri
    {
        url: SOURCES.nhan_dan.url + "/hanh-trinh-kham-pha",
        category: CATEGORIES.entertainment.id
    },
    // The thao
    {
        url: SOURCES.nhan_dan.url + "/thethao",
        category: CATEGORIES.sport.id
    },
    // Cong nghe
    {
        url: SOURCES.nhan_dan.url + "/khoahoc-congnghe",
        category: CATEGORIES.technology.id
    },
    // Kham pha Viet Nam
    {
        url: SOURCES.nhan_dan.url + "/tin-tuc-du-lich",
        category: CATEGORIES.vietnam_travel.id
    },
    // Kham pha the gioi
    {
        url: SOURCES.nhan_dan.url + "/cua-so-the-gioi",
        category: CATEGORIES.world_travel.id
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
            const thumbnail = $(el).find('.box-img a img').attr("data-src")
            const link = $(el).find('.box-img a').attr('href');
            const link1= SOURCES.nhan_dan.url + $(el).find('.box-img a').attr('href');
            const title = $(el).find('.box-img a').attr('title');
            if (thumbnail && link && title && (!thumbnail.includes('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA9JREFUeNpiuHHjBkCAAQAFFAKJ7S6GgQAAAABJRU5ErkJggg=='))) {
                axios.post("http://localhost:4000/api/v1/articles/crawl", {
                    thumbnail: thumbnail,
                    link: link1,
                    title: title,
                    releaseTime: Date.now(),
                    isShow: true,
                    category: CATEGORY_DETAILS[i].category,
                    source: SOURCES.nhan_dan.id,
                }).then((result) => {
                    if (result.data.success == true) {
                        console.log(result.data.data)
                    } else {
                        console.log(result.data.message)
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
