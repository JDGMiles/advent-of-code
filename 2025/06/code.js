async function main() {

  const text = await fetch("input.txt").then(r => r.text());

  let answer1, answer2;

  // input manipulation:

  let input = text.trim().split("\n");
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].trim().split(/\s+/);
  }

  // part 1:

  answer1 = 0;

  for (let i = 0; i < input[0].length; i++) {
    if (input[4][i] == "+") {
      answer1 += Number(input[0][i]) + Number(input[1][i]) + Number(input[2][i]) + Number(input[3][i]);
    }
    else {
      answer1 += Number(input[0][i]) * Number(input[1][i]) * Number(input[2][i]) * Number(input[3][i]);
    }
  }

  // part 2:

  let input2 = text.split("\n");

  function calculation(startIndex) {
    let componentsNumber = 0;
    while (input2[4][startIndex + componentsNumber + 1] == " ") {
      componentsNumber++;
    }
    let components = [];
    for (let i = 0; i < componentsNumber; i++) {
      components[i] = 1000 * Number(input2[0][startIndex + i]) + 100 * Number(input2[1][startIndex + i]) + 10 * Number(input2[2][startIndex + i]) + Number(input2[3][startIndex + i]);
      while (components[i] % 10 == 0) {
        components[i] = components[i] / 10;
      }
    }
    let calculated = components[0];
    for (let i = 1; i < components.length; i++) {
      if (input2[4][startIndex] == "+") {
        calculated += components[i];
      }
      else {
        calculated = calculated * components[i];
      }
    }
    return [calculated, componentsNumber];
  }

  let currentIndex = 0;

  answer2 = 0;

  while (currentIndex < input2[4].length) {
    answer2 += calculation(currentIndex)[0];
    currentIndex += calculation(currentIndex)[1] + 1;
  }

  // prints output:

  document.getElementById("bongo").innerHTML = answer1;
  document.getElementById("drum").innerHTML = answer2;

}

main();