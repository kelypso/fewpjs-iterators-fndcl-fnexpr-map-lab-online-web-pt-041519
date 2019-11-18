const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (str) {
    // Split str into individual words
    let words = str.split(' ')
    // Capitalize each word
    let capitalize = words.map(w => w.charAt(0).toUpperCase() + w.slice(1))
    // Return capitalized words to str
    return capitalize.join(' ')
  })
}
