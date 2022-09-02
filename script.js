// Variables of Task One
const textZone1 = document.querySelector("#_textZone1");
const span1 = document.querySelector("#_span1");
// Variables of Task Two
const textZone2 = document.querySelector("#_textZone2");
const span2 = document.querySelector("#_span2");
// Variables of Task Three
const textZone3 = document.querySelector("#_textZone3");
const span3 = document.querySelector("#_span3");

textZone1.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    let str1 = textZone1.value;
    let arr1 = str1.split(" ");
    console.log(arr1);

    let wordCounter1 = 0;

    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] !== "" && arr1[i] !== "\n") {
        console.log(arr1[i]);
        wordCounter1++;
      }
    }
    span1.textContent = wordCounter1;
  }
});

textZone2.addEventListener("input", function () {
  let str2 = textZone2.value;
  let arr2 = str2.split("");

  let wordCounter2 = 0;

  for (i = 0; i < arr2.length; i++) {
    wordCounter2++;
    span2.textContent = wordCounter2;
  }
});

textZone3.addEventListener("input", function () {
  let str3 = textZone3.value;
  let arr3 = str3.split("");

  let wordCounter3 = 0;

  for (i = 0; i < arr3.length; i++) {
    if (arr3[i] !== " ") {
      wordCounter3++;
      span3.textContent = wordCounter3;
    }
  }
});
