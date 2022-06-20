/**
 * La formula para calcular la tasa efectiva mensual es: = (1+EA)^(1/12)-1 donde EA es la tasa efectiva anual
 * La formula para calcular la cuota mensual es (PMT(E2,C2,B2)*-1).
 * PMT = IR * PV * (PVIRF + FV)/(PVIRF -1)
 * IR = Tasa de Interés
 * NP: Numero de pagos
 * PV: Valor presente (Monto del préstamo)
 * FV: Valor futuro
 * PVIRF: Factor de interés del valor presente 
 * 
 * PVIRF= (1+IR)^NP
 * Nota, en colombia si el plazo es de 1 mes el interes es 0 por lo tanto el valor de la cuota es el valor del préstamo
 */

function onClickButtonCalculate() {
    let copESLocale = Intl.NumberFormat('es-CO');
    const lblResult = document.getElementById("lblResult");
    const loan = document.getElementById("inputLoan").value;
    const percentageAnnualRate = document.getElementById("inputAnnualRate").value;
    const numberPayments = document.getElementById("inputNumberPayments").value;
    const annualRate = percentageAnnualRate / 100;
    const mensualInterestRate = calculateMensualRate(annualRate);
    const pmt = calculatePMT(mensualInterestRate, numberPayments, loan);
    const percentageMensualInterestRate = mensualInterestRate * 100;
    const totalAmmount = pmt * numberPayments;
    const totalInterest = totalAmmount - loan;
    lblResult.innerHTML = `La cuota mensual es de: $${copESLocale.format(pmt.toFixed(0))} a una tasa efectiva mensual de ${copESLocale.format(percentageMensualInterestRate.toFixed(2))}% <br/>
    El total a pagar es: $${copESLocale.format(totalAmmount.toFixed(0))} con interés total de $${copESLocale.format(totalInterest.toFixed(0))}`;
}

function calculateMensualRate(annualInterestRate) {
    return Math.pow((1 + annualInterestRate), (1 / 12)) - 1;
}

function calculatePMT(interestRate, numberPayments, presentValue, futureValue = 0) {
    var presentValueInterestFactor = Math.pow((1 + interestRate), numberPayments);
    var pmt = interestRate * presentValue * (presentValueInterestFactor + futureValue) / (presentValueInterestFactor - 1);
    return pmt;
}
