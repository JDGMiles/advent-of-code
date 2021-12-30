function main() {

  var runningtotal = 0;

  var input = ["FV", "C", "SS", "B", "SC", "B", "BP", "K", "VP", "S", "HK", "K", "FS", "F", "CC", "V", "VB", "P", "OP", "B", "FO", "N", "FH", "O", "VK", "N", "PV", "S", "HV", "O", "PF", "F", "HH", "F", "NK", "S", "NC", "S", "FC", "H", "FK", "K", "OO", "N", "HP", "C", "NN", "H", "BB", "H", "CN", "P", "PS", "N", "VF", "S", "CB", "B", "OH", "S", "CF", "C", "OK", "P", "CV", "V", "CS", "H", "KN", "B", "OV", "S", "HB", "C", "OS", "V", "PC", "B", "CK", "S", "PP", "K", "SN", "O", "VV", "C", "NS", "F", "PN", "K", "HS", "P", "VO", "B", "VC", "B", "NV", "P", "VS", "N", "FP", "F", "HO", "S", "KS", "O", "BN", "F", "VN", "P", "OC", "K", "SF", "P", "PO", "P", "SB", "O", "FN", "F", "OF", "F", "CP", "C", "HC", "O", "PH", "O", "BC", "O", "NO", "C", "BH", "C", "VH", "S", "KK", "O", "SV", "K", "KB", "K", "BS", "S", "HF", "B", "NH", "S", "PB", "N", "HN", "K", "SK", "B", "FB", "F", "KV", "S", "BF", "S", "ON", "S", "BV", "P", "KC", "S", "NB", "S", "NP", "B", "BK", "K", "NF", "C", "BO", "K", "KF", "B", "KH", "N", "SP", "O", "CO", "S", "KO", "V", "SO", "B", "CH", "C", "KP", "C", "FF", "K", "PK", "F", "OB", "H", "SH", "C"]

  var template = "PBVHVOCOCFFNBCNCCBHK"

  var alphabet = "BCFHKNOPSV";

  var creationafternsteps = [];

  for (var i = 0; i < input.length / 2; i++) {
    creationafternsteps[i] = countletters(stepexcerpt(input[2 * i]));
  }

  function creationstep() {
    var creationafternplusonesteps = [];
    for (var i = 0; i < creationafternsteps.length; i++) {
      var leftindex = 0;
      var rightindex = 0;
      for (var j = 0; j < input.length / 2; j++) {
        if (input[2 * j] == stepexcerpt(input[2 * i]).substring(0, 2)) {
          leftindex = j;
        }
      }
      for (var j = 0; j < input.length / 2; j++) {
        if (input[2 * j] == stepexcerpt(input[2 * i]).substring(1, 3)) {
          rightindex = j;
        }
      }
      creationafternplusonesteps[i] = [];
      for (var j = 0; j < alphabet.length; j++) {
        creationafternplusonesteps[i][j] = creationafternsteps[leftindex][j] + creationafternsteps[rightindex][j];
      }
      for (var j = 0; j < alphabet.length; j++) {
        if (stepexcerpt(input[2 * i])[1] == alphabet[j]) {
          creationafternplusonesteps[i][j]--;
        }
      }
    }
    creationafternsteps = creationafternplusonesteps;
  }

  var output = "";

  function pairinsertion(pair) {
    var found = 0;
    for (var i = 0; i < input.length / 2; i++) {
      if (pair == input[2 * i]) {
        found = 1;
        return input[2 * i + 1]
      }
    }
    if (!found) { return 0; }
  }

  function stepexcerpt(excerpt) {
    var running = 1;
    var place = 0;
    while (running) {
      if (pairinsertion(excerpt.substring(place, place + 2)) != 0) {
        var excerpt2 = "" + excerpt.substring(0, place + 1) + pairinsertion(excerpt.substring(place, place + 2)) + excerpt.substring(place + 1, excerpt.length + 1);
        excerpt = excerpt2;
        place += 2;
      }
      else {
        place++;
      }
      if (place == excerpt.length) {
        running = 0;
      }
    }
    return excerpt;
  }

  function countletters(sample) {
    var lettercount = [];
    for (var i = 0; i < alphabet.length; i++) {
      lettercount[i] = 0;
    }
    for (var i = 0; i < sample.length; i++) {
      for (var j = 0; j < alphabet.length; j++) {
        if (sample[i] == alphabet[j]) {
          lettercount[j]++
        }
      }
    }
    return lettercount;
  }

  function multicreationstep(n) {
    for (var i = 0; i < n; i++) {
      creationstep();
    }
  }

  multicreationstep(39);

  function totallettersgenerated() {
    var total = [];
    for (var i = 0; i < alphabet.length; i++) {
      total[i] = 0;
    }
    for (var i = 0; i < template.length - 1; i++) {
      for (var j = 0; j < input.length / 2; j++) {
        if (input[2 * j] == template.substring(i, i + 2)) {
          for (var k = 0; k < alphabet.length; k++) {
            total[k] += creationafternsteps[j][k];
          }
        }
      }
    }
    for (var i = 1; i < template.length - 1; i++) {
      for (var j = 0; j < alphabet.length; j++) {
        if (alphabet[j] == template[i]) {
          total[j]--;
        }
      }
    }
    return total;
  }


  for (i = 0; i < creationafternsteps.length; i++) {
    output += creationafternsteps[i] + "<br>";
  }

  output = totallettersgenerated();

  document.getElementById("bongo").innerHTML = output;


}

main();