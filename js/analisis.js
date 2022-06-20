

function calculateArithmeticAverage(list) {
    const sum = list.reduce((partialSum, value) => partialSum + Number(value), 0);
    const average = sum / list.length;
    return Math.round(average * 100) / 100;
}

function calculateMedian(list) {
    //Sort the list
    list.sort((a, b) => a - b);
    //Calculate middle index
    const indexMedian = Math.trunc(list.length / 2);

    //if size of list is odd return middle number
    if (list.length % 2 != 0) {
        return list[indexMedian];
    }

    //if size of list is even return arithmetic average for middle numbers
    const elementMedian1 = list[indexMedian - 1];
    const elementMedian2 = list[indexMedian];
    const medians = [elementMedian1, elementMedian2];
    return calculateArithmeticAverage(medians);
}

function calculateMedianTop(list, topPercentage) {
    const spliceStart = list.length * ((100 - topPercentage) / 100)
    const listTop = list.slice(spliceStart);
    return calculateMedian(listTop);
}

function onClickButtonAnalysis(){
    const topValue = document.getElementById("inputTop").value || 10;
    const lblResult = document.getElementById("lblResult");
    const salariesColombia = colombia.map((person) => person.salary);
    salariesColombia.sort((salaryA, salaryB) => salaryA - salaryB);
    const generalMedian = calculateMedian(salariesColombia);
    const topMedian = calculateMedianTop(salariesColombia, topValue);
    lblResult.innerHTML = `Salarios: ${salariesColombia},  <br /> Mediana General: ${generalMedian} <br /> Median Top ${topValue}: ${topMedian}`
    
}