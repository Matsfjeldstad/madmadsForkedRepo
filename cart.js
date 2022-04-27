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
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function addToCartClicked(event){
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    console.log(title)
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


