// DOM navigation -- navigating the structure of an HTML using JS

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

const el = document.getElementById("vegetable");
const f = el.firstElementChild;
f.style.backgroundColor = "red";

const el1 = document.getElementById("fruits");
const f1 = el1.firstElementChild;
f1.style.backgroundColor = "red";

const el2 = document.getElementById("vegetable");
const f2 = el2.firstElementChild;
f2.style.backgroundColor = "red";