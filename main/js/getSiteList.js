"use strict";

function getSiteList() {
  return [
    [
      "T-Wave",
      "http://nt-wave.mx.toyota.co.jp/tmc/twsearch/Pages/results.aspx?k=%%",
      "",
    ],
    [
      "資料検索（Office365）",
      "https://www.office.com/search?auth=2&q=%%",
      "Office365から各種ファイルを検索します",
    ],
    [
      "Outlook&Teams一括検索",
      "https://www.office.com/search/conversations?auth=2&q=%%",
      "OutlookとTeamsを横串で検索し、結果を表示します",
    ],
    [
      "Outlook&Teams一括検索 β",
      "https://www.bing.com/work/search?q=%%#Message-conversations",
      "より多くの結果が表示されますが、うまく動作しないケースがあります。動作しない場合は、再度実行して下さい",
    ],
    // [
    //   "OneDrive",
    //   "https://toyotajp-my.sharepoint.com.mcas.ms/_layouts/15/onedrive.aspx?q=%%&&view=7&searchScope=all",
    //   "",
    // ],
    [
      "OneNote",
      "https://www.office.com/search?auth=2&q=%%&refiners=%7B%22FileType%22:%5B%22one%22%5D%7D",
      "",
    ],
    [
      "SharePoint",
      "https://toyotajp.sharepoint.com.mcas.ms/_layouts/15/sharepoint.aspx?q=%%&v=search",
      "",
    ],
    [
      "Teams",
      "https://teams.microsoft.com/_#/apps/search?q=%%",
      "Teamsの制限により、検索結果を表示するにはTeams上の検索欄でEnterを押す必要があります",
    ],
    ["Yammer", "https://web.yammer.com/main/search/threads?search=%%", ""],
    [
      "従業員情報検索(Delve)",
      "https://jpn.delve.office.com/?q=%%&searchpage=1&searchview=people&v=search",
      "Delveを使用して、従業員情報を検索します",
    ],
    [
      "トヨタITサービスマネジメント",
      "https://toyota1.service-now.com/sp/?id=search&spa=1&q=%%",
      "",
    ],
    ["社内Bing", "https://www.bing.com/work/search?q=%%", ""],
    [
      "社内帳票検索（ページ遷移のみ）",
      "https://apps.powerapps.com/play/65452b86-5ef9-4672-8e45-6d454850aecb?tenantId=d1c1335e-f582-42a9-b6fe-5e1a16eb9bc8",
      "「みんなで育てる帳票検索」に遷移します。ページ遷移のみです。検索キーワードは別途入力が必要です",
    ],
    [
      "社内動画",
      "https://web.microsoftstream.com/browse?q=%%&referrer=https:%2F%2Fpa-static-ms.azureedge.net%2F",
      "",
    ],
    [
      "ToyotaSearcher（ページ遷移のみ）",
      "http://nt-wave.mx.toyota.co.jp/tmc/2/fssearch/Wiki/2_dounyu/UrlList.aspx",
      "ページ遷移のみです。検索キーワードは別途入力が必要です",
    ],
    [
      "Toyota Wiki",
      "http://toyotawiki.au.toyota.co.jp/wiki/index.php?search=%%",
      "",
    ],
    [
      "T-Click（ページ遷移のみ）",
      "https://t-click.kitora.toyota.co.jp/AgileWorks/Broker/PicusSSO.sso_login",
      "ページ遷移のみです。検索キーワードは別途入力が必要です",
    ],
    ["いらすとや", "https://www.irasutoya.com/search?q=%%", ""],
    ["Google 画像", "https://images.google.co.jp/images?q=%%", ""],
    ["Flickr", "https://www.flickr.com/search/?q=%%", ""],
    // ["Wikipedia", "http://ja.wikipedia.org/wiki/%%",""],
    // ["英辞郎 ", "http://eow.alc.co.jp/%%/UTF-8/",""],
    // ["Amazon", "http://www.amazon.co.jp/exec/obidos/external-search/?keyword=%%",""],
    // ["Youtube", "http://jp.youtube.com/results?search_query=%%",""],
  ];
}