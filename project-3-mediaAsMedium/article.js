const params = new URLSearchParams(window.location.search);
const articleIndex = params.get('index');

fetch('https://api.nytimes.com/svc/books/v3/reviews.json?author=Haruki%20Murakami&api-key=e5kqlQpYfI6InpMTOf7zVE81M5ztuRA6')
    .then(response => response.json()
    .then(data => {
        const article = data.results[articleIndex];
        const articleDetails = document.getElementById('articleDetails');
        articleDetails.innerHTML = `
            <h2>${article.book_author} "${article.book_title}"</h2>
            <p>Reviewer: ${article.byline}</p>
            <p>Publication date ${article.publication_dt}</p>
            <p>${article.summary}</p>
            <p>Full Content: <a href=${article.url}>Link to NY Times Review</a></p>
        `;
    }))
    .catch(error => {
        console.error('Error fetching article details:', error);
    });