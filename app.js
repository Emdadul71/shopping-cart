
function updateCaseNumber(product,price,isIncrasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
    if(isIncrasing){
        caseNumber = parseInt(caseNumber) + 1;

    }else if( caseNumber > 0){
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    const caseTotal = document.getElementById(product +'-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
}
function getInputValue(product){
    const productInput = document.getElementById(product +'-number');
    const productNumber = productInput.value;
    return productNumber;
}

function calculateTotal(){
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const taxTotal = subtotal / 10;
    const totalAmount = subtotal + taxTotal;
    document.getElementById('sub-total').innerText = subtotal; 
    document.getElementById('tax-total').innerText = taxTotal;
    document.getElementById('total-amount').innerText = totalAmount;
}
document.getElementById('phone-plus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function(){
    updateCaseNumber('phone', 1219, false);
})

document.getElementById('case-plus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) + 1;
    updateCaseNumber('case', 59, true);
})

document.getElementById('case-minus').addEventListener('click', function(){
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = parseInt(caseNumber) - 1;
    updateCaseNumber('case', 59, false);

})

