"use strict";

const Doc = document,
  body = Doc.getElementsByTagName("body")[0];
function mainPanel(id) {
  let panel, sitesListArea, headerName;
  body.appendChild((panel = Doc.createElement("div")));
  panel.id = id;
  panel.appendChild((headerName = Doc.createElement("div")));
  panel.appendChild((sitesListArea = Doc.createElement("div")));
  sitesListArea.id = "sitesListArea";
  panel.appendChild(Doc.createElement("div"));
  panel.header = headerName;
  panel.content = sitesListArea;
  return panel;
}

let t =
  "" +
  (window.getSelection
    ? window.getSelection()
    : document.getSelection
    ? document.getSelection()
    : document.selection.createRange().text);
if (!t) {
  let L = document.location.href;
  if (
    L.match(/(yahoo\.).+?.*panel=([^&]+)/) ||
    L.match(/(amazon\.).+?.*field-keywords=([^&]+)/) ||
    L.match(/(\.wikipedia\.).+\/wiki\/([^\/]+)/) ||
    L.match(/(youtube\.).+search_query=([^&]+)/) ||
    L.match(/(\?.*\body)q=([^&]+)/) ||
    L.match(/(\#search\/)([^\/]+)/)
  )
    t = decodeURIComponent(RegExp.$2);
}

let sitesArray = getSiteList();

let main = mainPanel("main");
let mainContent = main.content,
  inputArea,
  checkInput = [],
  sitesTitle = [],
  i,
  searchButton,
  form,
  checkbox;
mainContent.appendChild((form = Doc.createElement("form")));
form.className = "d-flex";
form.appendChild((inputArea = Doc.createElement("input")));
inputArea.className = "form-control me-2";
inputArea.value = t;
inputArea.placeholder =
  "ここに検索ワードを入力。検索したいサイトに☑し「検索」ボタン押下";
inputArea.id = "inputArea";
inputArea.type = "search";
form.appendChild((searchButton = Doc.createElement("button")));
searchButton.id = "searchBottun";
searchButton.type = "button";
searchButton.className = "btn btn-primary text-nowrap";
searchButton.innerHTML = "検索";
searchButton.onclick = function () {
  gtag("event", "検索ボタンクリック", {
    event_category: "button",
    event_label: "検索ボタンクリック",
    value: "0",
  });
  for (i = 0; i < checkInput.length; i++) {
    if (checkInput[i].checked) {
      gtag("event", checkInput[i].title, {
        event_category: "checkbox",
        event_label: checkInput[i].title,
        value: "0",
      });
      if (
        window.open(
          checkInput[i].value.replace(/%%/, inputArea.value),
          "_blank"
        )
      ) {
      } else {
        window.alert(
          "ポップアップブロックが設定されていますので、「常に許可」に変更してください"
        );
        break;
      }
    }
  }
};
for (i = 0; i < sitesArray.length; i++) {
  mainContent.appendChild((checkbox = Doc.createElement("div")));
  checkbox.className = "checkbox-inline";
  checkbox.appendChild((checkInput[i] = Doc.createElement("input")));
  checkbox.appendChild((sitesTitle[i] = Doc.createElement("label")));
  //sitesTitle[i].url = sitesArray[i][1];
  checkInput[i].className = "form-check-input mt-0";
  checkInput[i].type = "checkbox";
  checkInput[i].name = i;
  checkInput[i].value = sitesArray[i][1];
  checkInput[i].title = sitesArray[i][0];
  checkInput[i].id = "siteList";
  sitesTitle[i].innerHTML = sitesArray[i][0];
  sitesTitle[i].htmlFor = "siteList";
  sitesTitle[i].className = "form-check-label";
}
