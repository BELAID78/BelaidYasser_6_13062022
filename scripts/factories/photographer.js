function photographerFactory(data) {
    const { name, portrait, city, country, id, price, tagline } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const div = document.createElement('div');
        const h4 = document.createElement('h4');
        h4.textContent = city + ', ' + country;
        const p = document.createElement('p');
        p.textContent = tagline;
        const Price = document.createElement('p');
        pPrice.textContent = price + '€/jour';
        div.appendChild(h4);
        div.appendChild(p);
        div.appendChild(Price);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(div);
        return (article);
    }

    return { name, picture, getUserCardDOM }
}