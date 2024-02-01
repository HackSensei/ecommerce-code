var cart = [];

function addToCart1() {
    var product = {
        image: "images/product/f1.jpg",
        name: "Colourful Pattern Shirt",
        price: 499,
        quantity: 1,
        subtotal: 499
    };
    
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart2() {
    var product = {
            image: "images/product/f2.jpg",
            name: "Patterned Resort Shirt",
            price: 499,
            quantity: 1,
            subtotal: 499
        };
    
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart3() {
    var product = {
                image: "images/product/f3.jpg",
                name: "Vintage Beige Floral Shirt",
                price: 499,
                quantity: 1,
                subtotal: 499
            };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart4() {
    var product = {
                    image: "images/product/f4.jpg",
                    name: "Flowers Sleeve Lapel Shirt",
                    price: 499,
                    quantity: 1,
                    subtotal: 499
                };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart5() {
    var product = {
        image: "images/product/f5.jpg",
        name: "Vintage Floral Oil Shirt",
        price: 599,
        quantity: 1,
        subtotal: 599
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart6() {
    var product = {
        image: "images/product/f6.jpg",
        name: "Vintage Henley Shirt",
        price: 799,
        quantity: 1,
        subtotal: 799
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart7() {
    var product = {
        image: "images/product/f7.jpg",
        name: "Leirke Capri Pants",
        price: 399,
        quantity: 1,
        subtotal: 399
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart8() {
    var product = {
        image: "images/product/f8.jpg",
        name: "Element Pattern Print Top",
        price: 699,
        quantity: 1,
        subtotal: 699
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart9() {
    var product = {
        image: "images/product/n1.jpg",
        name: "Regular Fit Linen-blend grandad shirt",
        price: 499,
        quantity: 1,
        subtotal: 499
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart10() {
    var product = {
        image: "images/product/n2.jpg",
        name: "Grey Striped shirt",
        price: 499,
        quantity: 1,
        subtotal: 499
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart11() {
    var product = {
        image: "images/product/n3.jpg",
        name: "Classic White Shirt",
        price: 499,
        quantity: 1,
        subtotal: 499
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart12() {
    var product = {
        image: "images/product/n4.jpg",
        name: "Bristum 1-Pocket Service Straight Shirt",
        price: 399,
        quantity: 1,
        subtotal: 399
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart13() {
    var product = {
        image: "images/product/n5.jpg",
        name: "Solid Denim Shirt",
        price: 599,
        quantity: 1,
        subtotal: 599
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart14() {
    var product = {
        image: "images/product/n6.jpg",
        name: "Comfort Fit Half-Pant",
        price: 499,
        quantity: 1,
        subtotal: 499
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart15() {
    var product = {
        image: "images/product/n7.jpg",
        name: "Men Beige Solid Slim Fit Shirt",
        price: 599,
        quantity: 1,
        subtotal: 599
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart16() {
    var product = {
        image: "images/product/n8.jpg",
        name: "Grey Regular Fit Shirt",
        price: 399,
        quantity: 1,
        subtotal: 399
    };
    cart.push(product);
    // updateCart();
    // Save the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCart() {
    var table = document.getElementById("cart");
    var subtotal = 0;

    // Load the cart from local storage
    if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
    }

    table.innerHTML = "<tr><th>Remove</th><th>Image</th><th>Product</th><th>Price</th><th>Quantity</th><th>Subtotal</th></tr>";

    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
        var row = table.insertRow(-1);
        var removeCell = row.insertCell(0);
        var imageCell = row.insertCell(1);
        var nameCell = row.insertCell(2);
        var priceCell = row.insertCell(3);
        var quantityCell = row.insertCell(4);
        var subtotalCell = row.insertCell(5);

        removeCell.innerHTML = "<a href='#' onclick='removeFromCart(" + i + ")'><i class='far fa-times-circle'></i></a>";
        imageCell.innerHTML = "<img src='" + product.image + "' alt='" + product.name + "'>";
        nameCell.innerHTML = product.name;
        priceCell.innerHTML = "Rs. " + product.price;
        quantityCell.innerHTML = "<input type='number' name='quantity' min='1' max='10' value='" + product.quantity + "' onchange='updateQuantity(" + i + ", this.value)'>";
        subtotalCell.innerHTML = "Rs. " + product.subtotal;

        subtotal += product.subtotal;
    }

    document.getElementById("subtotal").innerHTML = "Rs. " + subtotal;
    document.getElementById("total").innerHTML = "Rs. " + subtotal;
}

function updateQuantity(index, quantity) {
    var product = cart[index];
    product.quantity = quantity;
    product.subtotal = product.price * quantity;
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function applyCoupon() {
    var coupon = document.getElementById("coupon").value;

    if (coupon == "SAVE10") {
        var total = parseInt(document.getElementById("total").innerHTML.split(" ")[1]);
        total -= 10;
        document.getElementById("total").innerHTML = "Rs. " + total;
    }
}
window.onload = function () {
    updateCart();
};