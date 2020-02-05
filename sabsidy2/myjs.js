var firstScore=0,secondScore=0,x=0,y=0,x1=0,y1=0,j=0;
let color=[
    "rgb(102, 179, 255)" , "rgb(102, 255, 255)"
]
function gridm() {
    for(var i=36;i>=1;i--){
        var node=document.createElement("div");
        node.className=`grid-item c${i}`;
        if(i%6==0){j++;}
        node.style.backgroundColor=color[(i+j)%2];
        var textnode = document.createTextNode(i);
        var imgNode = document.createElement("img");
        imgNode.id=`img${i}`;
        node.appendChild(textnode);
        node.appendChild(imgNode);
        (document.querySelector(".grid-container")).appendChild(node);
    }
}
window.onload=gridm;
function start() {
      document.getElementById("myModal").style.display="none";
      document.getElementById("secondButton").value="first";
      document.getElementById(y1).style.visibility="hidden";
      document.getElementById(y1).style.visibility="hidden";
    }

function playerScore(name){
    if(document.getElementById("firstButton").value==="first" && name==="first"){
    x=Math.floor(Math.random() * 6+1);
    firstScore+=x;
    document.getElementById("firstButton").value="second";
    document.getElementById("firstButton").style.cursor="not-Allowed";
    document.getElementById("secondDice").style.display="none";
    document.getElementById("firstDice").src="dice-"+x+".png";
    document.getElementById("firstDice").style.display="block";
    document.getElementById("secondButton").style.cursor="";
    document.getElementById("secondButton").value="second";
    
    if(firstScore==5){
        firstScore=17;
        alert("jump up 5 to 17");
    } else if(firstScore==29){
        firstScore=35;
        alert("jump up 29 to 35");
    } else if(firstScore==10){
        firstScore=4;
        alert("jump down 10 to 4");
    } else if(firstScore==27){
        firstScore=15;
        alert("jump down 27 to 15");
    } else if(firstScore==35){
        firstScore=17;
        alert("jump down 35 to 17")
    }


    document.getElementById("firstScore").innerHTML=firstScore;
    if(firstScore>=36)
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
    }
    document.getElementById(x1).style.visibility="hidden";
    let im="img"+firstScore;
    document.getElementById(im).src="player1.png";
    document.getElementById(im).style.visibility="visible";
    x1=im;
    
    }
    else if(document.getElementById("secondButton").value==="second" && name==="second"){
    y=Math.floor(Math.random() * 6+1);
    secondScore+=y;
    document.getElementById("secondDice").src="dice-"+y+".png";
    document.getElementById("secondDice").style.display="block";
    document.getElementById("firstDice").style.display="none";
    document.getElementById("secondButton").value="first";
    document.getElementById("firstButton").value="first";
    document.getElementById("secondButton").style.cursor="not-allowed";
    document.getElementById("firstButton").style.cursor="";
    
    if(secondScore==5){
        secondScore=17;
        alert("jump up 5 to 17");
    } else if(secondScore==29){
        secondScore=35;
        alert("jump up 29 to 35");
    } else if(secondScore==10){
        secondScore=4;
        alert("jump down 10 to 4");
    } else if(secondScore==27){
        secondScore=15;
        alert("jump down 27 to 15");
    } else if(secondScore==35){
        secondScore=17;
        alert("jump down 35 to 17");
    }
    document.getElementById("secondScore").innerHTML=secondScore;
    if(secondScore>=36)
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
    }

    document.getElementById(y1).style.visibility="hidden";
    let im="img"+secondScore;
    document.getElementById(im).src="player2.jpeg";
    document.getElementById(im).style.visibility="visible";
    y1=im;
     
    }
}