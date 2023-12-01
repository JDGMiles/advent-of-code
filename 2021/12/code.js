function main() {

  var runningtotal = 0;

  var routeskey = [[0, 3, 2, 2, 0, 0, 0], [3, 0, 3, 2, 1, 0, 1], [2, 3, 0, 4, 1, 1, 1], [2, 2, 4, 0, 2, 2, 1], [0, 1, 1, 2, 0, 2, 2], [0, 0, 1, 2, 2, 0, 2], [0, 1, 1, 1, 2, 2, 0]];

  var output = "";

  var totalvalid = 0;

  function addvalid(route) {
    var numberofroutes = routeskey[route[0]][route[1]];
    for (var i = 1; i < route.length - 1; i++) {
      numberofroutes = numberofroutes * routeskey[route[i]][route[i + 1]];
    }
    totalvalid += numberofroutes;

    var cavecount = [];
    for (var i = 0; i < 7; i++) {
      cavecount[i] = 0;
    }
    for (var i = 0; i < route.length; i++) {
      cavecount[route[i]]++;
    }
    var doublecave = 0;
    for (var i = 0; i < cavecount.length; i++) {
      if (cavecount[i] > 1) { doublecave = 1; }
    }
    if (cavecount[4] == 1 && !doublecave) {
      totalvalid += numberofroutes;
      totalvalid += numberofroutes;
    }
  }

  var allroutes = [];

  for (var i = 1; i < 6; i++) {
    allroutes[allroutes.length] = [0, i, 6];
    output = output + allroutes[allroutes.length - 1] + "<br>";
    for (var j = 1; j < 6; j++) {
      if (j != i) {
        allroutes[allroutes.length] = [0, i, j, 6];
        output = output + allroutes[allroutes.length - 1] + "<br>";
        for (var k = 1; k < 6; k++) {
          if (k != i && k != j) {
            allroutes[allroutes.length] = [0, i, j, k, 6];
            output = output + allroutes[allroutes.length - 1] + "<br>";
            for (var l = 1; l < 6; l++) {
              if (l != i && l != j && l != k) {
                allroutes[allroutes.length] = [0, i, j, k, l, 6];
                output = output + allroutes[allroutes.length - 1] + "<br>";
                for (var m = 1; m < 6; m++) {
                  if (m != i && m != j && m != k && m != l) {
                    allroutes[allroutes.length] = [0, i, j, k, l, m, 6];
                    output = output + allroutes[allroutes.length - 1] + "<br>";
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function smallcavetwice(baseroute) {
    for (var i = 0; i < baseroute.length - 2; i++) {
      for (var j = 0; j < baseroute.length - 2 - i; j++) {
        var index = allroutes.length;
        allroutes[index] = [];
        for (var k = 0; k < i + 2 + j; k++) {
          allroutes[index][k] = baseroute[k];
        }
        allroutes[index][i + j + 2] = baseroute[i + 1];
        for (var k = i + j + 3; k < baseroute.length + 1; k++) {
          allroutes[index][k] = baseroute[k - 1];
        }
        output = output + allroutes[allroutes.length - 1] + "<br>";
      }
    }
  }

  var firstgenrouteslength = allroutes.length;

  for (var i = 0; i < firstgenrouteslength; i++) {
    smallcavetwice(allroutes[i]);
  }

  for (var i = 0; i < allroutes.length; i++) {
    addvalid(allroutes[i]);
  }

  output = totalvalid;

  document.getElementById("bongo").innerHTML = output;


}

main();