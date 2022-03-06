//1.Write a regular function with a number argument that logs double the first argument.

function double1(num) {

    console.log(2 * num[0])

}
//double1([1, 2, 3, 4, 5])

//2.Write a regular function with a number argument that returns double the first argument.

function double2(num) {

    return num = 2 * num[0]

}
//console.log(double2([1, 2, 3, 4, 5]))

//3.Write a regular function with two number arguments that returns double the largest argument.
function double3(a, b) {
    if (a > b) {
        return a
    } else {
        return b
    }
}

//console.log(double3(2,3))

// 4.Rewrite the functions double1, double2, double3 in the style of arrow functions.
//a.
const arrow_double1 = (num) => {

    console.log(2 * num[0])

}
//arrow_double1([1, 2, 3, 4, 5])

//b.

const arrow_double2 = (num) => {

    return num = 2 * num[0]

}
//console.log(arrow_double2([1, 2, 3, 4, 5]))

//c.

const arrow_double3 = (a, b) => {
    if (a > b) {
        return a
    } else {
        return b
    }
}
//console.log(arrow_double3(2,3))

// 5.Write an arrow function with a string argument and a number argument
// that repeates the string from the first argument but repeated the amount of times equal to the second argument.

const repeat = (strings, num) => {
    return strings.repeat(num);
}
//console.log(repeat("sweta ",2))

// 6.Write a function without any arguments. 
//Have it return the string 'na' repeated 10 times followed by the string 'batman!'. Use the repeat function you used before to accomplish this.

const batman = () => {
    return repeat(" batsman! na", 10)
}
//console.log(batman())

// 7.Write a function with two number arguments. Have it return the largest number of the two.
const max = (num1, num2) => {
    const largeNumber = Math.max(num1, num2)
    return largeNumber;
}
//console.log(max(2,3))

// 8.Write a function with two number arguments. Have it return the smallest number of the two divided by the largest number.
const maxDivide = (num1, num2) => {
    const largeNumber = Math.max(num1, num2)
    const smallNumber = Math.min(num1, num2)

    const divide = (smallNumber / largeNumber)
    return divide;

}

//console.log(maxDivide(2,3))

// 9.Write a function with two string arguments. Have it return the longest string.
const maxStr = (str1, str2) => {
    if (str1.length > str2.length) {
        return str1
    } else {
        return str2
    }
}
//console.log(maxStr("raj", "sweta"))

//10 Write a function with a single number argument. Return a boolean that indicated wether this number is even.
const numberEven = (num) => {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}
//console.log(numberEven(2))

//11.Write a function with a single number argument. Return an array of all the numbers lower than this argument that are even.

const numberEvenBelow = (num) => {
    let arr = []
    for (let i = num; i >= 0; i--) {
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
    return arr
}
//console.log(numberEvenBelow(100))

//12 Write a function with a single array of numbers argument. Return an array of all the numbers in this array that are even.
const evenIn = (num) => {
    let newArr = []
    for (let i = 0; i < num.length; i++)
        if (num[i] % 2 == 0) {
            newArr.push(num[i])
        }
    return newArr
}
//console.log(evenIn([10, 12, 13, 16]))

//13 Write a function with a single array of numbers argument. Return the result of multiplying all the numbers.

const multiplyArray = (array) => {
    let value = 1;
    for (let i = 0; i < array.length; i++) {
        value = value * array[i];
    }
    return value;
}
//console.log(multiplyArray([1,2,3]));


// 14 Write a function with a single array of numbers argument. Return the result of dividing the number from left to right. 
//So the first number gets divided by the second and the result of that gets divided by the third (and so on..).

const divideArray = (array) => {

    for (let i = 0; i < array.length - 1; i++) {

        if (i == 0) {
            div1 = array[i] / array[i + 1]
        } else {
            div1 = div1 / array[i + 1]

        }
    }
    return div1;
}
//console.log(divideArray([16,2,2]))

// 15.Write a function with two string arguments. 
//Split both strings in halves and recombine the halves. Return the longest results of the two combinations

const splitCombine = (str1, str2) => {
    const strDiv1 = Math.floor(str1.length / 2);

    const str1Half1 = str1.slice(0, strDiv1)

    const str1Half2 = str1.slice((strDiv1), (str1.length))


    const strDiv2 = Math.floor(str2.length / 2)

    const str2Half1 = str2.slice(0, strDiv2)

    const str2Half2 = str2.slice(strDiv2, str2.length)


    const combineFirstHalf = str1Half1 + str2Half1
    const combine2ndHalf = str1Half2 + str2Half2


    combineFirstHalf.length >= combine2ndHalf.length ? console.log(combineFirstHalf) : console.log(combine2ndHalf)
}

//splitCombine("welcom", "hello")

//16.Write a function with one {name: string}(object) argument. Return the name property.

const content = { name: 'sweta' }

const getName = (value) => {

    const propertyName = Object.keys(value)
    console.log(propertyName)
}
//getName(content)

//17.Write a function with one [{name: string}](list of object) argument. Return an array with all the name properties

const continents = [{
    china: 'Asia',
    japan: 'Asia',
    italy: 'Europe'
},
{
    india: 'Asia',
    netherlans: 'Europe',
    france: 'Europe'
}]

const getNames = (values) => {

    let newArray = []
    for (let i = 0; i < values.length; i++) {

        for (let j = 0; j < Object.keys(values[i]).length; j++) {
            let propertyNames = Object.keys(values[i])[j]

            newArray.push(propertyNames)

        }
    }
    console.log(newArray)
}
//getNames(continents)

//18. Write a function with one [{firstname: string, lastname: string}](list of object) argument. 
//Return an array with all the full names (both the first and the last name as a single string).

const nameList = [{
    firstName: "sweta",
    lastName: "raj"
},
{
    firstName: "nirav",
    lastName: "kumar"
}
]


const combineName = (names) => {

    for (let i = 0; i < names.length; i++) {
        console.log(nameList[i].firstName + " " + nameList[i].lastName)

    }
}
//combineName(nameList)

// 19.Write a function with one [{country: string}](list of object) argument.
// Return an array with every unique country value in the input array.

const countryName = [{
    country: "India",

},
{
    country: "Nepal"

},
{
    country: "India"
}
]

const uniqueCountries = (countryValue) => {
    let uniqueValue = []
    let newArray = []

    for (let i = 0; i < countryValue.length; i++) {

        for (let j = 0; j < Object.values(countryValue[i]).length; j++) {
            let propertyValues = Object.values(countryValue[i])[j]

            newArray.push(propertyValues)

        }
    }

    let uniqCountry = [...new Set(newArray)];
    return uniqCountry;

}

//console.log(uniqueCountries(countryName))

//20 Write a function with one [{country: string}](list of object) argument.
// Return an object with all the unique values as keys and the amount of occurences as value.



const countryNames = [{ country: "India", }, { country: "Nepal" }, { country: "India" }]

const countCountries = (countryValue) => {
    let uniqueValue = []
    let newArray = []

    for (let i = 0; i < countryValue.length; i++) {

        for (let j = 0; j < Object.values(countryValue[i]).length; j++) {
            let propertyValues = Object.values(countryValue[i])[j]

            newArray.push(propertyValues)

        }
    }

    let countedNames = newArray.reduce((allCountryName, name) => {
        if (name in allCountryName) {
            allCountryName[name]++

        }
        else {
            allCountryName[name] = 1
        }
        return allCountryName
    }, {})

    console.log(countedNames)
}

//countCountries(countryNames)

//21 Write a function with one [number] argument. Return the highest number.
const numbers = [2, 3, 6, 8, 9]
let num = 0
const highestNumber = (number) => {
    for (let i = 0; i < number[i]; i++) {

        if (number[i] > num) {
            num = number[i]
        }
    }
    console.log(num)

}
//highestNumber(numbers)

//22.Write a function with one [number] argument. Return the average.

const avgNum = [1, 2, 3, 4, 5]
let sum = 0
const average = (numbers) => {
    for (let i = 0; i < numbers[i]; i++) {

        sum = sum + numbers[i]
    }
    avg = sum / numbers.length
    return avg
}

//console.log(average(avgNum))

// 23.Write a function with one [number] argument. Return the mode (most frequent value).

modeNum = [3, 2, 2, 3, 3, 4, 3]
const mode = (arr) => {
    let Mode = 0;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < i; j++) {

            if (arr[j] === arr[i]) {
                Mode = arr[j];

                count++;
            }
        }
    }
    return mode
}
//console.log(mode(modeNum))

//24 Write a function with one string argument. Return the reversed string.
const strings = ("sweta")
const reverse = (string) => {
    let newstr = " "
    for (let i = string.length - 1; i >= 0; i--) {

        newstr = newstr + string[i]
    }
    return newstr
}
//console.log(reverse(strings))

// 25. Write a function with one string argument. Return true or false wether this string is a palindrome.
const palin = ("racecar")
const palindrome = (string) => {
    let newstr = ""
    for (let i = string.length - 1; i >= 0; i--) {

        newstr = newstr + string[i]
        console.log(newstr)
    }


    console.log(newstr)

    if (newstr === string) {
        return true
    } else {
        return false
    }
}
//console.log(palindrome(palin))