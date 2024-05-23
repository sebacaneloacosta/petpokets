let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Función para agregar al carrito
  function addToCart(name, price) {
    const item = cart.find(i => i.name === name);
    if (item) {
      item.quantity++;
    } else {
      cart.push({ name, price, quantity: 1 });
    }
    updateCartDisplay();
    saveCart();
  }

  // Función para actualizar la visualización del carrito
  function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
      total += item.price * item.quantity;
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.innerHTML = `
        ${item.name} - $${item.price.toFixed(2)} x ${item.quantity}
        <button class="btn btn-sm btn-danger" data-name="${item.name}">Eliminar</button>
      `;
      cartItemsContainer.appendChild(li);
    });

    document.getElementById('totalAmount').innerText = total.toFixed(2);

    document.querySelectorAll('.btn-danger').forEach(button => {
      button.addEventListener('click', function() {
        removeFromCart(this.getAttribute('data-name'));
      });
    });
  }

  // Función para quitar del carrito
  function removeFromCart(name) {
    const itemIndex = cart.findIndex(i => i.name === name);
    if (itemIndex > -1) {
      cart.splice(itemIndex, 1);
    }
    updateCartDisplay();
    saveCart();
  }

  // Función para guardar el carrito en localStorage
  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Actualizar la visualización del carrito al cargar la página
  document.addEventListener('DOMContentLoaded', updateCartDisplay);