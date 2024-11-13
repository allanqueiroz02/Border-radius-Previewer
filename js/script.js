const textSheet = document.querySelector(".my-square");
const inputBorderRadius = document.querySelector(".input-border");
const copyToClip = document.querySelector(".copy-clipboard");
const toastr = document.querySelector(".warning-copied");
export const formatBorderRadiusText = (value) => `border-radius: ${value};`;
const handleKeyUpInput = () => {
    textSheet.style.borderRadius = inputBorderRadius.value;
    textSheet.style.transition = "border-radius 0.7s";
    textSheet.innerText = formatBorderRadiusText(inputBorderRadius.value);
};
const handleClickCopyBtn = () => {
    const copyText = formatBorderRadiusText(inputBorderRadius.value) || "";
    navigator.clipboard.writeText(copyText);
    toastr?.classList.add("show");
    setTimeout(() => {
        toastr?.classList.remove("show");
    }, 2500);
};
if (inputBorderRadius)
    inputBorderRadius.addEventListener("keyup", handleKeyUpInput);
if (copyToClip)
    copyToClip?.addEventListener("click", handleClickCopyBtn);
