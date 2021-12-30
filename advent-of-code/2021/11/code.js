function main() {

  var runningtotal = 0;

  var input = [[6,7,4,4,6,3,8,4,5,5],[3,1,3,5,7,4,5,4,1,8],[4,7,5,4,1,2,3,2,7,1],[4,2,2,4,2,5,7,1,6,1],[8,1,6,7,1,8,6,5,4,6],[2,2,6,8,5,7,7,6,7,4],[7,1,7,7,7,6,8,1,7,5],[2,6,6,2,2,5,5,2,7,5],[4,6,5,5,3,4,3,3,7,6],[7,8,5,2,5,2,6,1,6,8]]

  var output = "";

  var flashestotal = 0;

  var notallflash = 1;

  var turncount = 0;

  function energyincrease() {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        input[i][j]++;
      }
    }
  }

  function zeroset() {
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if(input[i][j]==-1){input[i][j]=0;}
      }
    }
  }

  function flash(x, y) {
    if (x > 0) {
      if (input[x - 1][y] != -1) {
        input[x - 1][y]++;
      }
      if (y > 0) {
        if (input[x - 1][y - 1] != -1) {
          input[x - 1][y - 1]++;
        }
      }
      if (y < 9) {
        if (input[x - 1][y + 1] != -1) {
          input[x - 1][y + 1]++;
        }
      }
    }
    if (x < 9) {
      if (input[x + 1][y] != -1) {
        input[x + 1][y]++;
      }
      if (y > 0) {
        if (input[x + 1][y - 1] != -1) {
          input[x + 1][y - 1]++;
        }
      }
      if (y < 9) {
        if (input[x + 1][y + 1] != -1) {
          input[x + 1][y + 1]++;
        }
      }
    }
    if (y > 0) {
      if (input[x][y - 1] != -1) {
        input[x][y - 1]++;
      }
    }
    if (y < 9) {
      if (input[x][y + 1] != -1) {
        input[x][y + 1]++;
      }
    }
    input[x][y] = -1;
    flashestotal++;
  }

  function oneturn() {
    energyincrease();
    var running = 1;
    while (running) {
      var totalbefore = flashestotal;
      for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
          if (input[i][j] > 9) {
            flash(i, j);
          }
        }
      }
      if (totalbefore == flashestotal) {
        running = 0;
      }
    }
  }

  function checkforallflash(){
    var flashcount = 0;
    for (var i = 0; i < 10; i++) {
      for (var j = 0; j < 10; j++) {
        if(input[i][j]==-1){
          flashcount++;
        }
      }
    }
    if(flashcount==100){return 1;}
    else{return 0;}
  }

  while(notallflash){
    turncount++;
    oneturn();
    if(checkforallflash()==1){
      output = turncount;
      notallflash=0;
    }
    else{zeroset();}
  }

  document.getElementById("bongo").innerHTML = output;


}

main();