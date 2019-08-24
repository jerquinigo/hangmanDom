document.addEventListener("DOMContentLoaded", () => {
  let mainDiv = document.getElementById("mainDisplay");

  let words = ["able", "about", "account"];
  let counter = 5;
  let underScore = [];
  let gameWord = [];
  let rightLetters = [];
  displayBlanks = words => {
    let wordGenerator = words[Math.floor(Math.random() * words.length)];
    console.log(wordGenerator);
    gameWord = wordGenerator.split("");
    console.log(gameWord, "word");
    for (let i = 0; i < wordGenerator.length; i++) {
      underScore.push("_");
      // console.log(underScore);
    }
    return underScore;
  };

  let displayWord = () => {
    document.addEventListener("keypress", event => {
      let keyCode = event.keyCode;
      let keyWord = String.fromCharCode(keyCode);
      // console.log(keyWord);
      // console.log(gameWord.indexOf(keyWord) > -1);
      if (gameWord.indexOf(keyWord) > -1) {
        rightLetters.push(keyWord);

        underScore[gameWord.indexOf(keyWord)] = keyWord;
        mainDiv.innerHTML = underScore.join(" ");
        console.log(underScore);
      } else {
        counter--;
      }
      console.log(counter);
    });
  };

  displayBlanks(words);
  displayWord();
});

// document.addEventListener("keypress", event => {
//   let keyCode = event.keyCode;
//   let keyWord = String.fromCharCode(keyCode);
//   console.log(keyWord);
// });
