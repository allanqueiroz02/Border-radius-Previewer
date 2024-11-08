"use strict";
const textSheet = document.querySelector(".my-square");
const inputBorderRadius = document.querySelector(".input-border");
const copyToClip = document.querySelector(".copy-clipboard");
inputBorderRadius.addEventListener("keyup", (event) => {
    textSheet.style.borderRadius = inputBorderRadius.value;
    textSheet.style.transition = 'border-radius 0.7s';
});
copyToClip?.addEventListener("click", (event) => {
    const copyText = inputBorderRadius.value || "";
    navigator.clipboard.writeText(copyText);
});
