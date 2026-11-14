async function main() {
  //  let input = ["987654321111111","811111111111119","234234234234278","818181911112111"];

  const text = await fetch("input.txt").then(r => r.text());
  let input = text.trim().split("\n");

  let answer1;
  let answer2 = "test";

  // input manipulation:

  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("");
  }

  // part 1:

  function maxValueAndIndex(a, from, to) {
    let currentMax = 0;
    let currentIndex = 0;
    for (let i = from; i < to; i++) {
      if (a[i] > currentMax) {
        currentMax = a[i];
        currentIndex = i;
      }
    }
    return [currentMax, currentIndex];
  }

  answer1 = Number(0);
  for (let i = 0; i < input.length; i++) {
    answer1 += 10 * Number(maxValueAndIndex(input[i], 0, input[i].length - 1)[0]);
    answer1 += Number(maxValueAndIndex(input[i], Number(maxValueAndIndex(input[i], 0, input[i].length - 1)[1] + 1), input[i].length)[0]);
  }

  // part 2:

  answer2 = Number(0);
  for (let i = 0; i < input.length; i++) {
    let startingindex = 0;
    for (let j = 0; j < 12; j++) {
      answer2 += Math.pow(10, 11 - j) * Number(maxValueAndIndex(input[i], startingindex, input[i].length - 11 + j)[0]);
      startingindex = maxValueAndIndex(input[i], startingindex, input[i].length - 11 + j)[1] + 1;
    }
  }

  // prints output:

  document.getElementById("bongo").innerHTML = answer1;
  document.getElementById("drum").innerHTML = answer2;

}

main();