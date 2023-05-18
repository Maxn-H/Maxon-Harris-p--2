function displayText() {
    var text = document.getElementById("textField");
    text.style.display = "block";
    var name = document.getElementById("rapper");
    var newID = document.getElementById("aboutt");
    newID.id = "abouttt";

    
  }

  function play() {
 var song = document.getElementById("song");
 song.play();
  }


  function resetPage() {
    var clearOne = document.getElementById("rapper");
    var clearTwo = document.getElementById("artist");
    var clearThree = document.getElementById("image");
    var clearFour = document.getElementById("textField");
    var clearBody = document.getElementById("abouttt");
    clearOne.textContent = '';
    clearTwo.textContent = '';
    clearThree.style.display = "none";
    clearFour.textContent = '';
    clearBody.id = "";
    let image = document.getElementById("image");
    
  }

  function kenSong() {
    var song = document.getElementById("song");
    song.src = "music/Ken Carson - (INSTRUMENTAL) BEST VERSION.mp3";
  }

  function stop() {
    var song = document.getElementById("song");
    song.src = "";
  }

  function showArtists() {
    const egos = ["Alter egos","XMAN", "TEEN X"];
var oImg = document.createElement("img");
var title = document.createElement("h3");
//document.getElementById("Names").innerHTML = egos;
var main = document.getElementById("main");
oImg.setAttribute('src', 'https://lollastockholm.com/wp-content/uploads/2023/02/Ken-Carson.jpg');
oImg.setAttribute('alt', 'na');
oImg.setAttribute('height', '1px');
oImg.setAttribute('width', '1px');
oImg.setAttribute('id', 'imageTwo');
main.appendChild(oImg);
Names.appendChild(title);
let text = "";
for (let i = 0; i < egos.length; i++) {
  text += egos[i] + "<br>";
}
var thankYou = document.getElementById("Thank-You");
if (thankYou.textContent = "Hit the third button to the right") {
thankYou.textContent = "";
}
//thankYou.textContent = "";
document.getElementById("Names").innerHTML = text;
var name = document.getElementById("rapper");
var info = document.getElementById("textField");
name.textContent = "Ken Carson";
info.textContent = 'Ken Carson is one of the three artists signed to Opium.  With his distinct sound and ear cathcing melodies' + 
' it is safe to say he has cultivated his own sound.  All black seems to be the perfect attire.'
var artist = document.getElementById('artist');
artist.textContent = 'Rapper';

  }

  function Thank() {
    var thankYou = document.getElementById("Thank-You");
    thankYou.textContent = "Hit the third button to the right";
  }


let button = document.getElementById("Surprise");
button.addEventListener("click", Music);
function Music() {
    //about = document.getElementById('aboutt').style.animationDelay;
    document.getElementById("aboutt").style.animation = "blinkingBackground 0.4s infinite";
    document.getElementById("aboutt").style.animation
}


 