console.log("Carregou script");

const textSheet = document.querySelector(".borders");
const copyToClip = document.querySelector(".copy-clipboard");

if (copyToClip)
  copyToClip.addEventListener("click", (event) => {
    const copyText = textSheet?.textContent || "";
    navigator.clipboard.writeText(copyText);
    alert("Copiou legal dog");
  });
