const sentence = "Saya sangat senang mengerjakan soal algoritma";

// get the longest word in the sentence
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord + " : " + longestWord.length + " karakter";
}

console.log(longestWord(sentence));
