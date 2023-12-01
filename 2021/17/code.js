function main() {

  var output = "bongo";

  var input = [282, 314, -80, -45];

  var velocity = [24, 46];

  var position = [0, 0];

  var steps = 0;

  var maxheight = -80;

  var possiblebeststartingy = 0;

  var beststartingy = 0;

  var hits = 0;

  function onestep() {
    position[0] += velocity[0];
    position[1] += velocity[1];
    if (velocity[0] > 0) {
      velocity[0]--;
    }
    if (velocity[0] < 0) {
      velocity[0]++;
    }
    velocity[1]--;
    steps++;
    if(position[1]>maxheight){
      maxheight = position[1];
    }
  }


  function fireprobe() {
    while (position[0] < input[1] + 1 && position[1] > input[2] - 1) {
      if(position[0]>input[0]-1 && position[0]<input[1]+1 && position[1]>input[2]-1 && position[1]<input[3]+1){
//        output = "Probe reaches target area at point: " + position;
        beststartingy = possiblebeststartingy;
        hits++;
        position[0]=input[0]+1;
        position[1]=input[2]-1;
      }
      else{
        onestep();
      }
    }
  }

  var testxupto = 7000;
  var testyupto = 80;

  for (var x = 0; x<testxupto; x++){
    for (var i = -100 ; i< testyupto; i++){
      velocity[0] = x;
      velocity[1] = i;
      position[0]=0;
      position[1]=0;
      steps = 0;
      maxheight = -80;
      possiblebeststartingy = i;
      fireprobe();
    }
  }

/*  var maxheight = -80;

  velocity[0] = 24;
  velocity[1] = beststartingy;
  position[0]=0;
  position[1]=0;
  steps = 0;
  maxheight = -80;

  fireprobe();

  output = maxheight;

  */

  output = hits;


  document.getElementById("bongo").innerHTML = output;


}

main();