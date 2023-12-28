const productCardsContainer = document.getElementById('product-cards-container');

fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    data.forEach(product => {
      const productCard = document.createElement('div');
      productCard.classList.add('product-card');

      productCard.innerHTML = `
        <div class="product-tumb">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-details">
          <span class="product-catagory">${product.category}</span>
          <h4><a href="#">${product.title}</a></h4>
          <p>${product.description}</p>
          <div class="product-bottom-details">
            <div class="product-price"><small>Rs.${product.price}</small></div>
            <div class="product-links">
              <a href="#"><i class="fa fa-heart"></i></a>
              <a href="#"><i class="fa fa-shopping-cart"></i></a>
            </div>
          </div>
        </div>
      `;

      productCardsContainer.appendChild(productCard);
    });
  })


  
  .catch(error => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Failed to access product data. Please try again later.';
    productCardsContainer.appendChild(errorMessage);
    console.error('Error fetching product data:', error);
  });



function filterProducts(searchTerm) {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
      const category = card.querySelector('.product-catagory').textContent.toLowerCase();
      if (category.includes(searchTerm.toLowerCase())) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }
  
 
  document.querySelector('.navbar-search input').addEventListener('input', function (event) {
    const searchTerm = event.target.value.trim();
    filterProducts(searchTerm);
  });