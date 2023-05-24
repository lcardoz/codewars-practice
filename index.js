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