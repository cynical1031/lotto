const request = require("request");
const cheerio = require("cheerio");
const iconv = require('iconv-lite');
const log = console.log;

module.exports.getHtml = async() => {

    let url = "https://dhlottery.co.kr/gameResult.do?method=byWin&wiselog=H_C_1_1";
    return new Promise((resolve, reject) => {
        request({
                url,
                encoding: null
            },
            function(error, response, body) {
                if (error) reject(error);
                if (response.statusCode != 200) {
                    reject('Invalid status code <' + response.statusCode + '>');
                }
                let data = new Object();
                let htmlDoc = new Buffer(body);
                let decoded = iconv.decode(htmlDoc, 'EUC-KR')
                const $ = cheerio.load(decoded);
                const $bodyList = $("div#article")
                data.idx = $bodyList.find('select#dwrNoList').val()

                let date = $bodyList.find('div.win_result').find('p.desc').text().split('(')[1].split(')')[0].split(' ')
                let formatting = ""
                date.forEach((el, i) => {
                    if (i == 3) {
                        return;
                    }
                    if (i == 2) {
                        formatting += el.substring(0, el.length - 1)
                    } else {
                        formatting += el.substring(0, el.length - 1) + "-"
                    }
                })
                data.date = formatting
                let $winTable = $bodyList.find('table.tbl_data tbody tr')
                    //log($winTable)
                $winTable.each((i, el) => {
                        console.log($(this).children().innerHTML)
                    })
                    //data.first =
                resolve(data);
            })

    });
};