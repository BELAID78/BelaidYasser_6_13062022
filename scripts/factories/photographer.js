function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.onclick = function() {
            location.href = 'photographer.html?id=' + id
        };

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        h2.onclick = function() {
            location.href = 'photographer.html?id=' + id
        };

        const div = document.createElement('div');
        div.classList.add('photographer_paragraph'); 

        const h4 = document.createElement('h4');
        h4.textContent = city + ', ' + country;

        const p = document.createElement('p');
        p.textContent = tagline;

        const pPrice = document.createElement('p');
        pPrice.textContent = price + '€/jour';
        pPrice.classList.add('price')

        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(pPrice);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(div);

        

        return (article);
    }

    return { name, picture, getUserCardDOM }
}