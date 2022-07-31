// ローカルストレージに保存
let saveStorage = function () {
  let key = document.getElementById("key").value;
  let value = document.getElementById("value").value;
  if (key && value) {
    localStorage.setItem(key, value);
  }
  key = "";
  value = "";
  viewStorage();
};

// 特定のキーと値を削除
let removeStorage = function (key) {
  //var key = document.getElementById("key").value;
  localStorage.removeItem(key);
  key = "";
  viewStorage();
};

// 全てのキーと値を削除
let clearStorage = function () {
  localStorage.clear();
  viewStorage();
};
