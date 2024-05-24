function welcomeAndSubmit() {
    // Get the value of the name from input
    const nameInput = document.querySelector('input[name="name"]');
    const name = nameInput.value;

    // Display the alert
    alert("Welcome to My Stationery Shop, " + name + "!");

    // Allow the form to be submitted
    return true;
}

let scrollAmount = 0;

function scrollPromo(direction) {
    const promo = document.querySelector('.promo');
    const imageWidth = promo.querySelector('img').clientWidth;

    // Calculate the new scroll position
    scrollAmount += direction * imageWidth;

    // Ensure the scroll position is within the bounds of the carousel
    scrollAmount = Math.max(0, Math.min(scrollAmount, promo.scrollWidth - promo.clientWidth));

    // Apply the new scroll position
    promo.style.transform = `translateX(-${scrollAmount}px)`;
}

