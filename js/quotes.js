const quotes = [
    {
        quote: "Always do your best. What you plant now. you will harvest later.",
        author: "Og Mandino"
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you want to be happy, do not dwell in the past, do not worry about the future, focus on living fully in the present.",
        author: "Roy T. Bennett"
    },
    {
        quote: "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
        author: "Roy T. Bennett"
    },
    {
        quote: "Don't waste your time with explanations: people only hear what they want to hear.",
        author: "Paulo Coelho"
    },
    {
        quote: "Yesterday is gone. Tomorrow has not yet come. We have only today. Let us begin.",
        author: "Mother Theresa"
    },
    {
        quote: "Don't spend time beating on a wall, hoping to transform it into a door.",
        author: "Coco Chanel"
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "Always be fearless. Walk like lion, talk like pigeons, live like elephants and love like an infant child.",
        author: "Santosh Kalwar"
    }
]

const quoteParent = document.querySelector("#quote");
const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = "\“" + todaysQuote.quote + "\”";
author.innerText = todaysQuote.author;

function mouseOver(event) {
    author.classList.remove("hidden");
}
function mouseLeave(event) {
    author.classList.add("hidden");
}

quoteParent.addEventListener("mouseover", mouseOver);
quoteParent.addEventListener("mouseleave", mouseLeave);