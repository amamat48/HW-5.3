let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1

  const h1El = document.querySelector('#main-title')
  h1El.textContent = "Hi! I'm Dom"

  // Part 2

  const bodyEl = document.querySelector("body")
  bodyEl.style.backgroundColor = 'white'

  // Part 3

  let favThings = document.querySelector("#favorite-things")
  let lastChildUl = favThings.lastElementChild
  favThings.removeChild(lastChildUl)

  // Part 4

  let specialTitle = document.querySelector(".special-title")

  for (let i = 0; i < specialTitle.length; i++) {
    specialTitle.style.fontSize = '2rem'
  }

  // Part 5

  let pastRaces = document.querySelector('#past-races')
  for (let i = 0; i < pastRaces.children.length; i++) {
    if (pastRaces.children[i].textContent === 'Chicago') {
      pastRaces.removeChild(pastRaces.children[i])
    }
  }
  // Part 6
  let liEl = document.createElement('li')
  liEl.textContent = 'Cincinnati'
  pastRaces.appendChild(liEl)


  // Part 7

  let newDiv = document.createElement('div')
  let newH2 = document.createElement('h2')
  let newP = document.createElement('p')
  let main = document.querySelector('.main')
  newDiv.classList.add('blog-post')
  newDiv.classList.add('purple')
  newH2.textContent = 'Cincinnati'
  newP.textContent = 'I love this city'
  newDiv.appendChild(newH2)
  newDiv.appendChild(newP)
  main.appendChild(newDiv)


  // Part 8

  const quoteTitle = document.querySelector('#quote-title')

  quoteTitle.addEventListener('click', function() {
  randomQuote()
});

  // Part 9

  const blogPosts = document.querySelectorAll('.blog-post')

blogPosts.forEach((blogPost) => {
  blogPost.addEventListener('mouseout', () => {
    blogPost.classList.toggle('purple');
  })

  blogPost.addEventListener('mouseenter', () => {
    blogPost.classList.toggle('red');
  })
})


})
