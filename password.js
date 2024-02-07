function password(object) {
  if (object.name && object.birthYear && object.siteName && object.birthYear >= 1000 && object.birthYear <= 9999) {
    const name = object.name;
    const birthYear = object.birthYear;
    const siteName = object.siteName.charAt(0).toUpperCase() + object.siteName.slice(1);
    return `${siteName}#${name}@${birthYear}`;
  }


  return "invalid";
}


let google = {
  name: "kolimuddin",
  birthYear: 1999,
}


console.log(password(google));
