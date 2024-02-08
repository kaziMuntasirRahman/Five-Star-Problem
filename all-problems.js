function calculateMoney(ticketSale){
  if(ticketSale<0){
    return "Number of Ticket Sale cannot be a Negative number. Please try again.";
  }
  else{
    leftMoney = (ticketSale*120) - (500 +(8*50));
    return leftMoney;
  }
}




function checkName(name) {
  if (typeof (name) !== "string") {
    return "invalid";
  }
  const z = name[name.length - 1].toLowerCase();
  if (z === 'a' || z === 'e' || z === 'i' || z === 'o' || z === 'u' || z === 'w' || z === 'y') {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}




function deleteInvalids(array) {
  if(!Array.isArray(array)){
    return "invalid";
  }

  arrayOfNumbers = [];
  for(let i of array){
    if(typeof i === "number" && !isNaN(i)){
      arrayOfNumbers.push(i);
    }
  }

  return arrayOfNumbers;
}



function password(obj) {
  if (obj.name && obj.birthYear && obj.siteName && obj.birthYear >= 1000 && obj.birthYear <= 9999) {
    const name = obj.name;
    const birthYear = obj.birthYear;
    const siteName = obj.siteName.charAt(0).toUpperCase() + obj.siteName.slice(1);
    return `${siteName}#${name}@${birthYear}`;
  }


  return "invalid";
}



function monthlySavings(arr, livingCost) {
  if (!Array.isArray(arr) || typeof livingCost !== "number") {
    return "invalid input";
  }

  let totalEarning = 0;
  for (let i of arr) {
    if (i >= 3000) {
      totalEarning += i * 0.8;
    }
    else {
      totalEarning += i;
    }
  }

  let totalSavings = totalEarning - livingCost;

  if (totalSavings >= 0) {
    return totalSavings;
  } else {
    return `earn more`;
  }
}
