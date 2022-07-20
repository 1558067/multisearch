"use strict";

var userAgent = window.navigator.userAgent.toLowerCase();

if (userAgent.indexOf("msie") != -1 || userAgent.indexOf("trident") != -1) {
  window.alert(
    "IEでは動作しませんので、GoogleChorme もしくは MicrosoftEdge からアクセスしてください"
  );
}
