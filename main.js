words = [
  "MOM",
  "DAD",
  "ELLIE",
  "LUCY",
  "BENNY",
  "I",
  "ME",
  "YOU",
  "DOG",
  "CAT",
  "GO",
  "IT",
  "ON",
  "WE",
  "AND",
  "NO",
  "MY",
  "HE",
  "SHE",
]

function getWord() {
  let randomNum = Math.floor(Math.random() * words.length)
  const h2 = document.querySelector("h2")
  let oldWord = h2.innerText
  let newWord = words[randomNum]
  oldWord === newWord ? getWord() : (h2.innerText = newWord)
}
