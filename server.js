const rp      = require('request-promise')
const express = require('express')
const fs      = require('fs')

const app  = express()
const port = process.env.port || 3000

app.get('/login/:user/:pass', (req, res) => 
    login(req.params.user, req.params.pass, function(data) {
        res.json(data)
    })
)

app.get('/search/:token/:text', (req, res) => 
    search(req.params.token, req.params.text, function(data) {
        res.json(data)
    })
)

app.get('/download/:token/:fid', (req, res) => 
    download(req.params.token, req.params.fid, function(data) {
        if(data.success) {
            res.setHeader('Content-Disposition', `attachment; filename=${data.fid}.pdf`);
            res.contentType("application/pdf")
            res.send(data.body)
        } else {
            res.send('ggwp')
        }
        
    })
)

app.use(express.static('public'))

app.listen(port, () => console.log('server started!'))

async function login(user, pass, cb) {
    const url = 'https://proxyvlib.mmu.edu.my/login'
    var cookiejar = rp.jar();
    var options = {
        jar: cookiejar,
        method: 'POST',
        uri: url,
        form: {
            pass: pass,
            user: user,
            //submit: 'login',
            //url : '^U'
        },
        resolveWithFullResponse: true,
        simple: false
        //json: true
    }
    await rp(options)
        .then(function(res) {
            //console.log(res.statusCode)
            if(res.statusCode != 302) return cb({err: true})

            var cookie = res.headers['set-cookie']
            var json = {}
            json.token = cookie[0].split(/[=;]/)[1]
            cb(json)
        })
}

async function download(token, fid, cb) {
    const url = `http://vlibcm.mmu.edu.my.proxyvlib.mmu.edu.my//xzamp/gxzam.php?action=${fid}.pdf`
    var cookiejar = rp.jar();
    cookiejar.setCookie(`ezproxy=${token};`, url)
    var options = {
        headers: {
            'Referer': 'http://vlibcm.mmu.edu.my.proxyvlib.mmu.edu.my/library2/diglib/exam_col/tvalidate.php'
        },
        jar: cookiejar,
        method: 'POST',
        uri: url,
        resolveWithFullResponse: true,
        simple: false,
        encoding: null
        //json: true
    };
    await rp(options)
    .then(function(res) {
        var data = []
        if(res.statusCode != 200) {
            data.success = false
        } else {
            data.success = true
            data.fid = fid
            data.body = res.body 
        }
        cb(data)
    })  
}

async function search(token, text, cb) {
    const url = `http://library.mmu.edu.my.proxyvlib.mmu.edu.my/library2/diglib/exam_col/resindex.php?df1=title&rt=${text}&ph1=%25&df3=title&std=ASC&Search=Search`
    var cookiejar = rp.jar();
    cookiejar.setCookie(`ezproxy=${token};`, url)
    var options = {
        jar: cookiejar,
        method: 'GET',
        uri: url,
    };
    await rp(options)
        .then(function(html) {
            //cb(html)
            console.log(html)

            if(html.includes('XXXXX')) return cb({err: true})
            var regex = /id=(.*)" (?:.*)details">(.*)<(?:.*)<b>(.*)<(?:.*)<i>(.*)<(?:.*)\((.*)\)/g
            var matches = [];
            var match = regex.exec(html)
            while (match != null) {
                //console.log(match)
                matches.push({
                    fid: match[1],
                    title: match[2],
                    course: match[3],
                    trimester: match[4].split(' ')[1],
                    year: match[5]
                })
                match = regex.exec(html)
            }
            cb(matches)
        })
}

