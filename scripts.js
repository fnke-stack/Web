document.addEventListener('DOMContentLoaded', function() {
    const productList = document.querySelector('.product-list');
    const gameModal = document.getElementById('gameModal');
    const closeModal = document.querySelector('.close');
    const sizeGameForm = document.getElementById('sizeGameForm');
    const gameResult = document.getElementById('gameResult');

    if (productList) {
        const products = [
            {
                id: 1,
                name: 'Trendy Jacket',
                image: 'jacket.jpg',
                price: '$49.99',
            },
            {
                id: 2,
                name: 'Stylish Dress',
                image: 'dress.jpg',
                price: '$39.99',
            },
            {
                id: 3,
                name: 'Casual Shirt',
                image: 'shirt.jpg',
                price: '$29.99',
            },
        ];

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <a href="product.html?id=${product.id}" class="cta">View Details</a>
            `;

            productList.appendChild(productCard);
        });
    }

    // Show the game modal when the page loads
    if (gameModal) {
        gameModal.style.display = 'block';

        closeModal.onclick = function() {
            gameModal.style.display = 'none';
        }

        window.onclick = function(event) {
            if (event.target == gameModal) {
                gameModal.style.display = 'none';
            }
        }

        sizeGameForm.onsubmit = function(event) {
            event.preventDefault();

            const size = document.getElementById('size').value;
            const skinTone = document.getElementById('skinTone').value;
            const occasion = document.getElementById('occasion').value;

            let recommendation = '';

            if (size === 'us') {
                recommendation += 'Your US size is perfect for our collection. ';
            } else {
                recommendation += 'Your UK size is perfect for our collection. ';
            }

            if (skinTone === 'light') {
                recommendation += 'We recommend light and pastel colors for your skin tone. ';
            } else if (skinTone === 'medium') {
                recommendation += 'We recommend warm and neutral colors for your skin tone. ';
            } else {
                recommendation += 'We recommend bold and vibrant colors for your skin tone. ';
            }

            if (occasion === 'casual') {
                recommendation += 'For a casual occasion, we suggest comfortable and stylish outfits.';
            } else if (occasion === 'formal') {
                recommendation += 'For a formal occasion, we suggest elegant and sophisticated outfits.';
            } else {
                recommendation += 'For a party, we suggest trendy and eye-catching outfits.';
            }

            gameResult.innerHTML = `<p>${recommendation}</p>`;
        }
    }
});