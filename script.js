var imgs = [
    'https://www.thefamouspeople.com/profiles/images/pocahontas-1.jpg',
    'https://static1.businessinsider.com/image/54e6e58f69bedd990f018299-1500/elsa-disney-frozen-13.jpg',
    'https://ih1.redbubble.net/image.189932403.8635/flat,1000x1000,075,f.jpg',
    'https://www.khwiki.com/images/0/05/Rapunzel_KHIII.png'
];

var changedImgs = [
    'https://dmthomps.files.wordpress.com/2013/03/pocahontas-pocahontas-32767053-707-1000.jpg',
    'https://images8.alphacoders.com/533/533919.jpg',
    'https://cdn.collider.com/wp-content/uploads/shrek-forever-after-movie-image-18.jpg',
    'https://vignette1.wikia.nocookie.net/the-disney-roleplay/images/5/5a/Rapunzelpainting.jpg/revision/latest?cb=20140917134704'
];

var disneyChars = [
    `<h3>Pocahontas</h3><p>Holy shit some shit about Pocahontas</p><img onmouseover='imgChange(0)' onmouseout='imgChangeBack(0)' id='img' src='${imgs[0]}'/>`,
    `<h3>Elsa</h3><p>Holy shit Elsa</p><img onmouseover='imgChange(1)' onmouseout='imgChangeBack(1)' id='img' src='${imgs[1]}'/>`,
    `<h3>Shrek</h3><p>Holy shit Shrek</p><ul><li>Shrek wa numba wan</li><li>Shrek ga daisuki</li></ul><img onmouseover='imgChange(2)' onmouseout='imgChangeBack(2)' id='img' src='${imgs[2]}'/>`,
    `<h3>Rapunzel</h3><p>Holy shit Rapunzel</p><img onmouseover='imgChange(3)' onmouseout='imgChangeBack(3)' id='img' src='${imgs[3]}'/>`
];

var charCounter;
function epicFunction(){
    var x = Math.floor((Math.random() * disneyChars.length-1) + 1);
    if(x != charCounter){
        document.getElementById("characterDesc").innerHTML = disneyChars[x];
        charCounter = x;
    }
    else epicFunction();
}

// var img = document.getElementById("img");
// img.addEventListener("hover",()=>{
// });

function imgChange(i){
    var img = document.getElementById("img");
    var src = changedImgs[i];
    img.setAttribute("src",src);
}
function imgChangeBack(i){
    var img = document.getElementById("img");
    var src = imgs[i];
    img.setAttribute("src",src);
}

var slider = document.getElementById("slider");
var resp = document.getElementById("resp");
var counter = document.getElementById("counter");


function disneyFanbois(){
    var value = slider.value;
    counter.innerHTML = value +"%";
    if(value < 50) resp.innerHTML = "Not cash money";
    else if(value == 50) resp.innerHTML = "Perfectly balanced as all things should be";
    else resp.innerHTML = "Dank";
}

function search(){
    var query = document.getElementById("search").value;
    switch(query){
        case "Shrek":
            document.getElementById("characterDesc").innerHTML = disneyChars[2];
            charCounter = 2;
            break;
        case "Pocahontas":
            document.getElementById("characterDesc").innerHTML = disneyChars[0];
            charCounter = 0;
            break;
        case "Elsa":
            document.getElementById("characterDesc").innerHTML = disneyChars[1];
            charCounter = 1;
            break;
        case "Rapunzel":
            document.getElementById("characterDesc").innerHTML = disneyChars[3];
            charCounter = 3;
            break;
        default:
                document.getElementById("characterDesc").innerHTML = "<h2 style='font-family:cursive; color:red;'>Sorry...the character you search for doesn't isn't in our records</h2><strong style='color:red;'>Ensure you have properly spelled and capitalised the character's name.</strong>";
    }
}