// const fs = require("fs");

// // Read and split lines
// const rawData = fs.readFileSync("stimuli_output.txt", "utf-8");
// const lines = rawData.trim().split("\n");

// const allData = [];

// for (let line of lines) {
//   const parts = line.trim().split(/\s+/); // split by whitespace
//   const parsedLine = [];

//   for (let i = 0; i < parts.length; i++) {
//     // Rule: every 3rd element starting from index 3 is a name (3, 6, 9, 12,...)
//     // So if (i >= 3 && (i - 3) % 3 === 0), it's a name
//     if (i < 3 || (i >= 3 && (i - 3) % 3 !== 0)) {
//       parsedLine.push(Number(parts[i])); // numeric
//     } else {
//       parsedLine.push(parts[i]); // string (stimulus name)
//     }
//   }

//   parsedLine.push(0); // Add trailing "selected" flag
//   allData.push(parsedLine);
// }

// // Optional: print or save
// console.log(allData);

// // Save to JSON file
// fs.writeFileSync("stimuli_output_array.json", JSON.stringify(allData, null, 2), "utf-8");






// const fs = require("fs");

// // Load the data from JSON
// const rawData = fs.readFileSync("stimuli_output_array.json", "utf-8");
// const parsedData = JSON.parse(rawData);

// // Clean each value: convert number strings to integers, keep strings as-is
// const cleanedData = parsedData.map(row =>
//   row.map(val => (isNaN(val) ? val : Number(val)))
// );

// // Define the constructor (c1 to c94)
// function generaltype(
//   c1, c2, c3, c4, c5, c6, c7, c8, c9, c10,
//   c11, c12, c13, c14, c15, c16, c17, c18, c19, c20,
//   c21, c22, c23, c24, c25, c26, c27, c28, c29, c30,
//   c31, c32, c33, c34, c35, c36, c37, c38, c39, c40,
//   c41, c42, c43, c44, c45, c46, c47, c48, c49, c50,
//   c51, c52, c53, c54, c55, c56, c57, c58, c59, c60,
//   c61, c62, c63, c64, c65, c66, c67, c68, c69, c70,
//   c71, c72, c73, c74, c75, c76, c77, c78, c79, c80,
//   c81, c82, c83, c84, c85, c86, c87, c88, c89, c90,
//   c91, c92, c93, c94
// ) {
//   for (let i = 1; i <= 94; i++) {
//     this[`c${i}`] = arguments[i - 1];
//   }
// }

// // Map each row to a generaltype instance
// const general = cleanedData.map(row => new generaltype(...row.slice(0, 94)));

// // Save the array of generaltype objects
// fs.writeFileSync("stimuli_generaltype_objects.json", JSON.stringify(general, null, 2), "utf-8");

// console.log("✅ Converted successfully. Saved to stimuli_generaltype_objects.json");


// const fs = require("fs");

// // 1. Read and parse the JSON file
// const rawData = fs.readFileSync("stimuli_output_array.json", "utf-8");
// const data = JSON.parse(rawData);

// // 2. Clean values: convert numeric strings to actual numbers
// const cleanedData = data.map(row =>
//   row.map(item => {
//     const num = Number(item);
//     return isNaN(num) ? item : num;
//   })
// );

// // 3. Generate `generaltype` object strings
// function generateGeneraltypeObject(arr, index) {
//   const entries = arr.slice(0, 93).map((val, i) => `c${i + 1}: ${JSON.stringify(val)}`);
//   entries.push(`selected: ${JSON.stringify(arr[93])}`);
//   return `  new generaltype({\n    ${entries.join(",\n    ")}\n  })`;
// }

// // 4. Write to JS file
// const output =
//   `// Auto-generated generaltype array\n` +
//   `function generaltype(obj) {\n` +
//   `  Object.assign(this, obj);\n` +
//   `}\n\n` +
//   `var general = [\n` +
//   cleanedData.map(generateGeneraltypeObject).join(",\n") +
//   `\n];\n`;

// fs.writeFileSync("stimuli_generaltype_array.js", output, "utf-8");

// console.log("✅ File created: stimuli_generaltype_array.js with 'selected' instead of c94");


const v=
[
    1,
    1,
    4,
    "target",
    150,
    -250,
    "distractor1",
    -150,
    -250,
    "distractor2",
    -50,
    -250,
    "distractor1",
    250,
    -250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    "empty",
    250,
    250,
    0
  ]

console.log(v.length);