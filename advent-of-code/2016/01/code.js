function main() {

  var output1 = "";
  var output2 = "";

  var input = [["L", 4], ["L", 3], ["R", 1], ["L", 4], ["R", 2], ["R", 2], ["L", 1], ["L", 2], ["R", 1], ["R", 1], ["L", 3], ["R", 5], ["L", 2], ["R", 5], ["L", 4], ["L", 3], ["R", 2], ["R", 2], ["L", 5], ["L", 1], ["R", 4], ["L", 1], ["R", 3], ["L", 3], ["R", 5], ["R", 2], ["L", 5], ["R", 2], ["R", 1], ["R", 1], ["L", 5], ["R", 1], ["L", 3], ["L", 2], ["L", 5], ["R", 4], ["R", 4], ["L", 2], ["L", 1], ["L", 1], ["R", 1], ["R", 1], ["L", 185], ["R", 4], ["L", 1], ["L", 1], ["R", 5], ["R", 1], ["L", 1], ["L", 3], ["L", 2], ["L", 1], ["R", 2], ["R", 2], ["R", 2], ["L", 1], ["L", 1], ["R", 4], ["R", 5], ["R", 53], ["L", 1], ["R", 1], ["R", 78], ["R", 3], ["R", 4], ["L", 1], ["R", 5], ["L", 1], ["L", 4], ["R", 3], ["R", 3], ["L", 3], ["L", 3], ["R", 191], ["R", 4], ["R", 1], ["L", 4], ["L", 1], ["R", 3], ["L", 1], ["L", 2], ["R", 3], ["R", 2], ["R", 4], ["R", 5], ["R", 5], ["L", 3], ["L", 5], ["R", 2], ["R", 3], ["L", 1], ["L", 1], ["L", 3], ["R", 1], ["R", 4], ["R", 1], ["R", 3], ["R", 4], ["R", 4], ["R", 4], ["R", 5], ["R", 2], ["L", 5], ["R", 1], ["R", 2], ["R", 5], ["L", 3], ["L", 4], ["R", 1], ["L", 5], ["R", 1], ["L", 4], ["L", 3], ["R", 5], ["R", 5], ["L", 3], ["L", 4], ["L", 4], ["R", 2], ["R", 2], ["L", 5], ["R", 3], ["R", 1], ["R", 2], ["R", 5], ["L", 5], ["L", 3], ["R", 4], ["L", 5], ["R", 5], ["L", 3], ["R", 1], ["L", 1], ["R", 4], ["R", 4], ["L", 3], ["R", 2], ["R", 5], ["R", 1], ["R", 2], ["L", 1], ["R", 4], ["R", 1], ["L", 3], ["L", 3], ["L", 5], ["R", 2], ["R", 5], ["L", 1], ["L", 4], ["R", 3], ["R", 3], ["L", 3], ["R", 2], ["L", 5], ["R", 1], ["R", 3], ["L", 3], ["R", 2], ["L", 1], ["R", 4], ["R", 3], ["L", 4], ["R", 5], ["L", 2], ["L", 2], ["R", 5], ["R", 1], ["R", 2], ["L", 4], ["L", 4], ["L", 5], ["R", 3], ["L", 4]];

  var direction = 0;

  var x = 0;

  var y = 0;

  var coords = [];

  for (var i = 0; i < 2000; i++) {
    coords[i] = [];
    for (var j = 0; j < 2000; j++) {
      coords[i][j] = 0;
    }
  }

  var xpos = 1000;

  var ypos = 1000;

  coords[xpos][ypos] = 1;

  var firstcrosspointfound = 0;

  var firstcrossx = 0;

  var firstcrossy = 0;

  for (var i = 0; i < input.length; i++) {
    if (input[i][0] == "L") {
      direction--;
      if (direction == -1) {
        direction = 3;
      }
    }
    else {
      direction++;
      if (direction == 4) {
        direction = 0;
      }
    }
    if (direction == 0) {
      y += input[i][1];
      for (var j = 1; j < input[i][1] + 1; j++) {
        if (coords[xpos][ypos + j] == 1) {
          if (!firstcrosspointfound) {
            firstcrosspointfound = 1;
            firstcrossx = xpos;
            firstcrossy = ypos+j;
          }
        }
        coords[xpos][ypos + j] = 1;
      }
      ypos += input[i][1];
    }
    if (direction == 1) {
      x += input[i][1];
      for (var j = 1; j < input[i][1] + 1; j++) {
        if (coords[xpos + j][ypos] == 1) {
          if (!firstcrosspointfound) {
            firstcrosspointfound = 1;
            firstcrossx = xpos+j;
            firstcrossy = ypos;
          }
        }
        coords[xpos + j][ypos] = 1;
      }
      xpos += input[i][1];
    }
    if (direction == 2) {
      y -= input[i][1];
      for (var j = 1; j < input[i][1] + 1; j++) {
        if (coords[xpos][ypos - j] == 1) {
          if (!firstcrosspointfound) {
            firstcrosspointfound = 1;
            firstcrossx = xpos;
            firstcrossy = ypos-j;
          }
        }
        coords[xpos][ypos - j] = 1;
      }
      ypos -= input[i][1];
    }
    if (direction == 3) {
      x -= input[i][1];
      for (var j = 1; j < input[i][1] + 1; j++) {
        if (coords[xpos - j][ypos] == 1) {
          if (!firstcrosspointfound) {
            firstcrosspointfound = 1;
            firstcrossx = xpos-j;
            firstcrossy = ypos;
          }
        }
        coords[xpos - j][ypos] = 1;
      }
      xpos -= input[i][1];
    }
  }

  output1 = Math.abs(xpos-1000) + Math.abs(ypos-1000);
  output2 = firstcrossx + " " + firstcrossy;

  document.getElementById("bongo").innerHTML = output1;
  document.getElementById("drum").innerHTML = output2;

}

main();