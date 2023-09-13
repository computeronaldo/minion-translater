// Exercise - 1
// const userName = prompt("What is your name?");

// alert(`Welcome to Minion translater ${userName}`);

// Exercise - 2
// const btn = document.querySelector("button");

// console.log(btn);

// btn.addEventListener("click", () => {
//   console.log("Button Clicked");
// });

// Exercise - 3
// const textBox = document.querySelector("textarea");

// console.log(textBox);

// textBox.addEventListener("input", (e) => {
//   console.log(e.target.value);
// });

// const inputEl = document.querySelector('input[name="translator"]');
// console.log(inputEl);

// const btn = document.querySelector("button");
// const textEl = document.querySelector("textarea");

// btn.addEventListener("click", () => {
//   console.log(textEl.value);
// });

// Exercise - 5
// const btn = document.querySelector("button");
// const outputDiv1 = document.querySelector("div");

// btn.addEventListener("click", () => {
//   outputDiv1.innerText =
//     "Button click event resulted in setting this inner text";
// });

const inputText = document.querySelector(".input-text");
const submitBtn = document.querySelector(".translate");
const outputCont = document.querySelector(".output");

const url = "https://google-translate1.p.rapidapi.com/language/translate/v2";

const submitHandler = async () => {
  const encodedText = encodeURI(inputText.value);

  try {
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": "ae4018746fmshdba8b95361b1d17p16756bjsn2f05ba5ea3b0",
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: new URLSearchParams({
        q: encodedText,
        target: "es",
        source: "en",
      }),
    };

    const response = await fetch(url, options);

    if (!response.ok) {
      alert("Something went wrong");
      inputText.value = "";
      throw new Error("Something went wrong");
    }

    const result = await response.text();
    const translatedText = decodeURIComponent(
      JSON.parse(result).data.translations[0].translatedText
    );

    outputCont.innerHTML = translatedText;
  } catch (err) {
    console.log(err);
  }
};

submitBtn.addEventListener("click", submitHandler);
