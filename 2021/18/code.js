function main() {

  var output = "";

  var input = [[[[0, [4, 5]], [0, 0]], [[[4, 5], [2, 6]], [9, 5]]], [7, [[[3, 7], [4, 3]], [[6, 3], [8, 8]]]], [[2, [[0, 8], [3, 4]]], [[[6, 7], 1], [7, [1, 6]]]], [[[[2, 4], 7], [6, [0, 5]]], [[[6, 8], [2, 8]], [[2, 1], [4, 5]]]], [7, [5, [[3, 8], [1, 4]]]], [[2, [2, 2]], [8, [8, 1]]], [2, 9], [1, [[[9, 3], 9], [[9, 0], [0, 7]]]], [[[5, [7, 4]], 7], 1], [[[[4, 2], 2], 6], [8, 7]]];

  var runningtotal = input[0];

  for (var i = 1; i < input.length; i++) {
    runningtotal = addtwo(runningtotal, input[i]);
  }

  function addtwo(a, b) {
    var c = [];
    c[0] = a;
    c[1] = b;
    return reduce(c);
  }

  var depth = 0;

  function reduce(a) {
    depth = 0;
    var actiontodo = whichaction(a);
    if (actiontodo == 1) {
      a = splits(a);
      a = reduce(a);
    }
    else if (actiontodo == 2) {
      a = explodesA(a);
      a = reduce(a);
    }
    return a;
  }

  function whichaction(sfno) {
    if (!Array.isArray(sfno)) {
      if (sfno > 9) {
        return 1;
      }
      else {
        return 0;
      }
    }
    else {
      var donesomething = 0;
      depth++;
      if (depth > 4) {
        donesomething = 1;
        return 2;
      }
      else {
        for (var i = 0; i < sfno.length; i++) {
          var tempaction = whichaction(sfno[i]);
          if (tempaction == 1) {
            donesomething = 1;
            i = sfno.length;
            return 1;
          }
          if (tempaction == 2) {
            donesomething = 1;
            i = sfno.length;
            return 2;
          }
        }
      }
      if (!donesomething) {
        depth--;
        return 0;
      }
    }
  }

  var explodesuccess = 0;
  var leftno = 0;
  var rightno = 0;

  function explodesA(sfno) { // finds first pair nested inside four pairs and replaces it with -1
    explodesuccess = 0;
    leftno = 0;
    rightno = 0;
    for (var i = 0; i < sfno.length; i++) {
      if (Array.isArray(sfno[i])) {
        for (var j = 0; j < sfno[i].length; j++) {
          if (Array.isArray(sfno[i][j])) {
            for (var k = 0; k < sfno[i][j].length; k++) {
              if (Array.isArray(sfno[i][j][k])) {
                for (var l = 0; l < sfno[i][j][k].length; l++) {
                  if (Array.isArray(sfno[i][j][k][l])) {
                    leftno = sfno[i][j][k][l][0];
                    rightno = sfno[i][j][k][l][1];
                    sfno[i][j][k][l] = -1;
                    explodesuccess = 1;
                    l = sfno[i][j][k].length;
                  }
                }
              }
              if (explodesuccess) {
                k = sfno[i][j].length;
              }
            }
          }
          if (explodesuccess) {
            j = sfno[i].length;
          }
        }
      }
      if (explodesuccess) {
        i = sfno.length;
      }
    }
    return explodesB(sfno);
  }

  var rawvalues = [];

  var rawcount = 0;

  function explodesB(sfno) { // adds the exploded values in the correct places and changes the -1 to 0
    rawvalues = [];
    getraw(sfno);
    for (var i = 0; i < rawvalues.length; i++) {
      if (rawvalues[i] == -1) {
        if (i > 0) {
          rawvalues[i - 1] += leftno;
        }
        if (i < rawvalues.length - 1) {
          rawvalues[i + 1] += rightno;
        }
        rawvalues[i] = 0;
      }
    }
    rawcount = 0;
    return importraw(sfno);
  }

  function getraw(sfno) {
    if (!Array.isArray(sfno)) {
      rawvalues[rawvalues.length] = sfno;
    }
    else {
      for (var i = 0; i < sfno.length; i++) {
        getraw(sfno[i]);
      }
    }
  }

  function importraw(sfno) {
    if (!Array.isArray(sfno)) {
      sfno = rawvalues[rawcount];
      rawcount++;
    }
    else {
      for (var i = 0; i < sfno.length; i++) {
        sfno[i] = importraw(sfno[i]);
      }
    }
    return sfno;
  }


  var splitsuccess = 0;

  function splits(sfno) {
    splitsuccess = 0;
    if (!Array.isArray(sfno)) {
      if (sfno > 9) {
        var pairbase = sfno;
        sfno = [];
        sfno[0] = Math.floor(pairbase / 2);
        sfno[1] = Math.floor((pairbase + 1) / 2);
        splitsuccess = 1;
      }
    }
    else {
      for (var i = 0; i < sfno.length; i++) {
        sfno[i] = splits(sfno[i]);
        if (splitsuccess) {
          i = sfno.length;
        }
      }
    }
    return sfno;
  }

  function magnitude(sfno) {
    if (Array.isArray(sfno)) {
      return 3 * magnitude(sfno[0]) + 2 * magnitude(sfno[1]);
    }
    else return sfno;
  }

  output = JSON.stringify(runningtotal);

  document.getElementById("bongo").innerHTML = output;


}

main();