"use strict";

let D = document,
    B = D.getElementsByTagName('body')[0];

function bmlPanel(id, w, h) {
    let P, F, H, X, DP, CL, x, y, ox, oy;
    B.appendChild(P = D.createElement('div'));
    P.id = id;
    P.style.cssText = ' position:fixed; top:10px; left:50%; transform: translate(-50%);	padding:2px; width:' + w + 'px; height:' + h + 'px; opacity:1; 	filter:alpha(opacity = 80); background:#000; border:1px solid #666; color:#fff; font-size:12px; text-align:left; z-index:9998; -moz-border-radius:5px;';
    P.appendChild(H = D.createElement('div'));
    H.innerHTML = id;
    H.style.cssText = ' padding:0px 10px; height:20px; line-height:20px; color:#fff; font-size:15px; font-weight:bold; text-align:center; ';
    DP = D.createElement('div');
    DP.style.cssText = 'background:transparent; position:fixed; top:0px; left:0px; width:100%; height:100%;';
    P.appendChild(F = D.createElement('div'));
    F.style.heisht = h - 20 + 'px';
    F.style.overflow = 'auto';
    F.style.backgroundColor = '#222';
    F.style.color = '#eee';
    F.style.fontSize = '15px';
    F.style.cursor = 'auto';

    P.appendChild(CL = D.createElement('div'));

    // CL.title = 'close';
    // CL.style.border = '#444 solid 1px';
    // CL.style.position = 'absolute';
    // CL.style.top = "5px";
    // CL.style.left = "5px";
    // CL.style.height = '10px';
    // CL.style.width = '10px';
    // CL.style.cursor = 'pointer';

    // CL.onclick = function () {
    //     B.removeChild(this.parentNode);
    // };
    // H.onmousedown = function (e) {
    //     x = (e) ? e.pageX : event.x;
    //     y = (e) ? e.pageY : event.y;
    //     ox = x - P.offsetLeft;
    //     oy = y - P.offsetTop;
    //     P.appendChild(DP);
    //     return false;
    // };
    // DP.onmousemove = function (e) {
    //     x = (e) ? e.pageX : event.x;
    //     y = (e) ? e.pageY : event.y;
    //     P.style.left = (x - ox) + 'px';
    //     P.style.top = (y - oy) + 'px';
    //     return false;
    // };
    // DP.onmouseup = function () {
    //     P.removeChild(DP);
    //     return false;
    // };
    P.header = H;
    P.content = F;
    return P;
}
let t = '' + (window.getSelection ? window.getSelection() : document.getSelection ? document.getSelection() : document.selection.createRange().text);
if (!t) {
    let L = document.location.href;
    if (L.match(/(yahoo\.).+?.*p=([^&]+)/) || L.match(/(amazon\.).+?.*field-keywords=([^&]+)/) || L.match(/(\.wikipedia\.).+\/wiki\/([^\/]+)/) || L.match(/(youtube\.).+search_query=([^&]+)/) || L.match(/(\?.*\b)q=([^&]+)/) || L.match(/(\#search\/)([^\/]+)/)) t = decodeURIComponent(RegExp.$2);
}
let Es = [
    ['T-Wave', 'http://nt-wave.mx.toyota.co.jp/tmc/twsearch/Pages/results.aspx?k=%%'],
    ['従業員検索', 'https://jpn.delve.office.com/?q=%%&searchpage=1&searchview=people&v=search'],
    ['社内Bing', 'https://www.bing.com/work/search?q=%%'],
    ['Toyota Wiki', 'http://toyotawiki.au.toyota.co.jp/wiki/index.php?search=%%'],
    ['社内動画', 'https://web.microsoftstream.com/browse?q=%%&referrer=https:%2F%2Fpa-static-ms.azureedge.net%2F'],
    ['トヨタITサービスマネジメント', 'https://toyota1.service-now.com/sp?id=search&q=%%'],
    ['Office365', 'https://www.office.com/search?q=%%'],
    ['Teams', 'https://teams.microsoft.com/_#/apps/search?q=%%'],
    ['SharePoint', 'https://toyotajp.sharepoint.com.mcas.ms/_layouts/15/sharepoint.aspx?q=%%&v=search'],
    ['OneDrive', 'https://toyotajp-my.sharepoint.com/_layouts/15/onedrive.aspx?view=7&searchScope=all&q=%%'],
    ['Yammer', 'https://web.yammer.com/main/search/threads?search=%%'],
    ['Flickr', 'http://www.flickr.com/search/?q=%%'],
    ['Wikipedia', 'http://ja.wikipedia.org/wiki/%%'],
    ['英辞郎 ', 'http://eow.alc.co.jp/%%/UTF-8/'],
    ['Amazon', 'http://www.amazon.co.jp/exec/obidos/external-search/?keyword=%%'],
    ['Youtube', 'http://jp.youtube.com/results?search_query=%%']
];
let SP = bmlPanel('sp', 800);
SP.header.innerHTML = 'まとめて検索くん';
let C = SP.content,
    qt, tc = [],
    td = [],
    i, sbm, tmp;
C.appendChild(qt = D.createElement('input'));
qt.value = t;
qt.placeholder = "ここに検索ワードを入力。検索したいサイトに☑し「検索」ボタン押下";
qt.style.cssText = ' display:block; width:90%; 	margin:6px; border:1px solid #666; background:transparent; color:inherit; font-weight:bold; font-size:20px; ';
for (i = 0; i < Es.length; i++) {
    C.appendChild(tc[i] = D.createElement('input'));
    C.appendChild(td[i] = D.createElement('div'));
    C.appendChild(tmp = D.createElement('div'));
    //td[i].url = Es[i][1];
    tmp.style.cssText = 'clear:both';
    tc[i].type = 'checkbox';
    tc[i].name = i;
    tc[i].value = Es[i][1];
    tc[i].style.cssText = ' float:left; clear:left; display:block; margin:5px 6px;';
    // with(td[i]) {
    //     style.cssText = ' cursor:pointer;';
    //     onmouseover = function () {
    //         td[i].style.fontWeight = 'bold';
    //         td[i].style.color = '#ff8';
    //     };
    //     onmouseout = function () {
    //         td[i].style.fontWeight = 'inherit';
    //         td[i].style.color = 'inherit';
    //     };
    //     onclick = function () {
    //         open(this.url.replace(/%%/, qt.value), '_blank');
    //     };
    //     innerHTML = Es[i][0];
    // }
    td[i].innerHTML = Es[i][0];
}
C.appendChild(sbm = D.createElement('button'));
// with(sbm) {
//     innerHTML = '検索';
//     style.cssText = ' cursor:pointer; 		margin:6px auto; 		display:block; 		clear:both; font-size:15px;';
//     onclick = function () {
//         for (i = 0; i < tc.length; i++) {
//             if (tc[i].checked) {
//                 open(tc[i].value.replace(/%%/, qt.value), '_blank');
//             }
//         }
//     }
// }
sbm.innerHTML = '検索';
sbm.style.cssText = ' cursor:pointer; margin:6px auto; display:block; clear:both; font-size:15px;';
sbm.onclick = function () {
    for (i = 0; i < tc.length; i++) {
        if (tc[i].checked) {
            open(tc[i].value.replace(/%%/, qt.value), '_blank');
        }
    }
}