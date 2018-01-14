# MMUPastYearDownloader

### Login

/login/:user/:pass `GET`

##### Param

`user` Username

`pass` Password

##### Result `json`

```json
{"token":"1eBFugTqqOtRyS4"}
```

### Search

/search/:token/:text `GET`

##### Param

`token` Token from successful login

`text`  Search text

##### Result `json`

```json
[{
    "fid": "35379",
    "title": "Computer Architecture And Organization - TSN 1101",
    "course": "Faculty of Engineering And Technology, Multimedia University",
    "trimester": "2",
    "year": "2012/2013"
}, {
    "fid": "36975",
    "title": "Computer Architecture And Organization - TSN 1101",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2013/2014"
}, {
    "fid": "38316",
    "title": "Computer Architecture And Organization - TSN 1101",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2014/2015"
}, {
    "fid": "40277",
    "title": "Computer Architecture And Organization - TSN 1101",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2015/ 2016"
}, {
    "fid": "41057",
    "title": "Computer Architecture And Organization - TSN 1101",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2016/2017"
}, {
    "fid": "38314",
    "title": "Computer Network - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2014/2015"
}, {
    "fid": "37774",
    "title": "Computer Networks - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2014/2015"
}, {
    "fid": "38263",
    "title": "Computer Networks - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2014/2015"
}, {
    "fid": "38915",
    "title": "Computer Networks - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2015/2016"
}, {
    "fid": "39944",
    "title": "Computer Networks - TSN 2201",
    "course": "Faculty Of Engineering, Multimedia University",
    "trimester": "2",
    "year": "2015/2016"
}, {
    "fid": "39948",
    "title": "Computer Networks - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2016/2017"
}, {
    "fid": "41121",
    "title": "Computer Networks - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2016/2017"
}, {
    "fid": "42101",
    "title": "COMPUTER NETWORKS - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2017/2018"
}, {
    "fid": "39857",
    "title": "Computer Networks - TSN 2201 / TCE 2321",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "3",
    "year": "2015/2016"
}, {
    "fid": "37658",
    "title": "Computer Security - TSN 3251",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2014/2015"
}, {
    "fid": "38004",
    "title": "Computer Security - TSN 3251",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2014/2015"
}, {
    "fid": "38611",
    "title": "Computer Security - TSN 3251",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2015/2016"
}, {
    "fid": "38663",
    "title": "Computer Security - TSN 3251",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2015/2016"
}, {
    "fid": "39780",
    "title": "Computer Security - TSN 3251",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2016/2017"
}, {
    "fid": "40294",
    "title": "Computer Security - TSN 3251 / TSC 2211",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2015/2016"
}, {
    "fid": "41125",
    "title": "COMPUTER SECURITY - TSN 3251 / TSC 2211",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "",
    "year": "2016/2017"
}, {
    "fid": "42193",
    "title": "Computer Security - TSN 3251/TSC 2211",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "1",
    "year": "2017/2018"
}, {
    "fid": "36479",
    "title": "DATA COMMUNICATIONS AND NETWORKING - TSN 2201",
    "course": "Faculty Of information Science And technology, Multimedia University",
    "trimester": "1",
    "year": "2013/2014"
}, {
    "fid": "36949",
    "title": "Data Communications And Networking - TSN 2201",
    "course": "Faculty of Computing And Informatics, Multimedia University",
    "trimester": "2",
    "year": "2013/2014"
}, {
    "fid": "37736",
    "title": "Operating Systems   -  TSN 2101/Operating Systems 1 - TOS 2111",
    "course": "Faculty Of information Science And technology, Multimedia University",
    "trimester": "1",
    "year": "2014/2015"
}]
```

### Download

/donwload/:token/:fid `GET`

##### Param

`token` Token from successful login

`fid`   FileID that you want to download

##### Result `pdf`

Just a file