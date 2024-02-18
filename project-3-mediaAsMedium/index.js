// let promise = fetch("https://api.nytimes.com/svc/books/v3/reviews.json", [options]);

fetch("https://api.nytimes.com/svc/books/v3/reviews.json?author=Haruki%20Murakami&api-key=e5kqlQpYfI6InpMTOf7zVE81M5ztuRA6")
.then(response=>response.json()
.then((data)=>{
    const reviewsList = document.getElementById('reviews');
    const articlesHTML = data.results.map((article, index) => `
    <div class="article" data-index="${index}">
        <h2>${article.book_title}</h2>
        <p>Reviewed by ${article.byline}</p>
        <p>${article.summary}</p>
        <button class="btn btn-sm btn-outline-primary">Book Reviews</button>
        <button class="btn btn-sm btn-outline-secondary">1 min read</button>
        <button class="btn btn-sm btn-outline-secondary">Selected for you</button>
    </div>
`).join('');
    reviewsList.innerHTML = articlesHTML;

    const articleElements = reviewsList.querySelectorAll('.article');
    articleElements.forEach(articleElement => {
        articleElement.addEventListener('click', () => {
            const articleIndex = articleElement.getAttribute('data-index');
            window.location.href = `article.html?index=${articleIndex}`;;
        });
    });
}))
.catch(error => {
    console.error('Error fetching data:', error);
})
