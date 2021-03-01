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

// ======== Roman Numerals Decoder
// https://www.codewars.com/kata/51b6249c4612257ac0000005

function solution(roman) {
    const numerals = ["I", "V", "X", "L", "C", "D", "M"];
    const values = [1, 5, 10, 50, 100, 500, 1000];
    let sum = 0;
    for (let i = 0; i < roman.length; i++) {
        let ref = numerals.indexOf(roman[i]);
        if (numerals.indexOf(roman[i + 1]) > ref) {
            sum -= values[ref];
        } else {
            sum += values[ref];
        };
    };
    return sum;
}

// ======== Two sum
// https://www.codewars.com/kata/52c31f8e6605bcc646000082
function twoSum(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) return [i, j];
        }
    }
}

// alternative
function twoSum(numbers, target) {
    for (i = 0; i < numbers.length; i++) {
        for (j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] == target) {
                return [i, j];
            } else {
                continue;
            }
        }
    }
}

// ======== Convert string to camel case
// https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
    if (str == "") return "";
    let words = []
    if (str.includes('_')) {
        words = str.split("_");
    } else {
        words = str.split("-");
    }
    console.log(words)
    let result = words[0];
    for (i = 1; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return result;
}

// ======== Backspaces in string
// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
function cleanString(s) {
    let newS = ''
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == "#") {
            newS = newS.substring(0, newS.length - 1);
        } else {
            newS += s.charAt(i)
        }
    }
    return newS
};

// alternative
function cleanString(s) {
    let newS = ''
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == "#") {
            newS = newS.substring(0, newS.length - 1);
        } else {
            newS += s.charAt(i)
        }
        console.log(newS)
    }
    return newS
};

// ======== Pete, the baker
// https://www.codewars.com/kata/525c65e51bf619685c000059
function cakes(recipe, available) {
    // TODO: insert code
    let minimum = undefined;
    const requiredIngredients = Object.keys(recipe);
    console.log(requiredIngredients);

    requiredIngredients.forEach(ingredient => {
        if (!available.hasOwnProperty(ingredient)) {
            minimum = 0
            return
        }
        let ingredientLimit = Math.floor(available[ingredient] / recipe[ingredient]);
        console.log(ingredient, ingredientLimit)
        if (minimum === undefined) minimum = ingredientLimit
        minimum = Math.min(minimum, ingredientLimit);
        console.log(minimum)
    })
    return minimum;
}

// ======== Valid Parentheses
// https://www.codewars.com/kata/52774a314c2333f0a7000688
function validParentheses(parens) {
    let parentheses = 0

    for (let el of parens) {
        el === '(' ? parentheses++ : parentheses--
        if (parentheses < 0) return false
    }
    return parentheses === 0
}

// ======== Character with longest consecutive repetition
// https://www.codewars.com/kata/586d6cefbcc21eed7a001155
function longestRepetition(s) {
    let longestRepeat = ["", 0]
    if (s.length == 0) return longestRepeat
    let counter = 1
    for (i = 1; i < s.length; i++) {
        if (s.charAt(i - 1) == s.charAt(i)) {
            counter++
        } else {
            if (counter > longestRepeat[1]) {
                longestRepeat = [s.charAt(i - 1), counter]
            }
            counter = 1
        }
    }
    if (counter > longestRepeat[1]) return [s.charAt(i - 1), counter]
    return longestRepeat
}

// ======== More Zeros than Ones
// https://www.codewars.com/kata/5d41e16d8bad42002208fe1a
const moreZeros = (s) => {
    return [...new Set(s.split('').filter(char => {
        const bin = char.charCodeAt(0).toString(2);
        return bin.split('0').length - 1 > bin.split('1').length - 1
    }))]
}


// ======== Count letters in string
// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
function letterCount(s) {
    const result = {}
    for (const letter of s) {
        (letter in result) ? result[letter]++ : result[letter] = 1;
    }
    return result
}


// ======== ISBN-10 Validation
// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001
function validISBN10(isbn) {
    let sum = 0
    if (isbn.length !== 10) return false
    for (i = 1; i <= 9; i++) {
        sum += (i * isbn.charAt(i - 1))
    }
    isbn.charAt(9) === "X" ? sum += 100 : sum += (isbn.charAt(9) * 10)
    return (sum % 11 == 0)
}


// ======== The Supermarket Queue
// https://www.codewars.com/kata/57b06f90e298a7b53d000a86
function queueTime(customers, n) {
    if (n === 0 || customers.length === 0) return 0;
    let tills = customers.splice(0, n);
    for (let i = 0; i < customers.length; i++) {
        let indexOfTill = tills.indexOf(Math.min(...tills));
        tills[indexOfTill] += customers[i];
    }
    return Math.max(...tills);
}

// ======== Guess The Gifts!
// https://www.codewars.com/kata/52ae6b6623b443d9090002c8
function guessGifts(wishlist, presents) {
    let gifts = [];
    for (let present of presents) {
        for (let item of wishlist) {
            if (present.size === item.size &&
                present.clatters === item.clatters &&
                present.weight === item.weight &&
                !gifts.includes(item.name)) {
                gifts.push(item.name)
            }
        }
    }
    return gifts
}

// alternative
function guessGifts(wishlist, presents) {
    let gifts = [];
    for (let present of presents) {
        for (let item of wishlist) {
            if (present.size === item.size &&
                present.clatters === item.clatters &&
                present.weight === item.weight) {
                gifts.push(item.name)
            }
        }
    }
    return [...new Set(gifts)]
}

// ======== Decode the Morse code
// https://www.codewars.com/kata/54b724efac3d5402db00065e
decodeMorse = function (morseCode) {
    const letters = morseCode.trim().split(' ');

    let message = "";
    for (i = 0; i < letters.length; i++) {
        if (letters[i] !== '') {
            message += MORSE_CODE[letters[i]];
        } else {
            message += " ";
            i++
        }
    }
    return message;
}

// ======== Next bigger number with the same digits
// https://www.codewars.com/kata/55983863da40caa2c900004e
function nextBigger(n) {
    let s = n.toString().split('');
    let pivotIndex = -1;
    for (i = s.length - 1; i > 0; i--) {
        if (s[i - 1] < s[i]) {
            pivotIndex = i - 1;
            break;
        }
    }

    if (pivotIndex == -1) return pivotIndex;

    let right = s.splice(pivotIndex);

    let pivotValue = right.splice(0, 1);

    let min = null, minIndex = null;
    for (i = 0; i < right.length; i++) {
        if (right[i] > pivotValue) {
            if (min == null || right[i] < min) {
                min = right[i];
                minIndex = i
            }
        }
    }

    if (minIndex == null) return -1;

    right.splice(minIndex, 1);
    right.push(pivotValue[0]);
    right = right.sort()

    let ret = s.concat([min]).concat(right).join('');
    if (ret < n) return -1

    return ret * 1

}


// ======== Scramblies
// https://www.codewars.com/kata/55c04b4cc56a697bb0000048
// NOT AN IDEAL SOLUTION, but it doesn't timeout!!

function scramble(str1, str2) {
    let str1Letters = {}
    let str2Letters = {}

    for (i = 0; i < str1.length; i++) {
        if (str1Letters[`${str1.charAt(i)}`]) {
            str1Letters[`${str1.charAt(i)}`]++
        } else {
            str1Letters[`${str1.charAt(i)}`] = 1
        }
    }
    for (i = 0; i < str2.length; i++) {
        if (str2Letters[`${str2.charAt(i)}`]) {
            str2Letters[`${str2.charAt(i)}`]++
        } else {
            str2Letters[`${str2.charAt(i)}`] = 1
        }
    }
    console.log(str1Letters)
    console.log(str2Letters)

    for (letter in str2Letters) {
        console.log(`${letter} ${str1Letters[letter]} ${str2Letters[letter]}`)
        if (!str1Letters[letter] || str1Letters[letter] < str2Letters[letter]) return false
    }
    return true
}

// ======== Guitar Tab Transcriber
// https://www.codewars.com/kata/5ae24f79c5a452e1780000ad

const turnChordsIntoTab = (chords) => {
    const chordsArr = chords.split(" ");
    const tab = "";
    let stave = '';

    const strings = ["e", "B", "G", "D", "A", "E"];
    const chordReference = [
        ["Am", "0", "1", "2", "2", "0", "-"],
        ["C", "0", "1", "0", "2", "3", "-"],
        ["D", "2", "3", "2", "0", "-", "-"],
        ["G", "3", "0", "0", "0", "2", "3"],
    ];

    for (i = 0; i < strings.length; i++) {
        strings[i] += "|";
    }
    // add chords to tab
    for (let chord in chordsArr) {
        console.log(chordsArr[chord])
        for (i = 0; i < strings.length; i++) {
            for (j = 0; j < chordReference.length; j++)
                if (chordReference[j][0] == chordsArr[chord]) {
                    strings[i] += "---" + chordReference[j][i + 1];
                }
        }
    }
    // compile tab
    for (i = 0; i < strings.length; i++) {
        strings[i] += `---|\n`;
        stave += strings[i]
    }
    // add chord names
    let chordNames = "     "
    for (let chord in chordsArr) {
        chordNames += chordsArr[chord].padEnd(4, " ")
    }
    chordNames = chordNames.trimEnd()
    strings.push(chordNames)
    stave += chordNames

    return stave;
}

// ======== Snail
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function (array) {
    if (array.length === 1) return array[0]
    let returnArr = [array[0][0]]

    const size = array[0].length
    let routes = size * 2 - 1
    console.log({ size })
    console.log({ routes })
    let x = 0;
    let y = 0;
    let direction = 0;
    const movements = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    for (i = 1; i <= routes; i++) {
        console.log(`steps ${Math.min(size - Math.floor(i / 2), size - 1)}`)
        for (j = 1; j <= Math.min(size - Math.floor(i / 2), size - 1); j++) {
            x = x + movements[direction][0]
            y = y + movements[direction][1]

            // console.log(`x: ${x}, y:${y}`)
            returnArr.push(array[y][x])

        } //end j loop
        direction = (direction + 1) % 4
    } //end i loop routes
    return returnArr
}

// ======== Snail crawls up
// https://www.codewars.com/kata/5b93fecd8463745630001d05/train/javascript

function snail(column, day, night) {
    if (day >= column) return 1;
    return Math.ceil((column - day) / (day - night)) + 1;
}

// ======== Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001
function spinWords(sentence){
    const words = sentence.split(" ");
    const output = []
    for (let word of words) {
      if (word.length > 4){
        word = word.split("").reverse().join("")
      }
      output.push(word)
        console.log(output)
    }
    return output.join(" ")
  }

// ======== If you can read this...
// https://www.codewars.com/kata/586538146b56991861000293

function to_nato(words) {
    const alphabet = {
    "A": "Alfa",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "Xray",
    "Y": "Yankee",
    "Z": "Zulu"
  }
    const output = []
    letters = words.replace(/\s+/g, '');
    for (i=0; i<letters.length; i++) {
      const letter = letters[i].toUpperCase();
      if(letter === "." || letter === "!" || letter === "?"){
        output.push(letter);
      } else {
        output.push(alphabet[letter]);
      }

    }
    return output.join(" ");
  }
// ======== Pyramid Array
// https://www.codewars.com/kata/515f51d438015969f7000013

function pyramid(n) {
  const res = [];
  for(let i = 0; i < n; i++){
    res.push([...Array(i+1)].fill(1))
  }
  return res;
}


// ======== Max-min arrays
// https://www.codewars.com/kata/5a090c4e697598d0b9000004

function solve(arr) {
  const sortedArr = arr.sort(function (a, b) {
    return a - b;
  }); // end array sort
  const resultArr = [];

  while (sortedArr.length > 0) {
    resultArr.push(sortedArr.pop());
    if (sortedArr.length > 0) {
      resultArr.push(sortedArr.shift());
    } else {
      return resultArr;
    };
  }

  return resultArr;
};

// ======== Sum two arrays
// https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6

function addArrays(array1, array2) {
  if (!array1.length) {return array2};
  if (!array2.length) {return array1};

  let array1ToNumber = parseInt(array1.join(''));
  let array2ToNumber = parseInt(array2.join(''));

  let sum = array1ToNumber + array2ToNumber;
  const outputStrings = sum.toString().split("")
  if (outputStrings[0] == '-') {
    outputStrings.shift();
    outputStrings[0] = '-'.concat(outputStrings[0])
  }

  const output = outputStrings.map (x => parseInt(x));
  return output
}


// ========
