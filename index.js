// 1. Grasshopper - Debug sayHello
function sayHello(name) {
  return 'Hello, ' + name 
}

    // cleaner solution:
    const sayHello = name => `Hello, ${name}`;

// 2. Split Strings

function solution(str) {
  
  let pairs = [];
  
  for (let i = 0; i < str.length; i += 2) {
    let pair = str.slice(i, i + 2);
    
    if (pair.length === 1) {
      pair += '_';
    }
    
    pairs.push(pair);
  }
  
  return pairs;
}

// 3. Transportation on vacation

function rentalCarCost(d) {
  if (d >= 7) {
    return (d * 40) - 50
  } else if (d >= 3 && d < 7) {
    return (d * 40) - 20
  } else
    return (d * 40)
}

    // cleaner solution 1:
    const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));

    // cleaner solution 2:
    function rentalCarCost(d) {
      return d * 40 - (d >= 7 ? 50 : (d >= 3 ? 20 : 0));
    }

// 4. Who likes it?

function likes(names) {
  if (names.length === 0) {
    return "no one likes this"
  } else if (names.length === 1) {
    return `${names} likes this`
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length >= 4) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}

// 5. Grasshopper - Personalized Message

const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

// 6. Replace With Alphabet Position

function alphabetPosition(text) {
  let result = "";
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';

  text = text.toLowerCase();

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let position = alphabet.indexOf(char) + 1;
  
    //indexOf returns -1 if the character does not exist in alphabet (i.e. not a letter)
    if (position > 0) {
      result += position + " ";
    }
  }

  // Remove the trailing space
  result = result.trim();

  return result;
}

    // Example usage:
    // let text = "The sunset sets at twelve o' clock.";
    // let positions = alphabetPosition(text);
    // console.log(positions);

// 7. Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers){  
  numbers.sort((a,b) => a - b);
  return numbers[0] + numbers[1];
};

// 8. Create Phone Number

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

    // alternate solution:

    function createPhoneNumber(numbers){
      let format = "(xxx) xxx-xxxx";
      
      for(let i = 0; i < numbers.length; i++)
      {
        format = format.replace('x', numbers[i]);
      }
      
      return format;
    }
    
// 9. Is a number prime?

function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// 10. Parse nice int from char problem

const getAge = (inputString) => parseInt(inputString)

// 11. 5 without numbers

function unusualFive() {
  return "abcde".length
 }

//  12. Multiplication table

multiplicationTable = function(size) {
  const table = [];

  for (let i = 1; i <= size; i++) {
    const row = [];

    for (let j = 1; j <= size; j++) {
      row.push(i * j);
    }

    table.push(row);
  }

  return table;
}

//  13. Super Duper Easy

function problem(x) {
 return typeof x === 'string' ? 'Error' : x * 50 + 6;
}

//  14. Grasshopper - Messi goals function

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// 15. What's the real floor?

function getRealFloor(n) {
  if (n <= 0 ) {
    return n
  }
  else if (1 <= n && n <= 12) {
    return n - 1
  } else if (n >= 13) {
    return n - 2
  }
}
    // alternate solutions:

    const getRealFloor = n => {
      if(n >= 13) return n - 2
      if(n > 0) return n - 1
      return n
    }

    function getRealFloor(n) {
      return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
    }

// 16. Sum of Digits / Digital Root

function digitalRoot(n) {
  if (n < 10) {
    return n
  } else {
    let nSplitString = n.toString().split("");

    let sum = 0

    for (let i = 0; i <= nSplitString.length -1; i++) {
      sum += parseInt(nSplitString[i]) 
    }

    return sum < 10 ? sum : digitalRoot(sum)
  }
}

// 17. Sum of Parts

function partsSums(ls) {
  const sumArr = [];
  
  sumArr.push(ls.reduce((a, b) => a + b, 0));
  
  for (let i = 0; i < ls.length; i++) {
    sumArr.push((sumArr[i]) - ls[i]);
  };

  return sumArr;
}

// 18. Get the Middle Character

function getMiddle(s) {
  const charNum = s.length
  let half = charNum/2
  return charNum % 2 === 0 ? s.charAt(half -1).concat(s.charAt(half)) : s.charAt(half)
}

// 19. Remove Duplicates from Sorted Array

var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === nums[i]) {
            nums.splice(i, 1)
            i--
        }
    }
    
    return k = nums.length
};

// 20. Reverse String

var reverseString = function(s) {
    let start = 0
    let end = s.length -1
    
    while (start < end) {
        const first = s[start]
        const last = s[end]
        s[start] = last
        s[end] = first
        start++
        end--
    }
};

// 21. First Unique Character in a String

var firstUniqChar = function(s) {
    const count = {};
    
    for (char of s) {
        if (char in count) count[char] += 1
        else count[char] = 1
    }
    
    for (char of s) {
        if (count[char] === 1) return s.indexOf(char)
    } 
    
    return -1
};

// 22. Reverse Linked List

  // iteratively: 
  var reverseList = function(head) {
    if (head === null) return null
    if (head.next === null) return head
    
    let prev = null
    let current = head
    let next = head.next
    
    while (next !== null) {
      next = current.next
      current.next = prev
      prev = current
      current = next
    }
    return prev
  };

  // recursively:
  var reverseList = function(head, prev = null) {
    if (head === null) return prev
    
    const next = head.next
    head.next = prev
    return reverseList(next, head)
  };

// 23. Merge Two Sorted Lists

  var mergeTwoLists = function(list1, list2) {
      if (list1 === null && list2 === null) return null
      if (list1 !== null && list2 === null) return list1
      if (list1 === null && list2 !== null) return list2
      
      let current1 = list1
      let current2 = list2
      let tail = null
      
      while (current1 !== null && current2 !== null) {
          let next1 = current1.next
          let next2 = current2.next
          
          if (current1.val === current2.val) {
              current1.next = current2
              tail = current2
              current1 = tail
              current2 = next2
          }
          
          if (current1.val > current2.val) {
              current2.next = current1
              tail = current1
              current2 = tail
              current1 = next1
          }
          
          if (current1.val < current2.val) {
              current1.next = current2
              tail = current2
              current1 = tail
              current2 = next2
          } 
      }
      if (list1.val > list2.val) return list2
      else return list1
  };
  
// 24. Rotate Array

let rotate = function(arr, numberOfShifts) {
  let deletedArray = arr.splice(arr.length-numberOfShifts);
  
  for (let i=0; i < deletedArray.length; i++) {
    arr.splice(i,0,deletedArray[i]);
  }
  
  return arr;
};