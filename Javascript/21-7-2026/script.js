"use strict";
const quoteList = {
    title: "My Quote",
    totalQuotes: 0,
    quotes: [
        {
            id: 1,
            text: "A day without sunshine is like, you know, night.",
            author: "Steve Martin",
            likes: 1305,
            isFavorite: true
        },
        {
            id: 2,
            text: "Be the change that you wish to see in the world.",
            author: "Mahatma Gandhi",
            likes: 1132,
            isFavorite: true
        },
        {
            id: 3,
            text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            author: "Albert Einstein",
            likes: 1499,
            isFavorite: false
        },
        {
            id: 4,
            text: "So many books, so little time.",
            author: "Frank Zappa",
            likes: 1605,
            isFavorite: true
        },
        {
            id: 5,
            text: "Be yourself; everyone else is already taken..",
            author: "Oscar Wilde",
            likes: 1791,
            isFavorite: false
        },
        {
            id: 6,
            text: "Try not to become a man of success. Rather become a man of value.",
            author: "Albert Einstein",
            likes: 1343,
            isFavorite: true
        }
    ]
};
quoteList.totalQuotes = quoteList.quotes.length;
console.log(quoteList.totalQuotes);
for (let i = 0; i < quoteList.quotes.length; i++) {
    const quote = quoteList.quotes[i];
    console.log(`ID : ${quote.id}`);
    console.log(`Quote : ${quote.text}`);
    console.log(`Author : ${quote.author}`);
}
quoteList.quotes.forEach((quote, index) => {
    console.log(`${index + 1}. ${quote.author}`);
});
// author Quotes
const ath = quoteList.quotes.filter((q) => q.author === "Albert Einstein");
const like = ath.filter((q) => q.likes > 1400);
console.log(like);
// add new quote
const newQuote = {
    id: quoteList.quotes.length + 1,
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
    likes: 1500,
    isFavorite: true
};
// push to array
quoteList.quotes.push(newQuote);
// update total count
quoteList.totalQuotes = quoteList.quotes.length;
console.log("Updated Total Quotes:", quoteList.totalQuotes);
console.log(quoteList.quotes);
