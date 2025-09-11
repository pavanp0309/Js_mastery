let Quotes = [
  {
    quote: "It does not do to dwell on dreams and forget to live.",
    author: "J.K. Rowling",
  },
  {
    quote: "Everything you can imagine is real..",
    author: "Pablo Picasso",
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself..",
    author: "George Bernard Shaw",
  },
  {
    quote: "I'm not afraid of death; I just don't want to be there when it happens.",
    author: "Woody Allen",
  },
  {
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving",
    author: "Albert Einstein",
  },
  {
    quote: "Reality continues to ruin my life.",
    author: "Albert Einstein",
  },
  {
    quote: "Things change. And friends leave. Life doesn't stop for anybody.",
    author: "Stephen Chbosky",
  },
];




function GenerateQuote(){
let indexval=Math.floor(Math.random()*10)
document.querySelector(".quote").textContent=Quotes[indexval].quote
document.querySelector(".author").textContent=Quotes[indexval].author
}