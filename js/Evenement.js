const img = document.querySelector(".art1");
const txt = document.querySelector(".container");
img.addEventListener("click", function () {
  if (txt.style.display == "none") {
    txt.style.display = "block";
  } else {
    txt.style.display = "none";
  }
});

const imgsc = document.querySelector(".art2");
const txtsc = document.querySelector(".container2");
imgsc.addEventListener("click", function() {
  if (txtsc.style.display == "none") {
    txtsc.style.display = "block";
  }
  else {
    txtsc.style.display = "none";
  }
} )
