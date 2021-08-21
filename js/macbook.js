// select memory
const memory8gb = document.getElementById('memory-8gb');
const memory16gb = document.getElementById('memory-16gb');

const memoryCost = document.getElementById('memory-total');

memory8gb.addEventListener('click',function(){
    memoryCost.innerText = 0;
    
});
memory16gb.addEventListener('click',function(){
    memoryCost.innerText = 180;
    const memoryCostText = parseInt(memoryCost.innerText);
    const totalCost = document.getElementById('total-cost');
    const totalCostText = parseInt (totalCost.innerText);
    totalCost.innerText = parseInt (totalCostText + memoryCostText);
});


// select storage
const ssd256 = document.getElementById('ssd-256');
const ssd512 = document.getElementById('ssd-512');
const ssd1tb = document.getElementById('ssd-1tb');

const storageCost = document.getElementById('storage-total');
ssd256.addEventListener('click',function(){
    storageCost.innerText = 0;
});
ssd512.addEventListener('click',function(){
    storageCost.innerText = 100;
});
ssd1tb.addEventListener('click',function(){
    storageCost.innerText = 180;
});

// Delivery Charge
const freeDelivery = document.getElementById('delivery-free');
const argentDelivery = document.getElementById('delivery-argent');
const deliveryCharge = document.getElementById('delivery-total');
freeDelivery.addEventListener('click',function(){
    deliveryCharge.innerText = 0;
});
argentDelivery.addEventListener('click',function(){
    deliveryCharge.innerText = 20;
});