// ローカルストレージのデータを表に出力
let viewStorage = function () {
  let tb = document.getElementById("tb");
  // テーブルの初期化
  while (tb.firstChild) {
    tb.removeChild(tb.firstChild);
  }
};

window.onload = function () {
  viewStorage();
};

// 保存ボタンが押されたら実行
document.getElementById("save").onclick = function () {
  saveStorage();
};

// 削除ボタンが押されたら実行
document.getElementById("clear").onclick = function () {
  clearStorage();
};
