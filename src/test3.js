const INPUT = ["asdasd", "scvvg", "bfv", "ab", "xc", "dz", "bbb", "dz", "bfv"];

const QUERY = ["ab", "bbb", "bfv"];

const match = (input, query) => {
  // match the input and query and then count the number of times the query is present in the input
  let result = [];
  for (let i = 0; i < query.length; i++) {
    let count = 0;
    for (let j = 0; j < input.length; j++) {
      if (query[i] === input[j]) {
        count++;
      }
    }
    result.push(count);
  }

  return result;
};

console.log(match(INPUT, QUERY));
