async function main() {

  const text = await fetch("input.txt").then(r => r.text());

  let answer1, answer2;

  // input manipulation:

  let input = text.trim().split("\n");
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("");
  }

  // part 1:

  function step(row) {
    for (let i = 0; i < input[row].length; i++) {
      if (input[row][i] == "S" || input[row][i] == "|") {
        if (input[row + 1][i] == "^") {
          input[row + 1][i - 1] = "|";
          input[row + 1][i + 1] = "|";
        }
        else {
          input[row + 1][i] = "|";
        }
      }
    }
  }

  for (let i = 0; i < input.length - 1; i++) {
    step(i);
  }

  answer1 = "";

  for (let i = 0; i < input.length; i++) {
    answer1 += "<br>";
    for (let j = 0; j < input[i].length; j++) {
      answer1 += input[i][j];
    }
  }

  let beamSplitCount = 0;

  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] == "^" && input[i - 1][j] == "|") {
        beamSplitCount++;
      }
    }
  }

  answer1 += "<br>" + beamSplitCount;

  // part 2:

  for (let i = 0; i < input[input.length - 1].length; i++) {
    if (input[input.length - 1][i] == "|") { input[input.length - 1][i] = Number("1"); }
  }

  function step2(row) {
    for (let i = 0; i < input[row].length; i++) {
      if (input[row][i] == "|") {
        input[row][i] = Number(input[row + 1][i]);
      }
    }
    for (let i = 0; i < input[row].length; i++) {
      if (input[row][i] == "^") {
        input[row][i] = Number(input[row][i - 1]) + Number(input[row][i + 1]);
      }
    }
  }

  for (let i=input.length-2; i>0; i--){
    step2(i);
  }

  answer2 = "";

  for (let i = 0; i < input.length; i++) {
    answer2 += "<br>";
    for (let j = 0; j < input[i].length; j++) {
      answer2 += input[i][j];
    }
  }

  // prints output:

  document.getElementById("bongo").innerHTML = answer1;
  document.getElementById("drum").innerHTML = answer2;

}

main();