function checkName(name) {
  if (typeof (name) !== "string") {
    return "Invalid input.";
  }
  const z = name[name.length - 1].toLowerCase();
  if (z === 'a' || z === 'e' || z === 'i' || z === 'o' || z === 'u' || z === 'w' || z === 'y') {
    return "Good Name";
  } else {
    return "Bad Name";
  }
}


console.log(checkName("RAFEE"));