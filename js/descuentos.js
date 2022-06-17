const vouchers = [
    {
        code: "PRIMERACOMPRA",
        discount: 10
    },
    {
        code: "NIVELORO",
        discount: 20
    },
    {
        code: "MICUMPLE",
        discount: 35
    }];
function calculatePriceWithDiscount(price, discount) {
    const percentageToPay = 100 - discount;
    return (price * percentageToPay) / 100;
}

function onClickButtonCalculatePrice() {
    const price = document.getElementById("inputPrice").value;
    const discount = document.getElementById("inputDiscount").value;
    const labelFinalPrice = document.getElementById("finalPrice");
    const finalPrice = calculatePriceWithDiscount(Number(price), Number(discount));
    const priceDiscount = Number(price) - finalPrice;
    labelFinalPrice.innerHTML = `El precio final es: $${finalPrice} con un descuento del ${discount}% </br>Su ahorro fué de: $${priceDiscount}`;
}

function onClickButtonCalculatePriceVoucher() {
    const price = document.getElementById("inputPriceVoucher").value;
    const voucherCode = document.getElementById("inputVoucher").value;
    const labelFinalPrice = document.getElementById("finalPriceVoucher");

    const voucher = vouchers.find(x => x.code === voucherCode);
    if (!voucher) {
        labelFinalPrice.innerHTML = `El cupón ${voucherCode} no es un cupón válido`;
        return;
    }
    const finalPrice = calculatePriceWithDiscount(Number(price), Number(voucher.discount));
    const priceDiscount = Number(price) - finalPrice;
    labelFinalPrice.innerHTML = `El precio final es: $${finalPrice} con un descuento del ${voucher.discount}% </br>Su ahorro fué de: $${priceDiscount}`;

}
