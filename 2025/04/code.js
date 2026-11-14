async function main() {

  const text = await fetch("input.txt").then(r => r.text());

  let answer1, answer2;

  // input manipulation:

  let input = text.trim().split("\n");

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("");
    input[i].unshift(".");
    input[i].push(".");
  }

  input.unshift([]);
  input.push([]);

  for (let i = 0; i < input[1].length; i++) {
    input[0][i] = ".";
    input[input.length - 1][i] = ".";
  }

  // part 1:

  let accessible = 0;
  for (let i = 1; i < input.length - 1; i++) {
    for (let j = 1; j < input[i].length - 1; j++) {
      if (input[i][j] == "@") {
        let blocked = 0;
        if (input[i - 1][j - 1] == "@") { blocked++; }
        if (input[i - 1][j] == "@") { blocked++; }
        if (input[i - 1][j + 1] == "@") { blocked++; }
        if (input[i][j - 1] == "@") { blocked++; }
        if (input[i][j + 1] == "@") { blocked++; }
        if (input[i + 1][j - 1] == "@") { blocked++; }
        if (input[i + 1][j] == "@") { blocked++; }
        if (input[i + 1][j + 1] == "@") { blocked++; }
        if (blocked < 4) { accessible++ }
      }
    }
  }

  answer1 = accessible;

  // part 2:

  function removeWhatYouCan() {
    let accessible = 0;
    for (let i = 1; i < input.length - 1; i++) {
      for (let j = 1; j < input[i].length - 1; j++) {
        if (input[i][j] == "@") {
          let blocked = 0;
          if (input[i - 1][j - 1] == "@") { blocked++; }
          if (input[i - 1][j] == "@") { blocked++; }
          if (input[i - 1][j + 1] == "@") { blocked++; }
          if (input[i][j - 1] == "@") { blocked++; }
          if (input[i][j + 1] == "@") { blocked++; }
          if (input[i + 1][j - 1] == "@") { blocked++; }
          if (input[i + 1][j] == "@") { blocked++; }
          if (input[i + 1][j + 1] == "@") { blocked++; }
          if (blocked < 4) {
            accessible++;
            input[i][j] = ".";
          }
        }
      }
    }
    return accessible;
  }

  let justRemovedAmount = removeWhatYouCan();
  let totalRemovedAmount = justRemovedAmount;

  while (justRemovedAmount != 0) {
    justRemovedAmount = removeWhatYouCan();
    totalRemovedAmount += justRemovedAmount;
  }

  answer2 = totalRemovedAmount;

  // prints output:

  document.getElementById("bongo").innerHTML = answer1;
  document.getElementById("drum").innerHTML = answer2;

}

main();