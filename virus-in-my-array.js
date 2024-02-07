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