var firstScore,secondScore,secondScore1,firstScore1,x=0,y=-1,topmargin,topmargin1;
function start() {
  topmargin=490;
  topmargin1=490;
  x=0;y=-1;
    firstScore=0;
    secondScore=0;
    document.getElementById("myModal").style.display="none";
    document.getElementById("secondButton").value="first";
  }
function playerScore(name){
    if(document.getElementById("firstButton").value==="first" && name==="first"){
    firstScore1=Math.floor(Math.random() * 6+1);
    firstScore+=firstScore1;
    x+=firstScore1;
    document.getElementById("firstButton").value="second";
    document.getElementById("firstButton").style.cursor="not-Allowed";
    document.getElementById("secondDice").style.display="none";
    document.getElementById("firstDice").src="dice-"+firstScore1+".png";
    document.getElementById("firstDice").style.display="block";
    document.getElementById("secondButton").style.cursor="";
    document.getElementById("secondButton").value="second";
    if(firstScore==3){
      firstScore=51;
      x=51;
    } else if(firstScore==6){
      firstScore=27;
      x=27;
    }
    else if(firstScore==20){
      firstScore=70;
      x=70;
    }
    else if(firstScore==36){
      firstScore=55;
      x=55;
    } else if(firstScore==63){
      firstScore=95;
      x=95;
    } else if(firstScore==68){
      firstScore=98;
      x=98;
    } else if(firstScore==25){
      document.getElementById("dice1").style.top=490+"px";
      firstScore=5;
      x=5;
    } else if(firstScore==34){
      firstScore=1;
      x=1;
      document.getElementById("dice1").style.top=490+"px";
    } else if(firstScore==47){
      firstScore=19;
      x=19;
    } else if(firstScore==65){
      firstScore=52;
      x=52;
    } else if(firstScore==87){
      firstScore=57;
      x=57;
    } else if(firstScore==91){
      firstScore=61;
      x=61;
    } else if(firstScore==99){
      firstScore=69;
      x=69;
    }
    document.getElementById("firstScore").innerHTML=firstScore;
    if(x<=10){
    document.getElementById("dice1").style.left=51*x+ 330 + "px";
    }
    else
    {
      topmargin=490-48*(firstScore/10);
      if(x%10==0){
        x=10;
      }else{
      x=x%10;}
      document.getElementById("dice1").style.top=topmargin+"px";
      document.getElementById("dice1").style.left=51*x+330 + "px";
    }
    if(firstScore>=100)
    {
      document.getElementById("congrates").innerHTML="Player First Won the Game"; 
      document.getElementById("first11").innerHTML="Play Again"
      document.getElementById("myModal").style.display="block";
      firstScore=0;
      secondScore=0;
      document.getElementById("firstScore").innerHTML=firstScore;
      document.getElementById("secondScore").innerHTML=secondScore;
      document.getElementById("firstButton").value="first";
      document.getElementById("firstButton").style.cursor="";
      document.getElementById("firstDice").style.display="none";
      document.getElementById("secondButton").style.cursor="not-allowed";
      document.getElementById("dice2").style.top="490px";
      document.getElementById("dice2").style.left="330px";
      document.getElementById("dice1").style.top="490px";
      document.getElementById("dice1").style.left="330px";
    }
    }
    else if(document.getElementById("secondButton").value==="second" && name==="second"){
    secondScore1=Math.floor(Math.random() * 6+1);
    secondScore+=secondScore1;
    y+=secondScore1;
    document.getElementById("secondDice").src="dice-"+secondScore1+".png";
    document.getElementById("secondDice").style.display="block";
    document.getElementById("firstDice").style.display="none";
    document.getElementById("secondButton").value="first";
    document.getElementById("firstButton").value="first";
    document.getElementById("secondButton").style.cursor="not-allowed";
    document.getElementById("firstButton").style.cursor="";
    if(secondScore==3){
      secondScore=51;
      y=51;
    } else if(secondScore==6){
      secondScore=27;
      y=27;
    }
    else if(secondScore==20){
      secondScore=70;
      y=70;
    }
    else if(secondScore==36){
      secondScore=55;
      y=55;
    } else if(secondScore==63){
      secondScore=95;
      y=95;
    } else if(secondScore==68){
      secondScore=98;
      y=98;
    } else if(secondScore==25){
      secondScore=5;
      y=5;
      document.getElementById("dice2").style.top="490px";
    } else if(secondScore==34){
      secondScore=1;
      y=1;
      document.getElementById("dice2").style.top="490px";
    } else if(secondScore==47){
      secondScore=19;
      y=19;
    } else if(secondScore==65){
      secondScore=52;
      y=52;
    } else if(secondScore==87){
      secondScore=57;
      y=57;
    } else if(secondScore==91){
      secondScore=61;
      y=61;
    } else if(secondScore==99){
      secondScore=69;
      y=69;
    }
    document.getElementById("secondScore").innerHTML=secondScore;
    if(y<=10){
      document.getElementById("dice2").style.left=51*y+330 + "px";
      }
      else
      {
        topmargin1=490-48*(secondScore/10);
        if(y%10==0){
          y=10;
        } else {
        y=y%10;}
        console.log(y);
        document.getElementById("dice2").style.top=topmargin1+"px";
        document.getElementById("dice2").style.left=51*y+330 + "px";
      }
      if(secondScore>=100)
    {
      document.getElementById("congrates").innerHTML="Player Second Won the Game"; 
      document.getElementById("first11").innerHTML="Play Again"
      document.getElementById("myModal").style.display="block";
      firstScore=0;
      secondScore=0;
      document.getElementById("firstScore").innerHTML=firstScore;
      document.getElementById("secondScore").innerHTML=secondScore;
      document.getElementById("firstButton").value="first";
      document.getElementById("firstButton").style.cursor="";
      document.getElementById("secondDice").style.display="none";
      document.getElementById("secondButton").style.cursor="not-allowed";
      document.getElementById("dice2").style.top="490px";
      document.getElementById("dice2").style.left="330px";
      document.getElementById("dice1").style.top="490px";
      document.getElementById("dice1").style.left="330px";
    }

    }
}