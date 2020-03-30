import words from 'an-array-of-english-words' // https://www.npmjs.com/package/an-array-of-english-words

const vowels = ['a', 'e', 'i', 'o', 'u']

const flexicogs = words.reduce((list, word) => {
  word.split('').forEach((char, i) => {
    if (!vowels.includes(char)) return

    const isFlexicog = vowels.every(vowel => (
      words.includes(
        word.substr(0, i) + vowel + word.substr(i + 1)
      )
    ))
    if (isFlexicog) {
      list.push(word)
    }
  })
  return list
}, []).sort().sort((a, b) => b.length - a.length)

console.info('Got the answer!')
console.info(flexicogs)
