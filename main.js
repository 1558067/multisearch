"use strict";

let D = document,
  B = D.getElementsByTagName("body")[0];

function bmlPanel(id, w, h) {
  let P, F, H, X, DP, CL, x, y, ox, oy;
  B.appendChild((P = D.createElement("div")));
  P.id = id;
  P.style.cssText =
    " position:fixed; top:10px; left:50%; transform: translate(-50%);	padding:2px; width:90%; height:" +
    h +
    "px; opacity:1; 	filter:alpha(opacity = 80); background:#000; border:1px solid #666; color:#fff; font-size:12px; text-align:left; z-index:9998; -moz-border-radius:5px;";
  P.appendChild((H = D.createElement("div")));
  H.innerHTML = id;
  H.style.cssText =
    " padding:0px 10px; height:20px; line-height:20px; color:#fff; font-size:15px; font-weight:bold; text-align:center; ";
  DP = D.createElement("div");
  DP.style.cssText =
    "background:transparent; position:fixed; top:0px; left:0px; width:100%; height:100%;";
  P.appendChild((F = D.createElement("div")));
  F.style.heisht = h - 20 + "px";
  F.style.overflow = "auto";
  F.style.backgroundColor = "#222";
  F.style.color = "#eee";
  F.style.fontSize = "15px";
  F.style.cursor = "auto";
  P.appendChild((CL = D.createElement("div")));
  P.header = H;
  P.content = F;
  return P;
}
let t =
  "" +
  (window.getSelection ?
    window.getSelection() :
    document.getSelection ?
    document.getSelection() :
    document.selection.createRange().text);
if (!t) {
  let L = document.location.href;
  if (
    L.match(/(yahoo\.).+?.*p=([^&]+)/) ||
    L.match(/(amazon\.).+?.*field-keywords=([^&]+)/) ||
    L.match(/(\.wikipedia\.).+\/wiki\/([^\/]+)/) ||
    L.match(/(youtube\.).+search_query=([^&]+)/) ||
    L.match(/(\?.*\b)q=([^&]+)/) ||
    L.match(/(\#search\/)([^\/]+)/)
  )
    t = decodeURIComponent(RegExp.$2);
}
let Es = [
  [
    "T-Wave",
    "http://nt-wave.mx.toyota.co.jp/tmc/twsearch/Pages/results.aspx?k=%%",
  ],
  ["資料検索(Office365)", "https://www.office.com/search?auth=2&q=%%"],
  [
    "Outlook&Teams一括検索",
    "https://www.office.com/search/conversations?auth=2&q=%%",
  ],
  ["Teams", "https://teams.microsoft.com/_#/apps/search?q=%%"],
  [
    "SharePoint",
    "https://toyotajp.sharepoint.com.mcas.ms/_layouts/15/sharepoint.aspx?q=%%&v=search",
  ],
  [
    "OneDrive",
    "https://toyotajp-my.sharepoint.com/_layouts/15/onedrive.aspx?view=7&searchScope=all&q=%%",
  ],
  ["Yammer", "https://web.yammer.com/main/search/threads?search=%%"],
  [
    "従業員情報検索(Delve)",
    "https://jpn.delve.office.com/?q=%%&searchpage=1&searchview=people&v=search",
  ],
  ["社内Bing", "https://www.bing.com/work/search?q=%%"],
  ["Toyota Wiki", "http://toyotawiki.au.toyota.co.jp/wiki/index.php?search=%%"],
  [
    "社内動画",
    "https://web.microsoftstream.com/browse?q=%%&referrer=https:%2F%2Fpa-static-ms.azureedge.net%2F",
  ],
  [
    "トヨタITサービスマネジメント",
    "https://toyota1.service-now.com/sp?id=search&q=%%",
  ],
  [
    "Toyota Searcher(ページ遷移のみ)",
    "http://nt-wave.mx.toyota.co.jp/tmc/2/fssearch/Wiki/2_dounyu/UrlList.aspx",
  ],
  [
    "T-Binder(ページ遷移のみ)",
    "http://doc-lib17-tb.au.toyota.co.jp/TB5_Try/BinderLibrary/default.aspx",
  ],
  [
    "T-Click(ページ遷移のみ)",
    "https://t-click.kitora.toyota.co.jp/AgileWorks/SSO/picus.jsp",
  ],
  ["いらすとや", "https://www.irasutoya.com/search?q=%%"],
  ["Flickr", "http://www.flickr.com/search/?q=%%"],
  // ["Wikipedia", "http://ja.wikipedia.org/wiki/%%"],
  // ["英辞郎 ", "http://eow.alc.co.jp/%%/UTF-8/"],
  // ["Amazon", "http://www.amazon.co.jp/exec/obidos/external-search/?keyword=%%"],
  // ["Youtube", "http://jp.youtube.com/results?search_query=%%"],
];
let SP = bmlPanel("sp", 800);
SP.header.innerHTML = "まとめて検索くん";
let C = SP.content,
  qt,
  tc = [],
  td = [],
  i,
  sbm,
  tmp;
C.appendChild((qt = D.createElement("input")));
qt.value = t;
qt.placeholder =
  "ここに検索ワードを入力。検索したいサイトに☑し「検索」ボタン押下";
qt.style.cssText =
  " display:block; width:90%; 	margin:auto; margin-top:10px; margin-bottom:10px; border:1px solid #666; background:transparent; color:inherit; font-weight:bold; font-size:20px; ";
for (i = 0; i < Es.length; i++) {
  C.appendChild((tc[i] = D.createElement("input")));
  C.appendChild((td[i] = D.createElement("div")));
  C.appendChild((tmp = D.createElement("div")));
  //td[i].url = Es[i][1];
  tmp.style.cssText = "clear:both";
  tc[i].type = "checkbox";
  tc[i].name = i;
  tc[i].value = Es[i][1];
  tc[i].title = Es[i][0];
  tc[i].style.cssText =
    " float:left; clear:left; display:block; margin:5px 6px;";
  td[i].innerHTML = Es[i][0];
}
C.appendChild((sbm = D.createElement("button")));
sbm.innerHTML = "検索";
sbm.style.cssText =
  " cursor:pointer; margin:6px auto; display:block; clear:both; font-size:15px;";
sbm.onclick = function () {
  gtag("event", "検索ボタンクリック", {
    event_category: "button",
    event_label: "検索ボタンクリック",
    value: "0",
  });
  for (i = 0; i < tc.length; i++) {
    if (tc[i].checked) {
      gtag("event", tc[i].title, {
        event_category: "checkbox",
        event_label: tc[i].title,
        value: "0",
      });
      if (window.open(tc[i].value.replace(/%%/, qt.value), "_blank")) {} else {
        window.alert(
          "ポップアップブロックが設定されていますので、「常に許可」に変更してください"
        );
      }
    }
  }
};