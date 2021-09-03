const applyPromoButton = document.getElementById("apply");


//function for updating all the single product's costs
function getProductCost(name, price) {
    const memories = document.getElementById(name + "-cost");
    memories.innerText = price;
    totalPriceUpdate();
}

//function for getting the total cost of all products which are clicked
function getCostVal(name) {
    const memoryCost = parseInt(document.getElementById(name + "-cost").innerText);
    return (memoryCost);
}


//function for updating the total cost value on the total price fields
function totalPriceUpdate() {
    const memoryVal = getCostVal("memory");
    const storageVal = getCostVal("storage");
    const deliveryVal = getCostVal("delivery");
    document.getElementById("total-cost").innerText = memoryVal + storageVal + deliveryVal + 1299;
    document.getElementById("final-cost").innerText = memoryVal + storageVal + deliveryVal + 1299;
    applyPromoButton.classList.remove("disabled");

}


//memory buttons' event handlers
document.querySelector("#memory-btns").addEventListener("click", function(event) {
    const buttonName = event.target.id;
    const name = "memory";
    if (buttonName.includes("first")) {
        console.log("contain");
        getProductCost(name, 0);
    } else {
        getProductCost(name, 180);
    }
});

//storage buttons' event handlers
document.querySelector("#storage-btns").addEventListener("click", function(event) {
    const storageButtonName = event.target.id;
    const name = "storage";
    if (storageButtonName.includes("first")) {
        getProductCost(name, 0);
    } else if (storageButtonName.includes("second")) {
        getProductCost(name, 100);
    } else {
        getProductCost(name, 180);
    }

});


//delivery buttons' event handlers
document.querySelector("#delivery-btns").addEventListener("click", function(event) {
    const deliveryButtonName = event.target.id;
    const name = "delivery";
    if (deliveryButtonName.includes("first")) {
        getProductCost(name, 0);
    } else {
        getProductCost(name, 20);
    }
});

//applying the promo code for discount
applyPromoButton.addEventListener("click", function() {
    const promoCode = document.getElementById("promo");
    const promoCodeVal = promoCode.value;
    const finalCost = document.getElementById("final-cost");
    const finalCostVal = parseInt(finalCost.innerText);

    if (promoCodeVal === "stevekaku") {
        const discountVal = (finalCostVal * 0.8);
        finalCost.innerText = discountVal;
        promoCode.value = "";
        applyPromoButton.classList.add("disabled", true);
    }
});