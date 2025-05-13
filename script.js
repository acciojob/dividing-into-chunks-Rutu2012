function stringChop(str, size) {
  // Handle invalid inputs
  if (typeof str !== "string" || !str || size <= 0 || isNaN(size)) {
    return [];
  }

  const result = [];

  // Loop through the string and slice it into chunks of the specified size
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String:");
const size = parseInt(prompt("Enter Chunk Size:"), 10);
alert(JSON.stringify(stringChop(str, size)));
