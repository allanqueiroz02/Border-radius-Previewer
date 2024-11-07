"use strict";
const textSheet = document.querySelector(".borders");
const inputBorder = document.querySelector("#input-border");
const copyToClip = document.querySelector(".copy-clipboard");
textSheet?.addEventListener("click", (event) => {
    textSheet.innerText = "";
});
inputBorder.addEventListener("keydown", (event) => {
    // textSheet.style.borderRadius = event.key + "px";
    console.log(event);
});
copyToClip?.addEventListener("click", (event) => {
    const copyText = inputBorder.value || "";
    navigator.clipboard.writeText(copyText);
});
