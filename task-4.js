"use strict";
function getShippingCost(country){
    const getShippingCost = `Shipping to ${country} will cost ${price} credits`;
    return getShippingCost;
    switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }
}
//return "Sorry, there is no delivery to your country"
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"

//China — 100 кредитів if price < 100
//Chile — 250 кредитів
//Australia — 170 кредитів
//Jamaica — 120 кредитів