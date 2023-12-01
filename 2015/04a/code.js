function main() {

  var output = "";

  var input = "";

  var password = "yzbqklnj";

  var n=999999;

  for (var i=0; i<n; i++){
    var passhash = CryptoJS.MD5(password+""+i).toString();
    if(passhash[0]==0 && passhash[1]==0 && passhash[2]==0 && passhash[3]==0 && passhash[4]==0){
      output = i + " " + passhash;
      i = n;
    }
  }
  
  document.getElementById("bongo").innerHTML = output;

}

main();