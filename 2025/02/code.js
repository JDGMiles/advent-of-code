function main() {
  // var input = "26803-38596,161-351,37-56,9945663-10044587,350019-413817,5252508299-5252534634,38145069-38162596,1747127-1881019,609816-640411,207466-230638,18904-25781,131637-190261,438347308-438525264,5124157617-5124298820,68670991-68710448,8282798062-8282867198,2942-5251,659813-676399,57-99,5857600742-5857691960,9898925025-9899040061,745821-835116,2056-2782,686588904-686792094,5487438-5622255,325224-347154,352-630,244657-315699,459409-500499,639-918,78943-106934,3260856-3442902,3-20,887467-1022885,975-1863,5897-13354,43667065-43786338";
  var input = "11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124";
  var answer1;
  var answer2;

  // input manipulation:

  input = input.split(",");
  for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split("-");
  }

  // part 1:

  // did this what I thought was a 'faster' more 'clever' way

  function firstHalf(n) {
    const s = String(n);
    const half = Math.floor(s.length / 2);
    return Number(s.slice(0, half));
  }

  function doubleUp(n) {
    const s = String(n);
    return Number(s + s);
  }

  function countInvalid([a, b]) {
    let output = [];
    let c = firstHalf(a);
    let d = 0;
    while (d < b) {
      d = doubleUp(c);
      if (d >= a && d <= b) { output[output.length] = d }
      c++;
    }
    return output;
  }

  let invalidList = [];

  for (let i = 0; i < input.length; i++) {
    invalidList = invalidList.concat(countInvalid(input[i]));
  }

  let invalidListTotal = 0;
  for (let i = 0; i < invalidList.length; i++) {
    invalidListTotal = invalidListTotal + invalidList[i];
  }

  answer1 = invalidListTotal;

  // part 2:

  // did this the more 'obvious' way because it was too awkward to adapt my part 1 method [Ed - it wasn't 'obvious' it was surprisingly difficult!]

  function testInvalid(a) {
    const s = String(a);
    let invalid = 0;
    for (let i = 1; i <= s.length / 2; i++) {
      if (s.length % i == 0) {
        let invalidSoFar = 1;
        for (let j = 0; j < s.length / i - 1; j++) {
          if (s.slice(j * i, (j + 1) * i) != s.slice((j + 1) * i, (j + 2) * i)) {
            invalidSoFar = 0;
            j = s.length;
          }
        }
        if (invalidSoFar) {
          invalid = 1;
          i = s.length;
        }
      }
    }
    return invalid;
  }

  let invalidTotal = 0;

  for (let i = 0; i < input.length; i++) {
    for (let j = Number(input[i][0]); j <= Number(input[i][1]); j++) {
      invalidTotal += Number(j)*testInvalid(j);
    }
  }

  answer2 = invalidTotal;

  // prints output:

  document.getElementById("bongo").innerHTML = answer1;
  document.getElementById("drum").innerHTML = answer2;

}

main();