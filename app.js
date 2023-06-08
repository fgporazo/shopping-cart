/** ADD */
const addToCart = document.querySelectorAll('.add-to-cart');
for (var i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}
function addToCartClicked (e) {
    button = e.target;

    var cartItem = this.parentElement;
  
   
    // CEHCK IF ADDED ALREADY
    var imageSrc    = cartItem.getElementsByClassName('product-image')[0].src;
    var cartImage   = document.getElementsByClassName('cart-image');
    for (var i = 0; i < cartImage.length; i++){
        if (cartImage[i].src == imageSrc){
            alert ('This item has already been added to the cart')
            return;
        }
    }
    
    var price = cartItem.getElementsByClassName('product-price')[0].innerText;
    var cartRowItems = `
    <div class="product-row">
            <img class="cart-image" src="${imageSrc}" alt="">
            <span class ="cart-price">${price}</span>
            <input class="product-quantity" type="number" value="1">
            <i class="fa fa-trash trash-btn"></i>
            </div>`;

    var productRow = document.createElement('div');
    productRow.classList.add('product-row');
    productRows = document.querySelector('.product-rows');
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('trash-btn')[0].addEventListener('click', removeItem)
    productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
    updateCartPrice()
    
}


/** REMOVE */
function removeItem (e) {
  btnClicked = e.target
  btnClicked.parentElement.parentElement.remove()
  updateCartPrice()
}

var quantityInput = document.querySelectorAll('.product-quantity');
for (var i = 0; i < quantityInput; i++){
  input = quantityInput[i]
  input.addEventListener('change', changeQuantity)
}

/** QUNATITY */
function changeQuantity(e) {
    var input = e.target
    if (isNaN(input.value) || input.value <= 0){
    input.value = 1
    }
    updateCartPrice()
}

function updateCartPrice() {
    var productRow = document.getElementsByClassName('product-row');
    var total = 0
    for (var i = 0; i < productRow.length; i += 2) {
    cartRow = productRow[i]
    var priceElement = cartRow.getElementsByClassName('cart-price')[0]
    var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
    var price = parseFloat(priceElement.innerText.replace('P', ''))
    var quantity = quantityElement.value
    total = total + (price * quantity )
    
    }
    document.getElementsByClassName('total-price')[0].innerText =  'P' + total
    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}


