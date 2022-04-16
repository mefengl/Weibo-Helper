// ==UserScript==
// @name         🦁微博助手
// @namespace    https://github.com/mefengl
// @version      0.9.11
// @description  功能1️⃣：微博风暴；
// @author       mefengl
// @match        https://weibo.com/u/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=weibo.com
// @grant        none
// ==/UserScript==

(function () {
  "use strict";
  window.addEventListener("load", function () {
    this.setInterval(() => {
      isInputMode() ? null : sendButton().click();
    }, 3000);
  });
})();

function isInputMode() {
  return !!document.body.getElementsByClassName("wbpro-layer")[0];
}

function sendButton() {
  const buttons = document.body.getElementsByTagName("button");
  const sendButton = (() => {
    for (const button of buttons) {
      if (button.title == "发微博") {
        return button;
      }
    }
  })();
  return sendButton;
}
