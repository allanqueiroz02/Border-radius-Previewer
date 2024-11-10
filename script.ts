const textSheet = document.querySelector(".my-square") as HTMLElement;
const inputBorderRadius = document.querySelector(
  ".input-border"
) as HTMLInputElement;
const copyToClip = document.querySelector(".copy-clipboard");

inputBorderRadius.addEventListener("keyup", (event) => {
  textSheet.style.borderRadius = inputBorderRadius.value;
  textSheet.style.transition = "border-radius 0.7s";
  textSheet.innerText = `border-radius: ${inputBorderRadius.value}`;
});

copyToClip?.addEventListener("click", (event) => {
  const copyText = `border-radius: ${inputBorderRadius.value}` || "";
  navigator.clipboard.writeText(copyText);
});
