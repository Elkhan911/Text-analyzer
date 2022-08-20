// Variables of Task One
const textZone1 = document.querySelector("#_textZone1");
const span1 = document.querySelector("#_span1");
// Variables of Task Two
const textZone2 = document.querySelector("#_textZone2");
const span2 = document.querySelector("#_span2");
// Variables of Task Three
const textZone3 = document.querySelector("#_textZone3");
const span3 = document.querySelector("#_span3");

textZone1.addEventListener("blur", function () {
  let str = textZone1.value;
  let arr1 = str.split(" ");

  let i = 0;
  for (i = 0; i < arr1.length; i++) {}
  span1.textContent = i;
});

textZone2.addEventListener("blur", function () {
  let str = textZone2.value;
  let arr2 = str.split("");

  let i = 0;

  for (i = 0; i < arr2.length; i++) {}
  span2.textContent = i;
});

textZone3.addEventListener("blur", function () {
  let str = textZone3.value;
  let arr3 = str.split("");

  let k = 0;

  textZone3.addEventListener("keydown", function (event) {
    for (let i = 0; i, arr3.length; i++) {
      k++;
      if (event.key == "" || event.key == " ") {
        console.log("probel");
        k = k + 0;
      }
    }
  });

  span3.textContent = k;
});
