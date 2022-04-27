// function MyObj(firstName, lastName, dateOfBirth) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dateOfBirth = dateOfBirth;
// }

// MyObj.prototype.filter = function (callBackFunction) {
//     const arrKeys = Object.keys(this);
//     const arrValues = Object.values(this);
//     const newArr = [];
//     for (let i = 0; i < arrValues.length; i++) {
//         if (callBackFunction(arrKeys[i], arrValues[i], this)) newArr.push({[arrKeys[i]]: arrValues[i]});
//     }

//     return newArr;
// }


//     const eyal = new MyObj('eyal', 'sinay', '24.08.1988');


//     console.log(eyal.filter((key, value) => key === 'firstName' && value === 'eyal'));



function MyArr(arr) {
    this.arr = arr
}

MyArr.prototype.myFilter = function (callBackFunction) {
    let newArr = [];
    for (let i = 0; i < this.arr.length; i++) {
        if (callBackFunction(this.arr[i], i, this.arr)) newArr.push(this.arr[i]);
    }
    return newArr;
}

MyArr.prototype.myFind = function (callBackFunction) {
    for (let i = 0; i < this.arr.length; i++) {
        if (callBackFunction(this.arr[i], i, this.arr)) {
            return this.arr[i]
        }
    }
}

MyArr.prototype.myReduce = function (callBackFunction, initialValue) {
    const newArr = [...this.arr];
    if(initialValue) newArr.unshift(initialValue);
    for (let i = 1; i < newArr.length; i++) {
        newArr[i] = callBackFunction(newArr[i-1], newArr[i]);
    }
    return newArr[newArr.length - 1];
}


const numbersArr = new MyArr([1, 2, 3, 4, 5, 6, 7, 8, 9]);

console.log(numbersArr.myFilter((value, index) => value > 6 && index < 8));
console.log(numbersArr.myFind((value, index) => value > 6 && index < 8));
console.log(numbersArr.myReduce((previousValue, currentValue) => previousValue + currentValue));
console.log(numbersArr.myReduce(((previousValue, currentValue) => previousValue + currentValue), 100));
