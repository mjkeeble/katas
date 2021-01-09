// ======== Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004

function multiply(a, b) {
    return (a * b)
}

// ======== Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe/train/javascript/5f91359188cd9300281cf631

function even_or_odd(number) {
    console.log(number);
    if (number % 2 === 0 || number === 0) return "Even";
    return "Odd";
}

// Refactor
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even";
}

// ======== Abbreviate a Two Word Name
// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3

function abbrevName(name) {
    let output = name[0].toUpperCase() + "."
    return output + name[name.indexOf(' ') + 1].toUpperCase()
}

// ======== Counting sheep...
// https://www.codewars.com/kata/54edbc7200b811e956000556

function countSheeps(arrayOfSheep) {
    const flock = arrayOfSheep.filter(function (sheep) {
        return sheep;
    })
    return flock.length;
}

// ======== Filter out the geese
// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

function gooseFilter(birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    const shortlist = birds.filter(function (bird) {
        return geese.indexOf(bird) === -1;
    });
    return shortlist;
};

// ======== Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131

function points(games) {
    let points = 0
    for (let result of games) {
        console.log(result[0])
        if (result[0] > result[2]) points += 3;
        if (result[0] === result[2]) points += 1;
    }
    return points;
}

// ========   Smallest unused ID
// https://www.codewars.com/kata/55eea63119278d571d00006a

function nextId(ids) {
    let max = Math.max(...ids);
    for (i = 0; i <= max + 1; i++) {
        if (!ids.includes(i)) return i
    }
}

// ======== The Office I - Outed
// https://www.codewars.com/kata/57ecf6efc7fe13eb070000e1

function outed(meet, boss) {
    let scores = 0
    for (let colleague in meet) {

        if (colleague == boss) {
            scores += meet[colleague] * 2
        } else {
            scores += meet[colleague]
        }
    }
    if ((scores / Object.keys(meet).length) <= 5) return `Get Out Now!`
    return `Nice Work Champ!`
}

// ======== Sum of differences in array
// https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e

function sumOfDifferences(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    console.log(arr);

    let sum = 0
    for (i = 0; i < arr.length - 1; i++) {

        sum += (arr[i + 1] - arr[i]);
    }
    return sum;
}

// ======== Pandemia 🌡️
// https://www.codewars.com/kata/5e2596a9ad937f002e510435

function infected(s) {
    array = s.split('X');
    console.log(array);
    let infections = 0;
    let population = 0;

    array.forEach((continent) => {
        population += continent.length;
        if (continent.includes('1')) infections += continent.length
    })
    return ((infections / population) * 100 || 0)
}

// ======== Credit Card Mask
// https://www.codewars.com/kata/5412509bd436bd33920011bc
// return masked string
function maskify(cc) {
    return (cc.substring(cc.length - 4)).padStart(cc.length, '#');
}

// ======== The Office II - Boredom Score
// https://www.codewars.com/kata/57ed4cef7b45ef8774000014

function boredom(staff) {
    let boredomLevel = 0
    const company = {
        "accounts": 1,
        "finance": 2,
        "canteen": 10,
        "regulation": 3,
        "trading": 6,
        "change": 6,
        "IS": 8,
        "retail": 5,
        "cleaning": 4,
        "pissing about": 25
    }

    for (let person in staff) {
        console.log([person])
        boredomLevel += company[staff[person]]
    }
    if (boredomLevel <= 80) return 'kill me now'
    if (boredomLevel < 100) return 'i can handle this'
    return 'party time!!'
}

// ======== Ordered Count of Characters
// https://www.codewars.com/kata/57a6633153ba33189e000074

var orderedCount = function (text) {
    const result = []
    console.log(text.length)
    for (i = 0; i < text.length; i++) {
        const currentCharacter = [text.charAt(i), 1]
        console.log(text.charAt(i))
        if (text.indexOf(text.charAt(i)) < i) {

            continue;
        } else {
            for (j = i + 1; j < text.length; j++) {
                if (text.charAt(j) == text.charAt(i)) currentCharacter[1]++
            }
            result.push(currentCharacter)
            // console.log(result)
            console.log(currentCharacter)

        }
    }
    return result;
}

// ======== Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021

function divCon(x) {
    let total = 0
    x.forEach(function (element) {

        if (typeof element == 'string') {
            total -= parseInt(element)
        } else {
            total += element
        };
    });  // end x.forEach loop
    return total
}

// ======== The Office VI - Sabbatical
// https://www.codewars.com/kata/57fe50d000d05166720000b1

function sabb(s, val, happiness) {
    // console.log(sabbatical);
    let approval = val + happiness

    for (let char of s) {
        if ('sabbatical'.includes(char)) approval++
    }
    return approval > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}

// ======== Simple Fun #144: Distinct Digit Year
// https://www.codewars.com/kata/58aa68605aab54a26c0001a6
function distinctDigitYear(year) {
    year++
    while ((new Set(year.toString())).size < 4) {
        year++
    }
    return year
}

// ======== Find the Capitals
// https://www.codewars.com/kata/53573877d5493b4d6e00050c

function capital(capitals) {
    const output = []
    for (i = 0; i < capitals.length; i++) {
        const keys = Object.keys(capitals[i])
        // console.log(keys)
        if (keys.includes("country")) {
            // capitals[0].defineProperty(obj,"state", capitals[0].getOwnPropertyDescriptor(obj,"country"))
            delete Object.assign(capitals[i], { state: capitals[i].country }).country
        }

        //   for (let i = 0: i< capitals.length; i++) 
        output.push(`The capital of ${capitals[i].state} is ${capitals[i].capital}`)
    }
    return output
}

// ======== Unlucky Days
// https://www.codewars.com/kata/56eb0be52caf798c630013c0

function unluckyDays(year) {
    let x = 0
    for (i = 1; i <= 12; i++) {
        let day = new Date(`${i}/13/${year}`)
        let dayx = day.getDay()
        if (day.getDay() == 5) x++;
    };
    return x
}

// ======== Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3

function getCount(str) {
    var vowelsCount = 0;
    const vowels = ["a", "e", "i", "o", "u"]
    str = str.toLowerCase()
    for (let character of str) {
        vowels.includes(character) ? vowelsCount++ : vowelsCount;
    }
    // enter your majic here

    return vowelsCount;
}

// ======== Most sales
// https://www.codewars.com/kata/5e16ffb7297fe00001114824

function top3(products, amounts, prices) {

    const comparison = [];
    for (let i = 0; i < products.length; i++) {
        comparison.push([products[i], amounts[i] * prices[i], i])
    }
    comparison.sort(function (a, b) {
        if (b[1] > a[1]) return 1;
        if (b[1] < a[1]) return -1;
        if (b[2] < a[2]) return 1;
        return -1

    }); // end array sort
    const result = comparison.map(function (item) {
        return item[0]
    });
    return result.slice(0, 3)
}

// ======== 

// ======== 

// ======== 

// ======== 

// ======== 

// ======== 

// ======== 

// ======== 

// ======== 
