async function main() {

  const text = await fetch("input.txt").then(r => r.text());

  let answer1, answer2;

  // input manipulation:

  let input = text.trim().split("\n\n");
  input[0] = input[0].trim().split("\n");
  for (let i = 0; i < input[0].length; i++) {
    input[0][i] = input[0][i].split("-");
    input[0][i][0] = BigInt(input[0][i][0]);
    input[0][i][1] = BigInt(input[0][i][1]);
  }
  input[1] = input[1].trim().split("\n");
  for (let i = 0; i < input[1].length; i++) {
    input[1][i] = BigInt(input[1][i]);
  }

  // part 1:

  answer1 = 0;
  for (let i = 0; i < input[1].length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      if (input[1][i] >= input[0][j][0] && input[1][i] <= input[0][j][1]) {
        answer1++;
        j = input[0].length;
      }
    }
  }



  // part 2:

  let working = 1;

  while (working) {
    let workDone = 0;
    for (let i = 0; i < input[0].length; i++) {
      for (let j = 0; j < input[0].length; j++) {
        if (i != j) {
          if (input[0][j][0] <= input[0][i][1] && input[0][j][0] >= input[0][i][0]) {
            if (input[0][i][1] < input[0][j][1]) { input[0][i][1] = input[0][j][1] }
            input[0][j][0] = 0n;
            input[0][j][1] = 0n;
            if (input[0][i][1] != 0) { workDone++; }
          }
        }
      }
    }
    if (workDone == 0) { working = 0; }
  }

  answer2 = 0n;

  for (let i = 0; i < input[0].length; i++) {
    if (input[0][i][1] != 0) { answer2 += input[0][i][1] - input[0][i][0] + 1n; }
  }

  // prints output:

  document.getElementById("bongo").innerHTML = answer1;
  document.getElementById("drum").innerHTML = answer2;

}

main();