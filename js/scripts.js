var pigLatin = function(word) {
  // var firstLetter = word[0];
  var vowelArray = ["a", "e", "i", "o", "u"];
  var consonantArray = [];

  var letterArray = word.split("")
  for(var index = 0; index <= letterArray.length; index += 1) {
    var letter = letterArray[index];
    if ((letter === "q") && (letterArray[index + 1] === "u")) {
      consonantArray.push(letter);
      consonantArray.push(letterArray[index + 1]);
      index += 1;
    } else if (vowelArray.indexOf(letter) === -1) {
      consonantArray.push(letter);
    } else {
      break
    };

  };
  var newWord = word.slice(consonantArray.length);
  var sendToEnd = consonantArray.join("");
  var piggy = newWord.concat(sendToEnd).concat("ay");

  return piggy;
};
