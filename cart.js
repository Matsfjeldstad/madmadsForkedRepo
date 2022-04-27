console.log("Cart script initializing")
if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)

} else {
    ready()
}

function ready(){
    var removeCartArticleButtons = document.getElementsByClassName('removecartarticlebuttons')
    console.log(removeCartArticleButtons)
    for (var i = 0; i < removeCartArticleButtons.length; i++){
        var button = removeCartArticleButtons[i]
        button.addEventListener('click', removeCartItem) 
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName ('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('purchasebutton')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('gamepic')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
    <div class="cart-item cart-column" >
              <img class="cart-item-image" src="${imageSrc}" alt="item in cart" width="180px">
              <br>
              <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price} NOK</span>
            <div class="cart-quantity cart-column">
              <input type="number" class="cart-quantity-input" value="1" style="width: 40px;">
              <button class="removecartarticlebuttons" 
              style="background-color: red;" type="button">Remove</button>
            </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.appendChild(cartRow)
    cartRow.getElementsByClassName('removecartarticlebuttons')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <=0) {
        input.value = 1 
    }
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i] 
        var priceElement = cartRow.getElementsByClassName('cart-price')[0] 
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')
        [0]
        var price = parseFloat(priceElement.innerText.replace('NOK', ''))
        console.log(price)
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = 'Total: ' + total + ' NOK'
}
 

console.log("Cart script successfully running")


