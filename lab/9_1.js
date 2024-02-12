// Sample string
const inputString = "This is a test of the javascript regExp object";

// Regular expression pattern
const regexPattern = /\bt[a-z]+\b/g;

// Find matches and their positions
let matches = [];
let match;
while ((match = regexPattern.exec(inputString)) !== null) {
  matches.push({
    word: match[0],
    startIndex: match.index,
    endIndex: match.index + match[0].length - 1,
  });
}

// Output the matching words and their positions
matches.forEach((match) => {
  console.log(`Matched word: ${match.word}`);
  console.log(`Start Index: ${match.startIndex}, End Index: ${match.endIndex}`);
  console.log("---");
});
