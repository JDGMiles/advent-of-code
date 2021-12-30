function main() {

  var output1 = "";
  var output2 = "";

  var input = ["RUDULRLLUULRURDDRRUDURULLLDRLRLUDDLUDUDDUDRRDUDULDUUULLRULLRLDDLDLDDRLRRRRUDLLDDUULDRLLUDDRRUURLULRRRDLLURRUUDURUDDURLUDDDLUDDUUDUURUDLRDRDRLRDRLDRUDRUUDLRDDRRURDDLRDDRRURDUDDLULLUDRURURRRLRRUDUULULULRRLDLUDUURRLLRUDLLDRDDLRRRULRUDLULDDLLLULDLRUDLLLLRDDLRDRLDRLLRDRRDLRDULULRLLLDRUDRRRUULRUULDRURLUDRURRDLLDLRDLDDDDRRLUDLRRLUUUURDRDDLRRURURRDUULLRLURLURUDDDRDURDUUDRLRLRRLDDLDLDLDDDUDDULURLDDLLRLRRDULUDDLULRLUDDLDLRULUUUDRLDRUDURLUDDRLLRUULDLRRRRDLLLLURULLRDRRUDLUULRRDLLRLRLUDLDDULLDLLRDLDLL","LLUUUUUUDUDRLRDRDLDURRRLLRRLRURLLUURRLLUDUDLULUURUUURDLUDLDDLULLRDLRUULDLRDUDURLLDDUDUDULLUDDUULLLUULRRRLULRURRDLRUDUDDURRRDRUURDURLLULLRULLDRUULLURLDRDUUDDDDDDRRLDRLRRRLULDDUURRLLLLDRURLURDRDRDURUDUURRDUDUDRLLUUDDRLUDDDRDLDLRLDRURRDLLRULDRLLURURRLUULLRLRRURDDRDRUUURUURUUUDLLRRLUDRLDLRLURLDLUDDUDDDLDUDRRLDLRURULRLLRDUULURRRULDLLLRLDDDUURRRRDULLRURRLULULDLRRUDUDDLRUURDLDUDDUDRRDLRRRDUDUUUDLLDDDDLURLURRRUUULLLULRRLLLLLLULDUUDLRUDRRDLRDUUDUDLLRLDLLRUURDUUURUUUDDLLUUDLULDURLULULUUUDRUDULLURRULRULLRDLDDU","RLUUURULLDLRLDUDRDURRDUURLLUDDDUULRRRLRLURDDRUULUDULDUUDDDDUDDDDRUDDLDUUDRUDLRRRLLRDDLLLRLLRUULRUULDDRURRLURRLRLULDDRRRDDURDDRDRDULRUDRUUDULRLLULDLRLLDRULRDDRRDDUDLRLLUDRDRRRLUDULRDLRDDURRUUDDRRUDURRUUUDDRRDUDURLUUDUDUURDDDLURLULLUULULURUDUUDRUDULLUUULURDLDUULLDDLLDULRLRLRDUUURUUDLRLDURUDRLDULLUDLDLLRDUURRDUDURLUUUDLLRRULRLULRLDLLURDURRULRLLRRDUDLLRDRRRRDLUUDRUUUDDLRLUDDDDDDRURRRUUURRDLLRURLDDLLDLRRLLLDRRULRRUDLDRDDRRLULURLLUURURURRRRUUUUURUDURLRLLLULULDLLDLRDRRULUDUDRDRRDRDRRDUDLLLRUDRUDDDULRULRRRDRLRUUUURUDURDUUULLULRUDDULDUUDLDURRD","ULRULDDLDLULLLRRRLRUDDDDDLLDDUDLRRDULUUDRDLRRURDRRLUULRURUDRRULDLLLUDRUUDULULUDDRUDDDRDURRRDRDUUURLRDULUDRDRLDRUDDLLLDRRULUDLUDLDLLRRUDUULULDLDLLUURDLDDLLUUDURLURLLLDRDLDRRLRULUURRDRULRUUURULRRUDDDDLLDLDDLLRRLRRRRDUUDUDLDRDRRURDLRURULDLRDLLLLRUDRLLRDLRLRDURDRUDURRRLRDRDLLRLUDDDDRLRLLDUURRURLUURUULUDLUURDRRUDDLUDUDDDURRDRUDRLRULDULUUUUUUDDUDRUDUUURUDRRDLUDLUUDUULUDURDLDDDLLURRURUUDUDDRRDRLLULULDRLRURRDDDRDUUURDDDRULUDRDDLDURRLDDDLRRRLDDRDURULDLUDLLLURLURRLRRULDLLDDUDRRULDRRRRLURRUULRRRUDLURDLLDLLDULUUDRRLDLLLDRLRUDLUULDLDRUDUDURDRUDRDDDLRLULLUR","LRLUUURRLRRRRRUURRLLULRLULLDLUDLUDRDDRLDLRLULLURDURLURDLLRLDUUDDURRRRLDLLRULLRLDLLUUDRLDDLLDRULDRLLRURDLRURRUDLULLRURDLURRURUDULLDRLLUUULUDRURRUUDUDULUUULRLDDULDRDLUDDUDDDLRURULLDLLLRLLUURDLRUDLLLLDLLRLRUUUDDRUUUUDLDLRDDURLDURUULLLUUDLLLLDULRRRLLDLDRRDRLUDRUDURLLUDLRLLUDUDRDDDRDLRDLRULUULDRLUDLRLDUURLRRLUDDDUUDDDUDRLDLDUDLURUULLDDDURUUULRLUDLDURUUDRDRURUDDUURDUUUDLLDLDLDURUURLLLLRURUURURULRULLRUDLRRUUUUUDRRLLRDDUURDRDRDDDUDRLURDRRRUDLLLDURDLUUDLLUDDULUUDLDUUULLDRDLRURUURRDURRDLURRRRLLUUULRDULDDLDUURRDLDLLULRRLLUDLDUDLUUL"];

  var currentnum = "5";

  function decodednumber1(startingnum,code){
    currentnum = startingnum;
    for(var i =0; i< code.length; i++){
      if(currentnum=="1"){
        if(code[i]=="R"){
          currentnum="2";
        }
        if(code[i]=="D"){
          currentnum="4";
        }
      }
      else if(currentnum=="3"){
        if(code[i]=="L"){
          currentnum="2";
        }
        if(code[i]=="D"){
          currentnum="6";
        }
      }
      else if(currentnum=="7"){
        if(code[i]=="R"){
          currentnum="8";
        }
        if(code[i]=="U"){
          currentnum="4";
        }
      }
      else if(currentnum=="9"){
        if(code[i]=="L"){
          currentnum="8";
        }
        if(code[i]=="U"){
          currentnum="6";
        }
      }
      else if(currentnum=="2"){
        if(code[i]=="R"){
          currentnum="3";
        }
        if(code[i]=="L"){
          currentnum="1";
        }
        if(code[i]=="D"){
          currentnum="5";
        }
      }
      else if(currentnum=="4"){
        if(code[i]=="R"){
          currentnum="5";
        }
        if(code[i]=="U"){
          currentnum="1";
        }
        if(code[i]=="D"){
          currentnum="7";
        }
      }
      else if(currentnum=="6"){
        if(code[i]=="L"){
          currentnum="5";
        }
        if(code[i]=="U"){
          currentnum="3";
        }
        if(code[i]=="D"){
          currentnum="9";
        }
      }
      else if(currentnum=="8"){
        if(code[i]=="R"){
          currentnum="9";
        }
        if(code[i]=="L"){
          currentnum="7";
        }
        if(code[i]=="U"){
          currentnum="5";
        }
      }
      else if(currentnum=="5"){
        if(code[i]=="R"){
          currentnum="6";
        }
        if(code[i]=="L"){
          currentnum="4";
        }
        if(code[i]=="U"){
          currentnum="2";
        }
        if(code[i]=="D"){
          currentnum="8";
        }
      }
    }
    return currentnum;
  }

  function decodednumber2(startingnum,code){
    currentnum = startingnum;
    for(var i =0; i< code.length; i++){
      if(currentnum=="1"){
        if(code[i]=="D"){
          currentnum="3";
        }
      }
      else if(currentnum=="5"){
        if(code[i]=="R"){
          currentnum="6";
        }
      }
      else if(currentnum=="9"){
        if(code[i]=="L"){
          currentnum="8";
        }
      }
      else if(currentnum=="D"){
        if(code[i]=="U"){
          currentnum="B";
        }
      }
      else if(currentnum=="2"){
        if(code[i]=="R"){
          currentnum="3";
        }
        if(code[i]=="D"){
          currentnum="6";
        }
      }
      else if(currentnum=="4"){
        if(code[i]=="L"){
          currentnum="3";
        }
        if(code[i]=="D"){
          currentnum="8";
        }
      }
      else if(currentnum=="A"){
        if(code[i]=="R"){
          currentnum="B";
        }
        if(code[i]=="U"){
          currentnum="6";
        }
      }
      else if(currentnum=="C"){
        if(code[i]=="L"){
          currentnum="B";
        }
        if(code[i]=="U"){
          currentnum="8";
        }
      }
      else if(currentnum=="3"){
        if(code[i]=="L"){
          currentnum="2";
        }
        if(code[i]=="U"){
          currentnum="1";
        }
        if(code[i]=="R"){
          currentnum="4";
        }
        if(code[i]=="D"){
          currentnum="7";
        }
      }
      else if(currentnum=="8"){
        if(code[i]=="L"){
          currentnum="7";
        }
        if(code[i]=="U"){
          currentnum="4";
        }
        if(code[i]=="R"){
          currentnum="9";
        }
        if(code[i]=="D"){
          currentnum="C";
        }
      }
      else if(currentnum=="B"){
        if(code[i]=="L"){
          currentnum="A";
        }
        if(code[i]=="U"){
          currentnum="7";
        }
        if(code[i]=="R"){
          currentnum="C";
        }
        if(code[i]=="D"){
          currentnum="D";
        }
      }
      else if(currentnum=="6"){
        if(code[i]=="L"){
          currentnum="5";
        }
        if(code[i]=="U"){
          currentnum="2";
        }
        if(code[i]=="R"){
          currentnum="7";
        }
        if(code[i]=="D"){
          currentnum="A";
        }
      }
      else if(currentnum=="7"){
        if(code[i]=="L"){
          currentnum="6";
        }
        if(code[i]=="U"){
          currentnum="3";
        }
        if(code[i]=="R"){
          currentnum="8";
        }
        if(code[i]=="D"){
          currentnum="B";
        }
      }
    }
    return currentnum;
  }

  for(var i=0; i < input.length; i++){
    output1 += ""+decodednumber1(currentnum,input[i]);
  }

  currentnum = "5";

  for(var i=0; i < input.length; i++){
    output2 += ""+decodednumber2(currentnum,input[i]);
  }

  document.getElementById("bongo").innerHTML = output1;
  document.getElementById("drum").innerHTML = output2;

}

main();