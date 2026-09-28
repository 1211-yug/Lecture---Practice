"use strict";
const quoteList = {
    title: "My Quote",
    totalQuotes: 0,
    quotes: [
        {
            id: 1,
            text: "A day without sunshine is like, you know, night.",
            author: "Steve Martin",
            likes: 134905,
            isFavorite: true
        },
        {
            id: 2,
            text: "Be the change that you wish to see in the world.",
            author: "Mahatma Gandhi",
            likes: 114732,
            isFavorite: true
        },
        {
            id: 3,
            text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
            author: "Albert Einstein",
            likes: 149029,
            isFavorite: false
        },
        {
            id: 4,
            text: "So many books, so little time.",
            author: "Frank Zappa",
            likes: 152605,
            isFavorite: true
        },
        {
            id: 5,
            text: "Be yourself; everyone else is already taken..",
            author: "Oscar Wilde",
            likes: 178491,
            isFavorite: false
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
