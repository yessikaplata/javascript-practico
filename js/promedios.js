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

function calculateMode(list) {
    console.log(list);
    listCount = {};
    //Generates object with counter by each number in list
    list.map((value) => {
        if (!listCount[value]) {
            listCount[value] = 0;
        }
        listCount[value]++;
    })
    console.log(listCount);
    // Order list by counter in object
    const listOrderedByCount = Object.entries(listCount).sort(
        function (a, b) {
            return a[1] - b[1];
        }
    )
    //Return the last number in ordered list
    return listOrderedByCount.pop()[0];
}

function calculateWeightedAverage(listData) {
    console.log(listData);
    const sumWeights = listData.reduce((partialSum, value) => partialSum + Number(value[1]), 0);
    console.log(sumWeights);
    const sumDataByWeights = listData.reduce((partialSum, value) => partialSum + (Number(value[0]) * Number(value[1])), 0);
    const weightedAverage = sumDataByWeights / sumWeights
    return Math.round(weightedAverage * 100) / 100;
}

function onClickButtonCalculateAverage() {
    const dataStr = document.getElementById("inputDataAverage").value;
    const lblAverage = document.getElementById("lblAverage");
    const dataList = dataStr.split(",").map((item) => item.trim());
    const average = calculateArithmeticAverage(dataList)
    lblAverage.textContent = `La media es: ${average} `;
}


function onClickButtonCalculateMedian() {
    const dataStr = document.getElementById("inputDataMedian").value;
    const lblMedian1 = document.getElementById("lblMedian1");
    const lblMedian2 = document.getElementById("lblMedian2");
    const dataList = dataStr.split(",").map((item) => item.trim());
    const median = calculateMedian(dataList);
    lblMedian1.textContent = `La lista ordenada es: ${dataList.sort((a, b) => a - b)} `;
    lblMedian2.textContent = `La mediana es: ${median} `;
}

function onClickButtonCalculateMode() {
    const dataStr = document.getElementById("inputDataMode").value;
    const lblMode = document.getElementById("lblMode");
    const dataList = dataStr.split(",").map((item) => item.trim());
    const mode = calculateMode(dataList);
    lblMode.textContent = `La moda es: ${mode} `;
}

function onClickButtonCalculateaWeightedAverage(){
    const dataStr = document.getElementById("inputDataWeights").value;    
    const lblWeightedAverage = document.getElementById("lblWeightedAverage");
    const dataList = dataStr.split(";").map((item) => item.trim());
    const dataListWeights = dataList.map((value) => value.split(",").map((item) => item.trim()));
    const weightedAverage = calculateWeightedAverage(dataListWeights);
    lblWeightedAverage.textContent = `El promedio ponderado es: ${weightedAverage} `;    
}